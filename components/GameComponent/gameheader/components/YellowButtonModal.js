// components/YellowButtonModal.js
import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const YellowButtonModal = ({ visible, onClose, onYes }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Image */}
          <Image
            source={require("../bunny/happy.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Text */}
          <Text style={styles.text}>Is your parent here?</Text>

          {/* Close Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>

          {/* No Button */}
          <TouchableOpacity
            style={[styles.button, styles.noButton]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>

          {/* Yes Button */}
          <TouchableOpacity
            style={[styles.button, styles.yesButton]}
            onPress={onYes}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  noButton: {
    backgroundColor: "#FF3B30",
  },
  yesButton: {
    backgroundColor: "#34C759", // Green color for the "Yes" button
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default YellowButtonModal;
