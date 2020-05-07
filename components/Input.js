import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
//core wrapper component 

const styles = StyleSheet.create({
    input: {
      height: 30, 
      borderBottomColor: 'grey', 
      borderBottomWidth:1, 
      marginVertical:10
    }
  });
  
const Input = props => {
  return (
      <TextInput {...props} style={[styles.input, props.style]}/>

      //SPREAD OPERATOR ---> does no work on web in here -- use with array [] around
//{...props} -> takes all props; style from here will overrride 


    //   <TextInput style={[{...styles.input, ...props.style}]}/>
  );
};


export default Input;
