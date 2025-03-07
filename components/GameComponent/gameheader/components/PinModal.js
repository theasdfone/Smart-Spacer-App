// components/PinModal.js
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";

const PinModal = ({ visible, onClose }) => {
  const [pin, setPin] = useState("");

  const handleSubmit = () => {
    if (pin.length === 4) {
      // Example: Validate PIN length
      Alert.alert("Success", "PIN submitted successfully!");
      onClose(); // Close the modal after submission
    } else {
      Alert.alert("Error", "Please enter a valid 4-digit PIN.");
    }
  };

  const handleHyperlinkPress = () => {
    Linking.openURL("https://www.coolmathgames.com/"); // Replace with your desired URL
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Text */}
          <Text style={styles.text}>Please enter your 4-digit PIN:</Text>

          {/* PIN Input */}
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={4}
            value={pin}
            onChangeText={setPin}
            placeholder="1234"
            secureTextEntry={true} // Hide PIN input
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          {/* Hyperlink */}
          <TouchableOpacity onPress={handleHyperlinkPress}>
            <Text style={styles.hyperlink}>Forgot your pin?</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity
            style={[styles.button, styles.closeButton]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Close</Text>
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
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  pinInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  hyperlink: {
    fontSize: 16,
    color: "#007BFF",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
});

export default PinModal;
