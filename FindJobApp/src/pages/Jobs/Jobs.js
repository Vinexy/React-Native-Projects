import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux';

import JobsCard from '../../components/JobsCard';

import {loadItems} from '../../redux/Jobs/JobsSlice';

import Loading from '../../components/Loading';

const Jobs = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios
      .get('https://www.themuse.com/api/public/jobs?company=HP&page=0')
      .then(response => {
        dispatch(loadItems(response.data.results));
        setLoading(false);
      });
  }, []);

  const items = useSelector(state => state.jobs.items);

  return (
    <SafeAreaView>
      {loading ? <Loading /> : <FlatList data={items} renderItem={ one => <JobsCard content={one} />} /> }
    </SafeAreaView>
  );
};

export default Jobs;
