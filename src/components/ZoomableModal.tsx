import React, {FC, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  Button,
  Animated,
} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import {DISMISS_BTN} from '../assets/constants';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  uri: string;
}

const ZoomableModal: FC<Props> = props => {
  const [valX, setValX] = useState(0);
  const handleLeft = () => {
    setValX(oldX => oldX + 90);
  };
  const handleRight = () => {
    setValX(oldX => oldX - 90);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Pressable onPress={() => props.setModalVisible(!props.modalVisible)}>
            <Text style={styles.modalClose}>{DISMISS_BTN}</Text>
          </Pressable>
          <ReactNativeZoomableView
            maxZoom={1.5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            captureEvent={true}>
            <Animated.Image
              source={{uri: props.uri}}
              style={[styles.image, {transform: [{rotate: `${valX}deg`}]}]}
            />
          </ReactNativeZoomableView>
          <View style={styles.modalBtn}>
            <Button title="<-" onPress={handleLeft} />
            <Button title="->" onPress={handleRight} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ZoomableModal;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
  },
  container: {
    margin: '20%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    color: 'red',
    marginBottom: 5,
  },
  modalBtn: {
    flexDirection: 'row',
  },
});
