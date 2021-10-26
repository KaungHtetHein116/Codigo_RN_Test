import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchList} from '../redux/actions/Action';
import Loading from './components/Loading';
import Error from './components/Error';
import ItemCard from './components/ItemCard';

const Home = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  if (state.data.error) return <Error />;

  if (state.data.itemList.length == 0) return <Loading />;

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={state.data.itemList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <ItemCard
            item={item}
            onPress={() => navigation.navigate('Detail', {id: item.id})}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Home;
