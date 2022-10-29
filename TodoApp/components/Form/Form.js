import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import styles from "./Form.styles";
import uuid from 'react-native-uuid';




const Form = (props) => {
  
  const [input,setInput] =useState("");
  const [btnColor,setBtnColor] = useState(true)

  useEffect(() => {
    if (input =="") {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }, [input]);

  const Press= () =>{
    props.setList([...props.list,{id:uuid.v4(),text:input,completed:false}]);
    setInput("");
  }
  
  return (
    <View style={styles.div}>
      <TextInput 
        style={styles.placeholder} 
        placeholder='ToDo...' 
        placeholderTextColor="#606060" 
        color="white" 
        defaultValue={input} 
        onChangeText={text=>setInput(text)} 
      />

      <TouchableOpacity 

        style={btnColor ? styles.button : styles.filledButton} 

        onPress={Press}>

        <Text 
          style={styles.buttonText}>Save
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default Form