import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
//core wrapper component
import Colors from '../constans/colors'

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.primary,
    paddingVertical:12,
    paddingHorizontal:30, 
    borderRadius:25
  },
  btnTxt: {
      color:'white', 
      fontFamily:'open-sans', 
  },
})

//create own props for a touchableopacity so that u can use that in onother components
const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}  onPress={props.onPress}> 
    
      <View style={[styles.btnContainer, props.style]}>
        <Text style={[styles.btnTxt, props.style]}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MainButton
