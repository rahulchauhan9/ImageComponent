import React from 'react';
import {View, StyleSheet} from 'react-native';
import ThumnbailDisplay from './src/controllers/ThumnbailDisplay';

const App = () => {
  return (
    <View style={styles.container}>
      <ThumnbailDisplay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
