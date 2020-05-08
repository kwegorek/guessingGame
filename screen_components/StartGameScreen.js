import React, {useState} from 'react'
//import to use JSX code
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'
import Card from '../components/Card'
import Colors from '../constans/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
//components from react-native - core components to use
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = (inputText) => {
    //validate
    console.log(inputText, 'input')
    setEnteredValue(inputText.replace(/[^0-9]/g)) //validation only numbers
  }
  //function stored in a constant; in in a prop onCHange point to the function; feed the value back to value property on Input

  const resetInputHandler = () => {
    setEnteredValue('') //update the state
    setConfirmed(false)
  }
  //function stored in a constant; in in a prop onCHange point to the function; feed the value back to value property on Input
  const confirmInputHandler = () => {
    const chosenNumber = setSelectedNumber(parseInt(enteredValue))
    // eslint-disable-next-line use-isnan
    if (isNaN(enteredValue)|| chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!, Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return
    }

    setConfirmed(true)
    setSelectedNumber(enteredValue)
    setEnteredValue('') //update the state
    Keyboard.dismiss() //dismiss the keyboard after value selected
 

    //all batched together; u can access state from line 38
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
         <Text>You selected:</Text>
         <View>
        <NumberContainer>
          {selectedNumber}

        </NumberContainer>
        <Button onPress={()=>{}} title='START GAME'/>

         </View>

      </Card>
    )

    
   
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        {/* <Text style={styles.title}>Start a new game!</Text> */}
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            onChangeText={numberInputHandler}
            value={enteredValue}
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                backgroundColor={Colors.accent}
                color={Colors.accent}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
            <View>
              <Button
                backgroundColor={Colors.primary}
                color={Colors.primary}
                style={styles.button}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        <View>{confirmedOutput}</View>
      </View>
    </TouchableWithoutFeedback>
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
  summaryContainer: {
    borderWidth:2, 
    borderColor:Colors.accent, 
    marginVertical:20, 
    alignItems:'center', //default is stretch


  }
})

export default StartGameScreen
