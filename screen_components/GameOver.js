import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert, Image, Dimensions} from 'react-native'
//core wrapper component
import Colors from '../constans/colors'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import DefaultStyles from '../constans/default-style'
import MainButtton from '../components/MainButton'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
  },
})

const GameOver = (props) => {
  const {userNumber, roundsNumber, onRestart} = props

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.gameOverTitle}>Game over!</Text>

      <Image
        style={styles.tinyLogo}
        resize="cover"
        source={require('../assets/success.png')}
      />
      <Text style={DefaultStyles.bodyText}>
        Number of rounds: {roundsNumber}
      </Text>
      <Text style={DefaultStyles.bodyText}>Number was: {userNumber}</Text>
      <MainButtton
        onPress={() => {
          onRestart()
        }}
      >
        START NEW GAME
      </MainButtton>
    </View>
  )
}

export default GameOver
