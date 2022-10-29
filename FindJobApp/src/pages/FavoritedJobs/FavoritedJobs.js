import {View, Text, SafeAreaView,FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavoritedCards from '../../components/FavoritedCards';

const FavoritedJobs = () => {
  const items = useSelector(state => state.jobs.favoriteList);
  console.log(items);
  return (
    <SafeAreaView>
      {<FlatList data={items} renderItem={one => <FavoritedCards content={one} />} />}
    </SafeAreaView>
  );
};

export default FavoritedJobs;
