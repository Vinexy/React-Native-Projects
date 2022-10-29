import {View, Text} from 'react-native';
import React from 'react';
import styles from './FavoritedCard.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {removeFav} from '../redux/Jobs/JobsSlice';

const FavoritedCards = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.nameText}>{props.content.item.name}</Text>
      <Text style={styles.companyText}>{props.content.item.company.name}</Text>
      <Text style={styles.locationText}>
        {props.content.item.locations[0].name}
      </Text>
      <Text style={styles.levelText}>{props.content.item.levels[0].name}</Text>
      <TouchableOpacity
        onPress={() => dispatch(removeFav(props.content.item))}
        style={styles.remove}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoritedCards;
