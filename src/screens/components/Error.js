import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Error loading data !!</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
