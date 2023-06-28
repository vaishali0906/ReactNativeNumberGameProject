import { View, StyleSheet, Alert, FlatList, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import GameText from "../components/ui/GameText";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons'
import GuessItem from "../components/ui/GuessItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  let minBoundary = 1;
  let maxBoundary = 100;

export default function GameScreen({ usernumber, onGameOver }){
    const initalNumber = generateRandomBetween(1,100,usernumber)
    const [currentGuess, setCurrentGuess] =  useState(initalNumber)
    const [guessNumber, setGuessNumber ] = useState([])
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if(usernumber === currentGuess){
            console.log(currentGuess)
            onGameOver(guessNumber.length)
        }
    }, [currentGuess])

    useEffect(() => {
        minBoundary =1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < usernumber) 
        || (direction === 'greater' && currentGuess > usernumber)){
            Alert.alert("Don't lie","You know that is wrong...", [{text: 'Sorry!!', style: 'cancel'}])
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess
        }else{
            minBoundary = currentGuess + 1
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary , currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessNumber(previousGuessRounds => [newRndNumber,...previousGuessRounds])
    }

    const guessRoundList = guessNumber.length

    let content = (
        <>
        <GameText>{currentGuess}</GameText>
    <Card>
    <InstructionText style={ styles.instruction }>Higher or Lower?</InstructionText>
    <View style={ styles.buttonsContainer }>
    <View style={ styles.button }>
    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
        <Ionicons name="md-add" size={24} color="white"/>
    </PrimaryButton>
    </View>
    <View style={ styles.button }>
    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
    <Ionicons name="md-remove" size={24} color="white"/>
        </PrimaryButton>
    </View>
    </View>
    </Card>
        </>
    );

    if( width > 500 ){
        content = (
            <>
            <InstructionText style={ styles.instruction }>Higher or Lower?</InstructionText>
            <View style = { styles.largeWidth }>
            <View style={ styles.button }>
    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
        <Ionicons name="md-add" size={24} color="white"/>
    </PrimaryButton>
    </View>
    <GameText>{currentGuess}</GameText>
    <View style={ styles.button }>
    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
    <Ionicons name="md-remove" size={24} color="white"/>
        </PrimaryButton>
    </View>
            </View>
           
            </>
        )
    }


   
    return(
    <View style = { styles.container}>
    <Title>Opponent's Guess</Title>
    {content}
    <View style={ styles.list}>
        <FlatList 
        renderItem={(itemData) => (<GuessItem roundedValue={ guessRoundList - itemData.index} guess={ itemData.item}></GuessItem>)} 
        data={guessNumber}
        keyExtractor={(item) => item}></FlatList>
        </View>
   </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        alignItems:'center'
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    button:{
        flex:1
    },
    instruction:{
        marginBottom:12
    },
    list:{
        flex:1,
        padding: 8
    },
    largeWidth:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})