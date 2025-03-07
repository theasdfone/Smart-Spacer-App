// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute"
  },
  container: {
    flex: 1,
  },
  ui: {
    flex: 1,
  },
  levelText: {
    fontSize: 28,
    color: "#aaa",
    marginBottom: 10,
  },
  expText: {
    fontSize: 24,
    color: "#aaa",
    marginBottom: 10,
  },
  progressBarContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#444",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#61dafb",
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
