import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FavoritedJobs from './src/pages/FavoritedJobs/FavoritedJobs.js';
import JobDetail from './src/pages/JobDetail/JobDetail.js';
import Jobs from './src/pages/Jobs/Jobs.js';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import JobsCard from './src/components/JobsCard.js';

const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#EF5350',
        drawerItemStyle:{
          backgroundColor: '#FDEAEA',
          borderRadius: 5,
          color: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#EF5350',
      }}>
      <Drawer.Screen name="Jobs" component={Jobs} />
      <Drawer.Screen name="FavoritedJobs" component={FavoritedJobs} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#EF5350',
          }}>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
          <Stack.Screen name="JobDetail" component={JobDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
