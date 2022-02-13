import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Chats(props){
    return (
        <ScrollView>

        <View>
            <LinearGradient
                colors={['#6046ff','rgba(178,23,217,0.5)', '#D9175D', '#FF0000']}
                start={{x:0,y: 0}}
                end={{x:1.2, y:1}}
                style={[styles.header,]}
                >
                <View style={{flexDirection: 'row' }}>
                    <View style={{marginTop: 21, marginLeft: 22,}}>
                        <View style={{height: 5, width: 35, backgroundColor: 'white', marginBottom: 5}} />
                        <View style={{height: 5, width: 35, backgroundColor: 'white', marginBottom: 5}} />
                        <View style={{height: 5, width: 35, backgroundColor: 'white',}} />
                    </View>
                    <Text style={{fontSize: 36, color: "white", marginTop: 8, marginLeft: 16}}>Chat</Text>
                </View>
            </LinearGradient>
            <View style={{height: 560}}>
                <Text>hello</Text>
            </View>
            <LinearGradient
                colors={['rgba(96, 70, 255, 1.3)','rgba(178,23,217,0.7)', 'rgba(217,23, 93, 1.3)', 'rgba(255, 0, 0, 1.3)']}
                start={{x:0,y: 0}}
                end={{x:1.2, y:1}}
                style={[styles.bottom,]}
                >
                <TextInput placeholder='Enter your text here' style={styles.textinput} />
                <TouchableOpacity>
                    <View style={styles.button}>
                        <MaterialCommunityIcons name="send" color="white" size={30} />
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        </View>
                </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 95,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        elevation: 80,
        backgroundColor: 'white'
    },
    image:{
        position: "absolute",
        width: 90,
        height: 90,
        backgroundColor: "white",
        borderRadius: 45,
        left: Dimensions.get("screen").width/2-45,
        top: 127-45,
        borderWidth: 1.17
    },
    bottom:{
        height: 68,
        width: "100%",
        opacity: 0.8,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'black',
        flexDirection: "row",
    },
    textinput: {
        backgroundColor : "white",
        width: '78%',
        height: 45,
        marginTop: 11,
        marginLeft: 11,
        borderRadius: 14,
        borderWidth: 0.5,
        borderColor: "black",
        paddingLeft: 10,
    },
    button:{
        width: 54, 
        height: 54, 
        borderRadius: 27, 
        backgroundColor: 'rgba(255,255,255, 0.4)',
        marginTop: 6,
        marginLeft: 6,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 6
    }
})