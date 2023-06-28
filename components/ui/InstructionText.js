import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/color/colors"

export default function InstructionText({children, style}){
    return(
        <Text style={[styles.title, style]}>{children}</Text>
    )}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans',
        color:Colors.accent500,
        fontSize:24,
        textAlign:'center'
    }
})    