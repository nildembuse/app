import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, {useState} from "react";

export default function Page() {

  const [state, setState] = useState()

  return (

    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput 
      placeholder="Enter your name"
      style={styles.textInputStyle} />

      <Text>Last Name</Text>
      <TextInput 
      placeholder="Enter your last name"
      style={styles.textInputStyle} />
      
      <Pressable 
      onPress={() => console.log('clicked')}
      style={styles.button }>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
  },
  textInputStyle:{
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign:'center',
    color: 'purple',
    fontWeight: 'bold',
  },
  button:{
    width: '50%',
    height: 35,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightblue',
  },
  buttonText:{
    fontWeight:'bold',
    color:'purple'
  }
  
});
