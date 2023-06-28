import { Text , View, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
import Colors from "../../constants/color/colors"

export default function PrimaryButton({children, onPress}){
    
    return(
        <View style={styles.buttonOuterContainer}>
        <Pressable
         style={({pressed}) => pressed? [styles.buttonInnerContainer,styles.buttonRiddleForIOS] : styles.buttonInnerContainer} 
         onPress={onPress}
         android_ripple={{ color: Colors.primary600}}>
        <Text  style={styles.button}>{children}</Text>
        </Pressable>
        </View>
       
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        marginHorizontal: 10,
        overflow:"hidden"
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        paddingVertical:16,
        paddingHorizontal: 16,
        elevation:2,
    },
    button:{
        color:'#ffffff',
        textAlign:'center'
    },
    buttonRiddleForIOS:{
        opacity:0.75
    }
})