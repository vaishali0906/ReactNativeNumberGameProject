import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import StartGame from "./screens/StartGame.js";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/color/colors.js';
import GameScreen from './screens/GameScreen.js';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import GameOverScreen from './screens/GameOverScreen.js';

export default function App() {
  const[userEnteredText, setUserEnteredText] = useState('')
  const[isGameOver, setGameOver] = useState(true)
  const[guessNumber, setGuessNumber] = useState(0)

  const [ fontsLoaded ] = useFonts({
    'open-sans' : require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold' : require("./assets/fonts/OpenSans-Bold.ttf")
  }); 

  if(!fontsLoaded){
   return <AppLoading/>
  }

  function setUserEnteredTextValue(pickedNumberText){
    setUserEnteredText(pickedNumberText)
    setGameOver(false)
  }

  function onStartGameHandler(){
    setUserEnteredText(null)
    setGuessNumber(0)
  }

  function onGameOverHandler(totalRounds){
    setGameOver(true)
    setGuessNumber(totalRounds)
  }

  let screens = <StartGame pickedNumber={setUserEnteredTextValue}/>

  if(isGameOver && userEnteredText){
    screens = <GameOverScreen roundsNumber={guessNumber} startNumber={userEnteredText} onStartGame={onStartGameHandler}/>
  }

  if(userEnteredText && !isGameOver){
    screens = <GameScreen usernumber = {userEnteredText} onGameOver= {onGameOverHandler }></GameScreen>
  }

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient  style={styles.rootcontainer} colors={[Colors.primary700,Colors.accent500]}>
      <ImageBackground 
      resizeMode="cover" 
      style={styles.rootcontainer} 
      source={require("./assets/images/background.png")}
      imageStyle={styles.image}>
      {screens}
    </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1
  },
  image:{
    opacity:0.15
  }
});
