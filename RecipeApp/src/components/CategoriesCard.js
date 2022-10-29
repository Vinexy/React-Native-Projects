import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CategoriesCard.styles.js';

const CategoriesCard = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: props.content.item.strCategoryThumb}}
      />
      <Text style={styles.text}>{props.content.item.strCategory}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
