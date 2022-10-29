import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './JobsCard.styles.js';
import {useNavigation} from '@react-navigation/native';

const JobsCard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.outerContainer}
      onPress={() =>
        navigation.navigate('JobDetail', {
          content: props.content.item,
        })
      }>
      <Text style={styles.nameText}>{props.content.item.name}</Text>
      <Text style={styles.companyText}>{props.content.item.company.name}</Text>
      <Text style={styles.locationText}>
        {props.content.item.locations[0].name}
      </Text>
      <Text style={styles.levelText}>{props.content.item.levels[0].name}</Text>
    </TouchableOpacity>
  );
};

export default JobsCard;
