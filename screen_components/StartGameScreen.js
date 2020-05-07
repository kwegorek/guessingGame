import React from 'react'
//import to use JSX code
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import Card from '../components/Card'
import Colors from '../constans/colors'
import Input from '../components/Input'
//components from react-native - core components to use
const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input style={styles.input} blurOnSubmit autoCapitalize='none'/>
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button
              backgroundColor={Colors.accent}
              color={Colors.accent}
              title="Reset"
              onPress={() => {}}
            />
          </View>
          <View>
            <Button
              backgroundColor={Colors.primary}
              color={Colors.primary}
              style={styles.button}
              title="Confirm"
              onPress={() => {}}
            />
          </View>
        </View>
      </Card>
    </View>
  )
}

//wrapping vieew around

const styles = StyleSheet.create({
  screen: {
    flex: 1, //it gets all the available sapce
    padding: 10, //conttent sits on the edges
    alignItems: 'center', //default column //
  },

  button: {
    width: 80,
  },
  //ext fit into btn

  title: {
    fontSize: 20,
    marginVertical: 10,
    alignItems: 'center', //replaces marginbotom and top
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: 300,

    maxWidth: '80%', //if device is too small, it will not exceed the screen
    alignItems: 'center',
    //horizontal alignment
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    }, //takes object
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5, //default elevation matteerial look Android
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10, //rounded corners
  },
  //only works on IOS

  input: {
    width: 50,
    textAlign: 'center',
  },
})

export default StartGameScreen
