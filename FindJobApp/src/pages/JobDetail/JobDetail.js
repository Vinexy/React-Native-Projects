import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import RenderHtml from 'react-native-render-html';
import {Dimensions} from 'react-native';
import styles from './JobDetail.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons/faRightToBracket';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {useDispatch} from 'react-redux';
import {addFavoriteList} from '../../redux/Jobs/JobsSlice';

const JobDetail = ({route, navigation}) => {
  const source = {
    html: `${route.params.content.contents}`,
  };

  navigation.setOptions({
    title: route.params.content.name,
  });

  const dispatch = useDispatch();

  return (
    <ScrollView option style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{route.params.content.name}</Text>
        <Text style={styles.location}>
          <Text style={styles.locationFor}>Locations: </Text>
          {route.params.content.locations[0].name}
        </Text>
        <Text style={styles.level}>
          <Text style={styles.levelFor}>Job Level: </Text>
          {route.params.content.levels[0].name}
        </Text>
        <Text style={styles.header}>Job Detail</Text>
      </View>
      <RenderHtml
        baseStyle={styles.htmlArea}
        source={source}
        contentWidth={Dimensions.get('window').width}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.but}>
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={faRightToBracket}
              color={'white'}
            />{' '}
            <Text style={styles.butText}> Submit</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.but}
          onPress={() => {
            dispatch(addFavoriteList(route.params.content));
          }}>
          <Text>
            <FontAwesomeIcon
              style={styles.icon}
              icon={faHeart}
              color={'white'}
            />{' '}
            <Text style={styles.butText}> Favorite Job</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default JobDetail;
