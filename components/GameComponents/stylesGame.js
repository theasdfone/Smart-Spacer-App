// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  backgroundImage: {
    position: "absolute",
    width: 480,
    height: 800,
    objectFit: "fill",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  ui: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "80%",
    alignSelf: "center",
  },
  levelText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 10,
    top: 1,
  },
  progressBarWrapper: {
    flex: 1, // Take up remaining space
    position: "relative", // Required for absolute positioning of text
  },
  expText: {
    position: "absolute", // Position text over the ProgressBar
    top: 5, // Align text vertically
    color: "#000000", // Text color
    fontSize: 14, // Adjust font size
    fontWeight: "bold", // Optional: Make text bold
    paddingLeft: 15,
  },
  expContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Vertically center items
    width: "100%", // Match the width of the parent
    marginTop: 20, // Adjust as needed
  },
  profilePicture: {
    width: 60, // Adjust size as needed
    height: 60, // Adjust size as needed
    borderRadius: 20, // Half of width/height to make it circular
    marginRight: -5, // Add spacing between pfp and ProgressBar
    zIndex: 1,
  },
  image: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#555",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  colorChangingButton: {
    padding: 15,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  toggleButton: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
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
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});
