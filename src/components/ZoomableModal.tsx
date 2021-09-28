import React, {FC} from 'react';
import {StyleSheet, View, Modal, Image, Dimensions} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import ModalHeader from './ModalHeader';
import {ZoomableModalInterface} from '../interfaces/ZoomableModalInterface';

const ZoomableModal: FC<ZoomableModalInterface> = ({
  modalVisible,
  setModalVisible,
  uri,
  maxZoom,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <ModalHeader
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </View>
          <View style={styles.modalContent}>
            <ReactNativeZoomableView
              maxZoom={maxZoom}
              minZoom={1}
              zoomStep={0.5}
              initialZoom={1}
              bindToBorders={true}
              captureEvent={true}>
              <Image source={{uri: uri}} style={styles.image} />
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
