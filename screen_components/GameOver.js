import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert} from 'react-native'
//core wrapper component
import Colors from '../constans/colors'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const styles = StyleSheet.create({
    screen: {
        flex:1, 
        alignItems: 'center',
        justifyContent:'center'
      
    }
  });

  
const  GameOver = props => {

 const {userNumber,roundsNumber,onRestart} = props

  return (
      <View style={styles.screen}>
           <Text>Game over!</Text>
           <Text>Number of rounds:{roundsNumber}</Text>
           <Text>
               Number was:{userNumber}
           </Text>
           <Button title='Start new game' onPress={()=>{onRestart()}}/>

           
      </View>
     
 
  );
};


export default GameOver;
