import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Meals.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import MealCard from '../../components/MealCard.js';
import axios from 'axios';

const Meals = ({route, navigation}) => {
  const [meal, setMeal] = useState([]);

  function navi(detail) {
    navigation.navigate('Detail', {detail});
  }

  async function hookMeal() {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`,
    );

    setMeal(res.data);
  }
  useEffect(() => {
    hookMeal();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meal.meals}
        renderItem={one => (
          <MealCard content={one} onSelect={() => navi(one.item.idMeal)} />
        )}
      />
    </SafeAreaView>
  );
};

export default Meals;
