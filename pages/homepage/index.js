import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Homepage() {
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
            <Text style={styles.greet}>Good Morning,</Text>
            <Text style={styles.greet}>Jio User</Text>
        </LinearGradient>
        <View style={{flex: 1, paddingTop: 60, width: "80%", justifyContent: "center"}}>
            <ActivityIndicator size="large" color={"green"}/>
        </View>
        <LinearGradient
         colors={['#6046ff','rgba(178,23,217,0.5)', '#D9175D', '#FF0000']}
         start={{x:0,y: 0}}
         end={{x:1.2, y:1}}
         style={styles.bottomnavigation}>
            <View style={styles.circle}>
                <MaterialIcons name="home" size={36} color="#8B2CF5" />
            </View>
            <View style={styles.circle}>
                <MaterialIcons name="comment" size={36} color="#8B2CF5" />
            </View>
            <View style={styles.circle}>
                <MaterialIcons name="streetview" size={36} color="#8B2CF5" />
            </View>
            <View style={styles.circle}>
                <MaterialIcons name="info" size={36} color="#8B2CF5" />
            </View>
        </LinearGradient>
        <StatusBar style='auto' />
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
      height: 155,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      elevation: 80,
      backgroundColor: 'white'
  },
  image:{
      width: 45,
      height: 45,
      marginTop: 13,
      backgroundColor: "white",
      borderRadius: 45,
      borderWidth: 1.17,
      marginLeft: "35%"
  },
  greet: {
      fontSize: 25,
      marginLeft: 20,
      color: "white",
      fontWeight: "100"
  },
  bottomnavigation: {
      width: "94%",
      height: 80,
      backgroundColor: "red",
      marginBottom: 6,
      borderRadius: 15,
      opacity: 0.65,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-around',
      elevation: 40
  },
  circle: {
      width: 66, 
      height: 66,
      borderRadius: 33,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: 'center'
  }
});
