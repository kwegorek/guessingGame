import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
//core wrapper component 
import Colors from '../constans/colors'

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth:2, 
        borderColor:Colors.accent, 
        padding:10, 
        borderRadius:10,
        marginVertical: 10, 
        alignItems: 'center',
        justifyContent:'center'
      
    }
  });
  
const  NumberContainer= props => {
  return (
      <Text style={[styles.numberContainer, props.style ]}>{props.children}</Text>

 
  );
};


export default NumberContainer;
