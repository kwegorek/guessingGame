import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
//core wrapper component 
import Colors from '../constans/colors'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
//function outside -> not rerendered 

const genrateRandomBetwen = (min, max, exclude) => {

    min = Math.ceil(min); 
    max = Math.floor(max); 
    const rndNum = Math.random() * (max-min) +min  //random between 1 and 99 
    if(rndNum === exclude){
        return genrateRandomBetwen(min,max, exclude)
    }else {
        return rndNum
    }
}

const styles = StyleSheet.create({
    gameScreen: {
        flex:1,  
        padding:10, 
        alignItems:'center'
    },

    btnContainer:{
        flexDirection:'row', 
        justifyContent:'space-around', 
        marginTop:20, 
        width:300, 
        maxWidth:'80%'

    }
  });
  
const  GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(genrateRandomBetwen(1,100,props.userChoice))
  
    return (

        <View style={styles.gameScreen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card styles={styles.btnContainer}>
                <Button title='LOWER'  onPress={()=>{}}/>
                <Button title='GREATER' onPress={()=>{}}/>

            </Card>
        </View>
    
 
  );
};


export default GameScreen;
