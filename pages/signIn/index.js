import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { TouchableOpacity } from 'react-native-web';
import CustomButton from '../../components/CustomButton';

export default function SignIn() {
    return (
        
        <SafeAreaView style={styles.container}>
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "0deg", }], top: -140, left: -140 }]}
                colors={['rgba(178, 23, 217, 1)', 'rgba(227, 76, 76, 0.8)']}
                start={{ x: 0.25, y: 0.75 }}
                end={{ x: 1, y: 1 }} />
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "103deg", }], top: -165, left: 0 }]}
                colors={['rgba(227, 76, 76, 0.8)', 'rgba(255, 0, 0, 0.22)']} />
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "-123deg", }], top: -140, left: -140 }]}
                colors={['rgba(178, 23, 217, 0.25)', 'rgba(96, 70, 255, 1)']}
                start={{ x: 0.75, y: 0.25 }}
                end={{ x: 0.75, y: 0.8 }} />
            <LinearGradient
                style={[styles.circle, { transform: [{ rotate: "6.5deg", }], top: -95, left: -95 }]}
                colors={['rgba(178, 23, 217, 0.49)', 'rgba(227, 76, 76, 0.8)']}
                start={{ x: 0.25, y: 0.25 }}
                end={{ x: 1, y: 1 }} />

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
            <Text style={styles.greet}>{"Welcome\nBack"}</Text>
            <ScrollView>
                <View style={{paddingTop: 275}}>
                    <Text style={{fontSize: 30,paddingLeft: 34}}>Sign In</Text>
                    <Text style={{width: "80%", alignSelf: "center", marginTop: 30}}>Email</Text>
                    <TextInput placeholder='example@email.com' style={{width: "80%", alignSelf: "center",borderBottomWidth: 1, borderColor: "black", marginBottom: 34.59}}/>
                    <Text style={{width: "80%", alignSelf: "center", marginTop: 0}}>Password</Text>
                    <TextInput placeholder='*********' style={{width: "80%", alignSelf: "center",borderBottomWidth: 1, borderColor: "black", marginBottom: 34.59}}/>
                    <CustomButton style={{alignSelf: 'center', marginTop: 20}} >Sign In </CustomButton>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        position: "absolute",
        width: 390,
        height: 390,
        borderRadius: 195,
    },
    greet: {
        top: 123,
        left: 38,
        color: "white",
        fontSize: 30,
    },
    dots: {
        width: 23.82,
        height: 23.82,
        borderRadius: 23.82 / 2,
        backgroundColor: "white"
    },
    logo:{ 
        position: "absolute",
        top: 46, 
        left: 45, 
        borderWidth: 1.17, 
        borderColor: "white",
        padding: 4,
        borderRadius: 15,
        transform: [{rotate: "45deg"}]
    }
})