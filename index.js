import {React , useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function App() {

   const [number , setNumber] = useState(0)
function addonemore() {
  setNumber(number + 1)
  
}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>o número é: {number}</Text>
            <StatusBar style="auto" />
            <Button tittle= "Add +1" onPress={addonemore}/>
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
    }
});
