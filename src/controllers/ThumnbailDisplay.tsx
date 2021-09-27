import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  head: string;
}

const ThumnbailDisplay: FC<Props> = Props => {
  return (
    <View>
      <Text>{Props.head}</Text>
    </View>
  );
};

export default ThumnbailDisplay;

const styles = StyleSheet.create({});
