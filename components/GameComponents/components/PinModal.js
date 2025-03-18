import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from "react-native";

const PinModal = ({ visible, onClose }) => {
  const [pin, setPin] = useState("");
  const pinInputRef = useRef(null);

  const handleNumberPress = (num) => {
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleClose = () => {
    setPin(""); // Reset PIN when closing
    onClose();
  };

  const handleSubmit = () => {
    if (pin.length === 4) {
      alert("PIN submitted successfully!");
      setPin("");
      onClose();
    } else {
      alert("Enter a 4-digit PIN.");
    }
  };

  const handleTextChange = (text) => {
    if (text.length <= 4) {
      setPin(text);
    }
  };

  const focusPinInput = () => {
    pinInputRef.current.focus();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Close Button as Image */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Image
              source={require("../buttons/X.png")} // Replace with your actual image path
              style={styles.closeImage}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Enter Your Pin</Text>
          <Text style={styles.subtitle}>
            This part needs the parent's secret code. It will redirect you to
            the parent interface.
          </Text>

          {/* Hidden TextInput for Keyboard Input */}
          <TextInput
            ref={pinInputRef}
            style={styles.hiddenInput}
            value={pin}
            onChangeText={handleTextChange}
            keyboardType="number-pad"
            maxLength={4}
            autoFocus={true}
          />

          {/* PIN Input Boxes */}
          <TouchableOpacity onPress={focusPinInput}>
            <View style={styles.pinContainer}>
              {[0, 1, 2, 3].map((index) => (
                <View
                  key={index}
                  style={[
                    styles.pinBox,
                    pin[index] ? styles.filledPinBox : styles.emptyPinBox,
                  ]}
                >
                  <Text style={styles.pinText}>{pin[index] || ""}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>

          {/* Forgot PIN Link */}
          <TouchableOpacity>
            <Text style={styles.forgotPin}>Forgot your pin?</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          {pin.length === 4 && (
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          )}
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
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },
  closeImage: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  pinBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  emptyPinBox: {
    backgroundColor: "#E0E0E0",
  },
  filledPinBox: {
    backgroundColor: "#008080",
  },
  pinText: {
    fontSize: 22,
    color: "#FFF",
  },
  forgotPin: {
    fontSize: 14,
    color: "#007BFF",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#008080",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
  },
  submitText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  hiddenInput: {
    position: "absolute",
    height: 0,
    width: 0,
    opacity: 0,
  },
});

export default PinModal;
