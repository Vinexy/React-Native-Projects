import {View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={{width:100,height:100,alignSelf:'center',marginTop:250,}}>
      <Lottie source={require('../assets/loading_1.json')} autoPlay loop />
    </View>
  );
};

export default Loading;
