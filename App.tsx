import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Nome: </Text>
      <TextInput style={styles.txtField}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  field:{
    color:'#fff',
    fontSize: 25,
  },

  txtField:{
    backgroundColor: '#363636',
    width: 'auto',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    
  }

});
