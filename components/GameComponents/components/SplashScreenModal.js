// components/SplashScreenModal.js
import React, { useEffect } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SplashScreenModal = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      // Automatically close the modal after 2 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [visible, onClose]);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={require("../carousel/image2.png")} // replace with my hidden image
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            Complete your daily tasks to unlock new items!
          </Text>
          <TouchableOpacity style={styles.skipButton} onPress={onClose}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
  skipButton: {
    marginTop: 10,
    padding: 10,
  },
  skipButtonText: {
    fontSize: 16,
    color: "#007BFF",
  },
});

export default SplashScreenModal;
