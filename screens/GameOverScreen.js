import { View, Image, StyleSheet, Text, useWindowDimensions } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constants/color/colors"
import PrimaryButton from "../components/ui/PrimaryButton"

export default function GameOverScreen({roundsNumber, startNumber, onStartGame }) {
    const { width, height } = useWindowDimensions();

let imageSize = 300;

if(width < 380){
    imageSize = 150
}

if(height < 400){
    imageSize = 80
}

const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2
}


    return(
        <View style={ styles.rootContainer }>
        <Title>Game Over!!</Title>
        <View style = { [styles.imageContainer, imageStyle] }>
        <Image style={ styles.image } source={ require('../assets/images/success.png') }></Image>
        </View>
        <Text style={ styles.text }>Your Phone needed <Text style = { styles.highlightedText} >{ roundsNumber }</Text> rounds to guess the number <Text style = { styles.highlightedText} >{ startNumber }</Text></Text>
        <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
        </View>
    )
}

//const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding:16
    },
    imageContainer:{
        // width: deviceWidth < 380 ? 150: 300,
        // height:deviceWidth < 380 ? 150: 300,
        // borderRadius:deviceWidth < 380 ? 75: 150,
        borderColor:Colors.primary800,
        borderWidth:3,
        margin:36,
        overflow:'hidden'
    },
    image:{
        width:'100%' ,
        height:'100%',
    },
    text:{
        fontSize:20,
        fontFamily:'open-sans',
        alignSelf:'center',
        margin:16
    },
    highlightedText:{
        fontSize:20,
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    }

})