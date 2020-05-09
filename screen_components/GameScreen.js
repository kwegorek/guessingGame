import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert, ScrollView} from 'react-native'
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


const renderListItem = (value, indx, numRound) => (<View  style={styles.listItem}key={indx}>
   <Text style={styles.listItemText}>#{numRound}</Text>
  <Text style={styles.listItemText}>{value}</Text>
</View>)

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
    width: 300,
    maxWidth: '80%',
  },
  listItem:{
    borderColor:'black', 
    padding:15, 
    borderWidth:1,
    marginVertical:10, 
    backgroundColor:'white', 
    flexDirection:'row', 
    justifyContent:'space-between', 

    
  }, 
  list:{
    flex:1,
    width:'100%'
  }, 

  listItemText:{
    paddingRight:10

  }, 

  listContent:{
    felxGrow:1, //take space but keep scroll!!!!
    alignItems:'center', 
    justifyContent:'center'
  }
})
   

const GameScreen = (props) => {
  const initialGuess = genrateRandomBetwen(1, 100, props.userChoice)
//useRef - survives rerendering

  const [currentGuess, setCurrentGuess] = useState(
    initialGuess
  )
  const [rounds, setRounds] = useState(0)

const [guessPast, setPastGuesses] = useState([initialGuess]) //for first render - created - detachted state handling

  const currentLow = useRef(1)
  const currentHigh = useRef(100)


  const { userChoice, onGameOver } = props;

  useEffect(() => {


    // console.log(currentGuess, Number(userChoice),'curRounds')


    if (currentGuess === Number(userChoice)) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);




  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Wrong!', [{text: 'Sorry!', style: 'cancel'}
    ]);
    
  
    
    return
} 

if(direction === 'lower'){
    currentHigh.current = currentGuess; 
}else {
    currentLow.current = currentGuess; 
}

const next = genrateRandomBetwen(currentLow.current, currentHigh.current,currentGuess )
setCurrentGuess(next)

setRounds(curRounds => 

 
    
    curRounds+1)



    setPastGuesses
    ((curGuess => [next, ...curGuess
     ]))
    

} //lattest state to update








  return (
    <View style={styles.gameScreen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card styles={styles.btnContainer}>

      <MainButton  onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name='md-remove' size={24} color='white'/></MainButton>
      <MainButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name='md-add' size={24} color='white'/></MainButton>
        {/* <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        /> */}
      </Card>
<View styles={styles.list}>
<ScrollView contentContainerStyle={styles.listContent}>
{guessPast.map((guess,indx) => renderListItem(guess,indx, guessPast.length-indx))}
</ScrollView>

</View>

    </View>
  )
}

//use funtion to have cleaner markup 




export default GameScreen
