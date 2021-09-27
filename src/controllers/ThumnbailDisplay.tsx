import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageWrapper from '../components/ImageWrapper';

interface Props {
  head: string;
}

const ThumnbailDisplay: FC<Props> = Props => {
  return (
    <View>
      <ImageWrapper />
    </View>
  );
};

export default ThumnbailDisplay;

const styles = StyleSheet.create({});
