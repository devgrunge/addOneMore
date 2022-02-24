import {React , useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function App() {

   const [number , setNumber] = useState(0)
function addOneMore() {
  setNumber(number + 1)
  }
  function lessOneMore() {
    setNumber(number - 1)
  }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>o número é: {number}</Text>
            <StatusBar style="auto" />
            <Button style={styles.button} tittle= "Add +1" onPress={addOneMore}/>
            <Button style={styles.button} tittle= "Less -1" onPress={lessOneMore}/>
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
    title: {
        fontSize: 32,
    },
    button: {
        width: 30,
        height: 30,
    }
});
