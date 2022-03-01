import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import {View, Text, Animated, StatusBar, StyleSheet} from 'react-native';
import {Entypo, Ionicons} from '@expo/vector-icons';

export default function Timeline(props){
    return (
        <LinearGradient style={styles.container}
            colors={['rgba(215, 55, 255, 1)', "rgba(200, 0, 0, 1)"]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <StatusBar/>
        </LinearGradient>
    );
}

function Tile(){
    const growAnim = useRef(new Animated.Value(1)).current;
    return (
        <View style={styles.tile}>
            <View style={[styles.rope, {left: "10%",}]}></View>
            <View style={[styles.rope, {left: "87%",}]}></View>
            <Animated.View style={[styles.mainbg, {transform: [{scale: growAnim}]}]} 
                onTouchStart={
                    (e)=>{
                        Animated.timing(growAnim, {
                            toValue: 1.1,
                            duration: 100,
                            useNativeDriver: true
                        }).start();
                    }
                }
                onTouchEnd={
                    (e)=>{
                        Animated.timing(growAnim, {
                            toValue: 1.0,
                            duration: 200,
                            useNativeDriver: true
                        }).start();
                    }
                }
            >
                <LinearGradient 
                    colors={['rgba(255, 0,0, 0.21)', "rgba(96, 70, 255, 1)"]}
                    style={[styles.circle, {left: "-20%",top: "-40%",}]} />
                <LinearGradient 
                    colors={['rgba(217, 23,93, 0.3)', "rgba(96, 70, 255, 0.5)"]}
                    style={[styles.circle, {left: "70%",top: "-50%",}]} />
                <LinearGradient 
                    colors={['rgba(217, 23,93, 0.5)', "rgba(96, 70, 255, 0.5)"]}
                    style={[styles.circle, {left: "-10%",top: "50%",}]} />
                <View style={{flexDirection: "row",width: "100%", justifyContent: "space-between"}}>
                <Text numberOfLines={1} style={styles.title}>Title</Text>
                <View style={styles.duration}>
                    <Entypo name="stopwatch" size={20} color="#d111b1" />
                    <Text style={{marginLeft: 7}}>45 min</Text>
                </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Ionicons name="checkmark-done-circle" size={30} color="green" />
                    <Text style={styles.status}>You Nailed It</Text>
                </View>
                    {/* <Text>title</Text> */}
                    <Text style={styles.timing}>2:45 PM - 3:30 PM</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%"
    },
    tile: {
        width: "100%",
        height: 140,
        alignItems: "center",
        justifyContent: 'center'
    },
    mainbg: {
        width: "90%",
        height: "85%",
        alignSelf: "center",
        backgroundColor: "#efefef",
        borderRadius: 13,
        borderWidth: 5,
        borderColor: "white",
        elevation: 20,
        alignItems: "center",
        overflow: "hidden",
        justifyContent: "space-between"
    },
    rope:{
        position: "absolute",
        height: "100%",
        width: 10,
        backgroundColor: "#e0bca4",
    },
    duration: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginTop: 3,
        marginRight: 5,
        borderWidth: 2,
        borderColor: "#7210c7",
        borderRadius: 25,
        backgroundColor: "#f8e8ff"
    },
    status:{
        fontSize: 23,
        fontWeight: "600",
        color: "green"
    },
    title:{
        fontSize: 25,
        color: "#efefef",
        paddingLeft: 5,
        backgroundColor: "#ca52ff",
        width:"60%",
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 50
    },
    circle:{
        position: "absolute",
        width: 137.19,
        height: 137.19,
        borderRadius: 137.19/2
    },
    timing:{
        backgroundColor: "#af63ff",
        width: "50%",
        paddingVertical: 5,
        textAlign: "center",
        borderTopLeftRadius: 60,
        alignSelf: "flex-end",
        color: "white"
    }
})