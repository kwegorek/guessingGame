import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert, ScrollView, Dimensions} from 'react-native'
//core wrapper component
import Colors from '../constans/colors'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import GameOver from './GameOver'
//function outside -> not rerendered
import DefaultStyles from '../constans/default-style'
import {Ionicons} from '@expo/vector-icons'
import MainButton from '../components/MainButton'

const genrateRandomBetwen = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  let rndNum = Math.random() * (max - min) + min //random between 1 and 99
  rndNum = Math.floor(rndNum)

  if (rndNum === exclude) {
    return genrateRandomBetwen(min, max, exclude)
  } else {
    return rndNum
  }
}

const renderListItem = (value, indx, numRound) => (
  <View style={styles.listItem} key={indx}>
    <Text style={styles.listItemText}>#{numRound}</Text>
    <Text style={styles.listItemText}>{value}</Text>
  </View>
)

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    minWidth: 300,
    maxWidth:'95%',
    width: '80%',
  
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  list: {
    flex: 1,
    width: Dimensions.get('window').height > 500 ? '60%' : '80%'
  },

 

  listContent: {
    flexGrow: 1, //take space but keep scroll!!!!
    alignItems: 'center',
    justifyContent: 'center',
   
    flex: 1,
    width: '100%',
  },
})

const GameScreen = (props) => {
  const initialGuess = genrateRandomBetwen(1, 100, props.userChoice)
  //useRef - survives rerendering

  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [rounds, setRounds] = useState(0)

  const [guessPast, setPastGuesses] = useState([initialGuess]) //for first render - created - detachted state handling

  const currentLow = useRef(1)
  const currentHigh = useRef(100)



  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window'))

  const updateLayout = () => {
    setButtonWidth(Dimensions.get('window').width/4)
  }

  Dimensions.addEventListener('change', updateLayout)

  const {userChoice, onGameOver} = props

  useEffect(() => {
    // console.log(currentGuess, Number(userChoice),'curRounds')

    if (currentGuess === Number(userChoice)) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver])

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Wrong!', [{text: 'Sorry!', style: 'cancel'}])

      return
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const next = genrateRandomBetwen(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(next)

    setRounds((curRounds) => curRounds + 1)

    setPastGuesses((curGuess) => [next, ...curGuess])
  } //lattest state to update

  
  return (
    <View style={styles.gameScreen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
        {/* <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        /> */}
      </Card>
      <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.listContent}>
          {guessPast.map((guess, indx) =>
            renderListItem(guess, indx, guessPast.length - indx)
          )}
        </ScrollView>
      </View>
    </View>
  )
}

//use funtion to have cleaner markup

export default GameScreen
