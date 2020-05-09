import React from 'react'; 
import {Text, StyleSheet} from 'react-nattive'

const styles = StyleSheet.create({

    body:{
        fontFamily:'open-sans'
    }


})

const BodyText = props => <Text style={[styles.body, props.style]}>{props.children}</Text>




export default BodyText;