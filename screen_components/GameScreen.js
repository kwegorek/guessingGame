import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert} from 'react-native'
//core wrapper component
import Colors from '../constans/colors'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import GameOver from './GameOver'
//function outside -> not rerendered

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
})

//useRef - survives rerendering

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    genrateRandomBetwen(1, 100, props.userChoice)
  )
  const [rounds, setRounds] = useState(0)
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
setCurrentGuess(
genrateRandomBetwen(currentLow.current, currentHigh.current,currentGuess ))

setRounds(curRounds => 

 
    
    curRounds+1)





}






  return (
    <View style={styles.gameScreen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card styles={styles.btnContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  )
}

export default GameScreen
