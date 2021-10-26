import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  NativeModules,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDetail} from '../redux/actions/Action';
import Loading from './components/Loading';
import Error from './components/Error';

const Detail = () => {
  const [message, setMessage] = useState('active');
  const [counter, setCounter] = useState(1);
  const route = useRoute();
  const dispatch = useDispatch();

  const {error, detail} = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchDetail(route.params.id));

    return () => {
      dispatch(fetchDetail(0));
    };
  }, []);

  const toggleActive = () => {
    counter % 2 == 0 ? setMessage('active') : setMessage('inactive');
    setCounter(prevState => prevState + 1);
  };

  const onPress = () => {
    if (Platform.OS == 'android') {
      NativeModules.CustomFunction.show(() => {
        alert(message);
      });
    } else {
      NativeModules.CustomFunction.ShowMessage(message);
    }
    toggleActive();
  };

  if (error) return <Error />;

  if (Object.keys(detail).length === 0) return <Loading />;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{flex: 1}}>
      <Image
        source={{uri: detail?.image}}
        style={{width: '100%', height: 250}}
      />
      <View style={styles.textWrapper}>
        <Text style={{width: '80%'}}>{detail?.title}</Text>
        <Text>{detail.price ? `$ ${detail?.price}` : ''}</Text>
      </View>
      <Text>{detail?.description}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={onPress}>
        <Text style={{color: 'white'}}>Click Me !!!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    position: 'absolute',
    height: 60,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
  },
});
