import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {Formik} from 'formik';

import auth from '@react-native-firebase/auth';

const LogIn = ({navigation}) => {
  const initialFormValues = {
    usermail: '',
    password: '',
  };

  const navigateSingUp = () => {
    navigation.navigate('SignUp');
  };

  const handleFormSubmit = formValues => {
    auth()
      .signInWithEmailAndPassword(formValues.usermail, formValues.password)
      .then(() => {
        Alert.alert('User signed in anonymously');
      })
      .catch(error => {
        Alert.alert(error.code);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>codetalks</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleSubmit, handleChange}) => (
          <View style={styles.input}>
            <TextInput
              name="usermail"
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              style={styles.email}
              placeholderTextColor={'#FFFFFF'}
              placeholder="enter your e-mail.."
            />
            <TextInput
              name="password"
              onChangeText={handleChange('password')}
              value={values.password}
              placeholderTextColor={'#FFFFFF'}
              style={styles.password}
              placeholder="enter your password.."
              secureTextEntry
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.login}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateSingUp}
              style={styles.signUpButton}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#FF6F00',
    alignItems: 'center',
  },
  header: {
    color: '#E0E0E0',
    fontSize: 36,
    marginTop: 150,
  },
  email: {
    color: '#FFFFFF',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingLeft: 20,
  },
  password: {
    paddingLeft: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    width: Dimensions.get('window').width - 15,
    marginTop: 160,
  },
  login: {
    marginTop: 20,
    borderRadius: 6,
    height: Dimensions.get('window').height / 20,
    backgroundColor: '#FFA040',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#FFA040',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpButton: {
    marginTop: 20,
    borderRadius: 7,
    height: Dimensions.get('window').height / 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
