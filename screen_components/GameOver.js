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
  return (
      <View style={styles.screen}>
           <Text>Game over!</Text>
      </View>
     
 
  );
};


export default GameOver;
