// components/ModalView.js
import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ModalView = ({ visible, onClose, color, image }) => {
  return (
    <Modal animationType="fade" transparent={false} visible={visible}>
      <View style={[styles.modalContainer, { backgroundColor: color }]}>
        <Text style={styles.modalText}>This is the {color} screen!</Text>
        <Image
          source={image}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default ModalView;
