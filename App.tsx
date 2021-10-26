import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface IState {
  people: {
    age: number;
    name: string;
    url: string;
    note?: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
