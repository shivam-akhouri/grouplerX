import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Modal, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { TouchableOpacity } from 'react-native-web';
import CustomButton from '../../components/CustomButton';
import React from 'react';

export default function Welcome() {

    const [signInOptions, setSignOptions] = React.useState(false);

    return (
        <View style={styles.container}>
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "0deg", }], top: -100, left: -160 }]}
                colors={['rgba(178, 23, 217, 1)', 'rgba(227, 76, 76, 0.8)']}
                start={{ x: 0.25, y: 0.75 }}
                end={{ x: 1, y: 1 }} />
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "103deg", }], top: -105, left: 30 }]}
                colors={['rgba(227, 76, 76, 0.8)', 'rgba(255, 0, 0, 0.22)']} />
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "6.5deg", }], top: -20, left: -95 }]}
                colors={['rgba(178, 23, 217, 0.49)', 'rgba(227, 76, 76, 0.8)']}
                start={{ x: 0.25, y: 0.25 }}
                end={{ x: 1, y: 1 }} />
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "123deg", }], top: -200, left: -40 }]}
                colors={['rgba(178, 23, 217, 0.25)', 'rgba(96, 70, 255, 1)']}
                start={{ x: 0.75, y: 0.25 }}
                end={{ x: 0.75, y: 0.8 }} />

            <View style={styles.logo}>

                <View style={{ flexDirection: "row", }}>
                    <View
                        style={[styles.dots, { marginRight: 5, marginBottom: 5 }]}
                    />
                    <View
                        style={styles.dots}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View
                        style={[styles.dots, { marginRight: 5 }]}
                    />
                    <View
                        style={styles.dots}
                    />
                </View>
            </View>
            <Text style={styles.greet}>{"Let's Groupler"}</Text>
            <View style={{ paddingTop: 475 }}>

                <CustomButton style={{ alignSelf: 'center', marginTop: 20 }} onClick={() => setSignOptions(true)}>SIGN IN </CustomButton>
                <CustomButton text={{ color: "black" }} style={{ alignSelf: 'center', marginTop: 20, backgroundColor: "white", borderWidth: 1.12, borderColor: "black" }} >SIGN UP </CustomButton>
            </View>
            <StatusBar style="auto" />
            <Modal
                animationType="fade"
                transparent={true}
                visible={signInOptions}
                onRequestClose={() => {
                    setSignOptions(!signInOptions);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyle}>Sign In Options</Text>
                        <CustomButton text={{color: "black", opacity: 0.7}} style={styles.modalbuttons}>GOOGLE</CustomButton>
                        <CustomButton text={{color: "black", opacity: 0.7}}style={styles.modalbuttons}>EMAIL</CustomButton>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        position: "absolute",
        width: 469,
        height: 469,
        borderRadius: 469 / 2,
    },
    greet: {
        top: 260,
        alignSelf: 'center',
        color: "white",
        fontSize: 30,
    },
    dots: {
        width: 23.82,
        height: 23.82,
        borderRadius: 23.82 / 2,
        backgroundColor: "white"
    },
    logo: {
        position: "absolute",
        top: 134,
        left: Dimensions.get('screen').width / 2 - 27,
        borderWidth: 1.17,
        borderColor: "white",
        padding: 4,
        borderRadius: 15,
        transform: [{ rotate: "45deg" }, { scale: 1.7 }]
    },
    centeredView:{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        justifyContent: "center"
    },
    modalView:{
        width: "80%",
        height: 200,
        backgroundColor: "white",
        borderRadius: 20,
    },
    textStyle: {
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        marginTop: 10,
    },
    modalbuttons: {
        marginVertical: 7, 
        alignSelf: "center",
        backgroundColor : 'white',
        borderWidth: 1.17,
        borderColor: "black"
    }
})