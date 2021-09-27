import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Image,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import ModalHeader from './ModalHeader';
import {ZoomableModalInterface} from '../interfaces/ZoomableModalInterface';

const ZoomableModal: FC<ZoomableModalInterface> = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <ModalHeader
              modalVisible={props.modalVisible}
              setModalVisible={props.setModalVisible}
            />
          </View>
          <View style={styles.modalContent}>
            <ReactNativeZoomableView
              maxZoom={props.maxZoom}
              minZoom={1}
              zoomStep={0.5}
              initialZoom={1}
              bindToBorders={true}
              captureEvent={true}>
              <Image source={{uri: props.uri}} style={styles.image} />
            </ReactNativeZoomableView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ZoomableModal;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  modalView: {
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 1,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    color: 'red',
  },
  modalBtn: {
    alignSelf: 'flex-end',
    zIndex: 1,
  },
  modalContent: {
    flex: 1,
  },
  header: {
    zIndex: 1,
  },
});
