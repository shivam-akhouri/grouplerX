import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton(props){
    return(
        <TouchableOpacity onPress={props.onClick}>   
            <View style={[styles.container, props.style]}>
                <Text style={[{alignSelf: "center", color: "white", fontSize: 24, fontWeight: "bold"}, props.text]}>{props.children}</Text>
                <LinearGradient 
                    colors={['rgba(255, 0,0, 0.21)', "rgba(96, 70, 255, 1)"]}
                    style={[styles.circle, {left: "60%",top: "30%",}]} />
                <LinearGradient 
                    colors={['rgba(217, 23,93, 1)', "rgba(96, 70, 255, 1)"]}
                    style={[styles.circle, {left: "70%",top: "-130%",}]} />
                <LinearGradient 
                    colors={['rgba(217, 23,93, 0.5)', "rgba(96, 70, 255, 0.5)"]}
                    style={[styles.circle, {left: "60%",top: "30%",}]} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "80%",
        justifyContent: "center", 
        height: 60, 
        backgroundColor: "rgba(178, 23, 217, 0.9)", 
        borderRadius: 25, 
        overflow: "hidden",
    },
    circle:{
        position: "absolute",
        width: 137.19,
        height: 137.19,
        borderRadius: 137.19/2
    }
})