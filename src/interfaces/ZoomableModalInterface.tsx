export interface ZoomableModalInterface {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  uri: string;
  maxZoom: number;
}
