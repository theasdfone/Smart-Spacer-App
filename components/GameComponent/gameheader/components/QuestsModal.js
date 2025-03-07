// components/QuestsModal.js
import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const QuestsModal = ({
  visible,
  onClose,
  tasks,
  toggleTask,
  handleOpenModal, // Add this prop
}) => {
  const handleToggleTask = (id) => {
    toggleTask(id); // Toggle the task
    handleOpenModal(null); // Close the modal after toggling
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Modal Title */}
          <Text style={styles.modalTitle}>Quests</Text>

          {/* List of Tasks */}
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleToggleTask(item.id)}>
                <Text
                  style={[
                    styles.taskText,
                    item.completed && styles.completedTask,
                  ]}
                >
                  {item.completed
                    ? `✔ ${item.text} (+${item.reward} EXP)`
                    : `○ ${item.text}`}
                </Text>
              </TouchableOpacity>
            )}
          />

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  },
  modalContent: {
    width: "80%", // Constrained width
    maxHeight: "60%", // Constrained height
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  taskText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  closeButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default QuestsModal;