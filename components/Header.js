import React from 'react'
import Colors from '../constans/colors'
//import to use JSX code
import {StyleSheet, Text, View} from 'react-native'
//components from react-native - core components to use
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> {props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%', //full device width
    height: 90, //assign heigth
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
})

export default Header
