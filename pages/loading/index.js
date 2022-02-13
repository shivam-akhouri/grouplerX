import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export default function Loading() {
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <View style={{flexDirection: "row"}}>
                <LinearGradient
                    colors={['#6046ff','rgba(178,23,217,0.5)', '#D9175D', '#FF0000']}
                    locations={[0,0.25, 0.75, 1]}
                    style={[styles.circle, {marginRight: 5, marginBottom: 5}]}
                />
                {/* <View style={{width:30, height: 5, backgroundColor: "red", transform: [{rotate: "45deg"}]}} /> */}
                <LinearGradient
                    colors={['#6046ff','rgba(178,23,217,0.5)', '#D9175D', '#FF0000']}
                    locations={[0,0.25, 0.75, 1]}
                    style={styles.circle}
                />
            </View>
            <View style={{flexDirection: "row"}}>
                <LinearGradient
                    colors={['#6046ff','rgba(178,23,217,0.5)', '#D9175D', '#FF0000']}
                    locations={[0,0.25, 0.75, 1]}
                    style={[styles.circle, {marginRight: 5}]}
                />
                <LinearGradient
                    colors={['#6046ff','rgba(178,23,217,0.5)', '#D9175D', '#FF0000']}
                    locations={[0,0.25, 0.75, 1]}
                    style={styles.circle}
                />
            </View>
        </View>
        <MaskedView
            style={{ height: 50 }}
            maskElement={<Text style={{fontSize: 24, fontFamily: "Roboto", marginTop: 20}}>Groupler</Text>}
            >
            <LinearGradient
                colors={['#6046ff','rgba(178,23,217,0.5)', '#D9175D', '#FF0000']}
                locations={[0,0.25, 0.75, 1]}
                style={{width: 95, height: 50}}
            />
        </MaskedView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
      width: 52,
      height: 52,
      borderRadius: 26,
  },
  logo:{
      padding: 8,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 26,
      transform: [{rotate: "-45deg"}],
  }
});
