import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ThumnbailDisplay from './src/controllers/ThumnbailDisplay';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ThumnbailDisplay head="test" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
