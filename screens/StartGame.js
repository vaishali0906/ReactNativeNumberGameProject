import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native"
import  PrimaryButton  from "../components/ui/PrimaryButton.js"
import { useState } from "react";
import Colors from "../constants/color/colors.js";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText.js";
import Card from "../components/ui/Card.js";

export default function StartGame({pickedNumber}){
    const[enteredNumber,setEnteredNumber] = useState('')

    const { width, height } = useWindowDimensions();

    function setEnteredNumberValue(enteredNumber){
        setEnteredNumber(enteredNumber)
    }

    function resetEnteredNumber(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const choseNumber = parseInt(enteredNumber) 

        if(isNaN(choseNumber) || choseNumber<=0 || choseNumber >99){
            Alert.alert(
                "Invalid Number!!",
                "Number has to be Number or between 0 to 99",
                [{text:'OKAY', style:'destructive', onPress: resetEnteredNumber}])

                return;
        }

        pickedNumber(choseNumber)
    }

   
    const marginTopDistance = height < 580 ? 50 : 100

    return(
        <ScrollView  style = { styles.screen }>
        <KeyboardAvoidingView style = { styles.screen } behavior= 'padding'>
        <View style = {[styles.rootContainer, { marginTop : marginTopDistance }]}>
        <Title>Guess My Number</Title>
        <Card>
        <InstructionText> Enter a Number</InstructionText>
        <TextInput
         style={styles.textInput} 
         maxLength={2} 
         keyboardType='number-pad'
         value={enteredNumber}
         onChangeText={setEnteredNumberValue}></TextInput>
        <View style={styles.buttonContainer}>
        <View style= {styles.button}>
        <PrimaryButton onPress={resetEnteredNumber} >Reset</PrimaryButton>
        </View>
        <View style= {styles.button}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        alignItems:'center'
    },
    textInput:{
        height: 50,
        width:50,
        fontSize: 32,
        borderColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:'row'
    },
    button:{
        flex:1
    }
   
})