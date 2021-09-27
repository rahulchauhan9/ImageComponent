import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IMAGE_URI} from '../assets/constants/constants';
import ModalView from './ModalView';
import ZoomableModal from './ZoomableModal';

const ImageWrapper = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <Pressable onPress={handlePress}>
        <Image source={{uri: IMAGE_URI}} style={styles.image} />
      </Pressable>
      {/* <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        uri={IMAGE_URI}
      /> */}

      <ZoomableModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        uri={IMAGE_URI}
        maxZoom={1.5}
      />
    </View>
  );
};

export default ImageWrapper;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
