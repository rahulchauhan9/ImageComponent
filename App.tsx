import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ThumnbailDisplay from './src/controllers/ThumnbailDisplay';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
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
