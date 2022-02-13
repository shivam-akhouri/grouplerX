import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
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
                <Text style={{fontSize: 36, color: "white", marginTop: 8, marginLeft: 16}}>Profile</Text>
                <View style={styles.image}>

                </View>
            </View>
        </LinearGradient>
        <View style={{flex: 1, paddingTop: 60, width: "80%"}}>
            <Text>First Name</Text>
            <TextInput placeholder='Shivam' style={{borderBottomWidth: 1, borderColor: "black", marginBottom: 34.59}}/>

            <Text>Last Name</Text>
            <TextInput placeholder='Akhouri' style={{borderBottomWidth: 1, borderColor: "black", marginBottom: 34.59}}/>
            <Text>Phone Number</Text>
            <TextInput placeholder='9876543210' style={{borderBottomWidth: 1, borderColor: "black", marginBottom: 34.59}}/>
            <Text>Interests</Text>
            <TextInput placeholder='Enter your Interests' style={{borderBottomWidth: 1, borderColor: "black", marginBottom: 34.59}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      width: "100%",
      height: 127,
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
  }
});
