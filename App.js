import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screen_components/StartGameScreen'
import GameScreen from './screen_components/GameScreen'
import GameOver from './screen_components/GameOver'

export default function App() {

  const [userNumber, setUserNumber] = useState(); 
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber)
    setGuessRounds(0)

  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
    console.log(guessRounds, 'rounds')
  }

let content = <StartGameScreen onStartGame={startGameHandler}/>
//u can store components in variables 
//rendering one of two screens 
if(userNumber && guessRounds <=0){
  content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
}
  else if (guessRounds > 0) {
    content = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        // onRestart={configureNewGameHandler}
      />
    );
}



  return (
    <View style={styles.container}>
      <Header titie="Guess a number"/>
     {content}
  
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, //view has all the space - takes all the sapce and width from device
  },
})
