// import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';

export default function Meditation(props){
    return (
        <View>
            <StatusBar style='auto'/>
            <View style={styles.background}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#d3d3d3",
        width: 300,
        height: 300
    }
})