import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ItemCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.7}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <View style={{flexShrink: 1}}>
        <Text numberOfLines={1} style={{marginVertical: 10}}>
          {item.title}
        </Text>
        <Text style={{fontWeight: 'bold'}}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    backgroundColor: 'grey',
  },
});
