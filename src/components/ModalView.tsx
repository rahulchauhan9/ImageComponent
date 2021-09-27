import React, {useRef, FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  Animated,
} from 'react-native';
import {
  PinchGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {DISMISS_BTN} from '../assets/constants';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  uri: string;
}

const ModalView: FC<Props> = props => {
  const scale = useRef(new Animated.Value(0.5)).current;
  const valueX = useRef(new Animated.Value(0)).current;

  const handlePinch = Animated.event([{nativeEvent: {scale}}], {
    useNativeDriver: false,
  });
  const handlePan = Animated.event([{nativeEvent: {translationX: valueX}}], {
    useNativeDriver: false,
  });
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
          <PanGestureHandler onGestureEvent={handlePan}>
            <PinchGestureHandler
              onGestureEvent={handlePinch}
              onHandlerStateChange={handlePinch}>
              <Animated.Image
                source={{uri: props.uri}}
                style={[
                  styles.image,
                  {transform: [{scale}, {translateX: valueX}]},
                ]}
              />
            </PinchGestureHandler>
          </PanGestureHandler>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;

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
    marginBottom: 5,
  },
});
