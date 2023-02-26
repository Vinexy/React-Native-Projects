import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Modal from 'react-native-modal';
import {useState} from 'react';
const Modals = ({placeholderTexty, visible, onClose, onSend}) => {
  const [text, setText] = useState('');

  return (
    <Modal
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      isVisible={visible}>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={"black"}
          style={styles.textInput}
          multiline
          placeholder={placeholderTexty}
          onChangeText={setText}
        />
        <TouchableOpacity
          onPress={() => {
            onSend(text);
            onClose();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Modals;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 3,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  modal: {
    marginBottom: 0,
    justifyContent: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '15%',
    margin: 10,
    backgroundColor: '#FFA040',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  textInput: {
    color: "black",
  }
});
