import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IMAGE_URI} from '../assets/constants';
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    color: 'red',
  },
});
