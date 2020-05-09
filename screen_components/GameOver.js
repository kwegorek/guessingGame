import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert, Image} from 'react-native'
//core wrapper component
import Colors from '../constans/colors'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import DefaultStyles from '../constans/default-style'

const styles = StyleSheet.create({
    screen: {
        flex:1, 
        alignItems: 'center',
        justifyContent:'center'
      
    },

    tinyLogo: {
        width: 100,
        height: 100,
      },


  });

  
const  GameOver = props => {

 const {userNumber,roundsNumber,onRestart} = props

  return (
      <View style={styles.screen}>
           <Text >Game over!</Text>
        
          <Image style={styles.tinyLogo} resize='cover' source={require('../assets/success.png')}/>

          
           <Text style={DefaultStyles.bodyText}>Number of rounds:{roundsNumber}</Text>
           <Text style={DefaultStyles.bodyText}>
               Number was:{userNumber}
           </Text>
           <Button title='Start new game' onPress={()=>{onRestart()}}/>

           
      </View>
     
 
  );
};


export default GameOver;
