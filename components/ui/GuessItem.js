import {View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color/colors";
export default function GuessItem({ roundedValue, guess }){
    return(
        <View style = { styles.rootContainer}>
        <Text style= { styles.text }>#{ roundedValue }</Text>
        <Text style= { styles.text }>Opponent's Guess: { guess }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        borderColor:Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding:16,
        marginVertical:8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width:0, height:0},
        shadowRadius:3,
        shadowOpacity: 0.25
    },
    text:{
        fontFamily:'open-sans'
    }
})