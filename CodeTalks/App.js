import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogIn from './src/pages/LogIn';
import MessageList from './src/pages/MessageList';
import Rooms from './src/pages/Rooms';
import SignUp from './src/pages/SignUp';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {useEffect} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignOut} from '@fortawesome/free-solid-svg-icons/faSignOut';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  };
  const UserStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFA040',
        }}>
        <Stack.Screen
          options={{
            headerBackVisible: false,
            headerRight: () => (
              <Text onPress={() => auth().signOut()}>
                <FontAwesomeIcon size={30} icon={faSignOut} color={'orange'} />
              </Text>
            ),
          }}
          name="Rooms"
          component={Rooms}
        />
        <Stack.Screen
          name="MessageList"
          component={MessageList}
          options={({route}) => ({
            title: route.params.roomName,
          })}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFA040',
        }}>
        {!userSession ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="AuthStack"
            component={AuthStack}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="UserStack"
            component={UserStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
