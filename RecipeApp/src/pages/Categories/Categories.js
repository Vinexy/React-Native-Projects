import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Categories.styles.js';
import axios from 'axios';
import CategoriesCard from '../../components/CategoriesCard.js';

const Categories = ({navigation}) => {
  const [items, setItems] = useState([]);

  function navi(category) {
    navigation.navigate('Meals', {category});
  }

  async function fetch() {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );
    setItems(response.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items.categories}
        renderItem={one => (
          <CategoriesCard
            content={one}
            onSelect={() => navi(one.item.strCategory)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Categories;
