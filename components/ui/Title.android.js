import { View, Text, StyleSheet, useWindowDimensions, Platform} from "react-native"
 
export default function Title({children}) {
    const { width, height } = useWindowDimensions();
    const marginTopDistance = height < 580 ? 0 : 50
    return(
        <View style={[styles.titleContainer, { marginTop: marginTopDistance }]}>
        <Text style = { styles.text }>{children}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{
       // borderWidth:Platform.OS === 'android' ? 3 : 0,
        //borderWidth:Platform.select({ios:0,android:3}),
        borderWidth: 3,
        borderColor: 'white',
        padding:20,
        marginHorizontal:20,
        alignItems:'center',
        maxWidth:'80%',
        width: 300
    },
    text:{
        color:'white',
        fontSize: 20,
        fontFamily: 'open-sans-bold'
    }
})