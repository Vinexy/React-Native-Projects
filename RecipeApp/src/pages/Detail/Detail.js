import {
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import './Detail.styles';
import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Detail.styles';

const Detail = ({route}) => {
  const [detail, setDetail] = useState({});

  async function hookDetail() {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.detail}`,
    );
    setDetail(res.data.meals[0]);
  }
  useEffect(() => {
    hookDetail();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="cover"
        source={{uri: detail.strMealThumb}}
      />
      <Text style={styles.name}>{detail.strMeal}</Text>
      <Text style={styles.from}>{detail.strArea}</Text>
      <Text style={styles.instructions}>{detail.strInstructions} </Text>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          Linking.openURL(detail.strYoutube);
        }}>
        <Text style={styles.touchText}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;
