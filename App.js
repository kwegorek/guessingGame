import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screen_components/StartGameScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <Header titie="Guess a number"/>
      <StartGameScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, //view has all the space - takes all the sapce and width from device
  },
})
