import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
//core wrapper component
import Colors from '../constans/colors'

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
})

const NumberContainer = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

export default NumberContainer
