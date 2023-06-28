import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color/colors";

export default function GameText({children}){
    return(
        <View style={styles.container}>
            <Text style = { styles.text }>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        marginTop:deviceWidth < 380 ? 12: 24,
        borderWidth:3,
        borderColor: Colors.accent500,
        borderRadius:2,
        padding: deviceWidth < 380 ? 12: 24,
        marginHorizontal:100,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 12: 24,
        fontFamily: 'open-sans-bold'
    }
})