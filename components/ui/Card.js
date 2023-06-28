import { View, StyleSheet } from "react-native"
import Colors from "../../constants/color/colors"

function Card({ children }){
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 36,
        marginBottom: 8,
        marginHorizontal: 24,
        padding: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset:{ width:0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        borderRadius:8,
        backgroundColor:Colors.primary800
    }
})