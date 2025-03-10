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
        <View style={styles.modalContainer}>
          {/* Title Bar */}
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Get a Grown-up!</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Speech Bubble */}
          <View style={styles.speechBubbleContainer}>
            <View style={styles.speechBubble}>
              <Text style={styles.speechText}>
                We need your parent or another grown-up to help.{"\n"}
                Ask them to come here and press 'YES'!
              </Text>
            </View>
            <View style={styles.triangle} />
          </View>

          {/* Row with Bunny and Buttons */}
          <View style={styles.rowContainer}>
            {/* Bunny Image */}
            <Image
              source={require("../bunny/happy.png")}
              style={styles.image}
              resizeMode="contain"
            />

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.yesButton} onPress={onYes}>
                <Text style={styles.buttonText}>Yes, a grown-up is here!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.noButton} onPress={onClose}>
                <Text style={styles.noButtonText}>No, not yet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    paddingBottom: 30,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1599A4",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  titleText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "semibold",
  },
  closeButton: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  speechBubbleContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  speechBubble: {
    backgroundColor: "#EAEAEA",
    padding: 15,
    borderRadius: 30,
    width: "85%",
  },
  speechText: {
    fontSize: 18,
    color: "#333",
    fontWeight: 450,
    paddingHorizontal: 1,
    textAlign: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 20,
    right: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#EAEAEA",
    alignSelf: "center",
    marginTop: -2, // Pulls the triangle up to attach to the speech bubble
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
  },
  image: {
    width: 80,
    height: 140,
    marginRight: 15,
  },
  buttonContainer: {
    flex: 1,
  },
  yesButton: {
    backgroundColor: "#1599A4",
    paddingVertical: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  noButton: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  noButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default YellowButtonModal;
