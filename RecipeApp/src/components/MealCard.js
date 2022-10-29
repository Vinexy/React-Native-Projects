import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './MealCard.styles.js';

const MealCard = props => {

  function maxLength(){
    const a = props.content.item.strMeal;
    if (a.length > 30){
      let c = a.substr(0,28);
      c= c+"...";
      return c;
    }
    else{
      return a;
    }
    
  }

  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        resizeMode="cover"
        style={styles.img}
        source={{uri: props.content.item.strMealThumb}}>
        <Text style={styles.text}>{maxLength()}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MealCard;
