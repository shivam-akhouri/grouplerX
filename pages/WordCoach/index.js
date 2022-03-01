import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import {View, Text, Animated, StatusBar, StyleSheet} from 'react-native';

export default function WordCoarch(props){
    return (
        <LinearGradient style={styles.container}
            colors={['rgba(215, 55, 255, 1)', "rgba(200, 0, 0, 1)"]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <Text style={styles.title}>Word Coach</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%"
    },
    title: {
        alignSelf: "center",
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 5,
        marginTop: 20
    }
});