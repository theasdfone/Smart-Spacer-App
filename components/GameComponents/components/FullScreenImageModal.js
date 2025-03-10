// components/FullScreenImageModal.js
import React from "react";
import {
  Modal,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

const FullScreenImageModal = ({
  visible,
  onClose,
  backgroundImage,
  image,
  imageSize,
  carouselImages,
  color,
  onSelectImage,
  selectedImage,
}) => {
  return (
    <Modal animationType="fade" transparent={false} visible={visible}>
      <View style={styles.modalContainer}>
        {/* Background Image */}
        <Image
          source={backgroundImage}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <Text style={styles.modalText}>This is {color} screen!</Text>
        <View style={{ top: 60 }}>
          <Image
            source={selectedImage || image}
            style={imageSize}
            resizeMode="contain"
          />
        </View>

        {/* Carousel Image Buttons */}

        {/* <View style={styles.carouselContainer}>
          {carouselImages.map((carouselImage, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onSelectImage(carouselImage)} // Update the main image
              style={[
                styles.carouselImageContainer,
                image === carouselImage.image && styles.selectedImageContainer, // Highlight selected image
              ]}
            >
              <Image
                source={carouselImage}
                style={styles.carouselImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View> */}

        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Image
            source={require("../buttons/ExitButton.png")} // Use the image for the close button
            style={styles.closeButtonImage}
          />
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
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  carouselContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  carouselImageContainer: {
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 10,
  },
  carouselImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  selectedImageContainer: {
    borderColor: "#007BFF", // Highlight color
  },
  closeButton: {
    position: "absolute",
    top: 30,
    right: 30,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonImage: {
    width: 40, // Adjust the size as needed
    height: 40,
  },
});

export default FullScreenImageModal;
