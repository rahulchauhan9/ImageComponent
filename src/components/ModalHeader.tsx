import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  DISMISS_BTN,
  PREVIEW_FONT_SIZE as FONT_SIZE,
} from '../assets/constants/constants';
import {ModalHeaderInterface} from '../interfaces/ModalHeaderInterface';

const ModalHeader: FC<ModalHeaderInterface> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.preview}>
          <Text style={styles.previewStyles}>Preview</Text>
        </View>
        <View style={styles.dismiss}>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.dismissText}>{DISMISS_BTN}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <View style={styles.bar}></View>
    </>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  preview: {
    paddingBottom: 15,
  },
  dismiss: {
    position: 'absolute',
    right: 20,
    bottom: 15,
  },
  dismissText: {
    color: 'red',
  },
  bar: {
    height: 0.5,
    backgroundColor: '#D3D3D3',
  },
  previewStyles: {
    fontWeight: '700',
    fontSize: FONT_SIZE,
  },
});
