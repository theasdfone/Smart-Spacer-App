import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const QuestsModal = ({
  visible,
  onClose,
  tasks,
  toggleTask,
  handleOpenModal, // Add this prop
  setTasks,
  addExpFunction,
}) => {
  const handleToggleTask = (id) => {
    toggleTask(tasks, setTasks, id, addExpFunction); // Toggle the task
    handleOpenModal(null); // Close the modal after toggling
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require("../assets/todoIcon.png")}
              style={styles.headerIcon}
            />
            <Text style={styles.modalTitle}>To Do</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✖</Text>
            </TouchableOpacity>
          </View>

          {/* Task List */}
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.taskItem}
                onPress={() => handleToggleTask(item.id)}
              >
                <Image source={item.image} style={styles.taskIcon} />
                <View style={styles.taskTextContainer}>
                  <Text style={styles.taskText}>{item.text}</Text>
                  <Text style={styles.taskPoints}>{item.reward} pts</Text>
                </View>
                <View
                  style={[styles.checkbox, item.completed && styles.checkedBox]}
                >
                  {item.completed && <Text style={styles.checkmark}>✔</Text>}
                </View>
              </TouchableOpacity>
            )}
          />
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
    width: "75%",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#0097A7",
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 0,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
    zIndex: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  closeButton: {
    fontSize: 20,
    color: "white",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    pointerEvents: "auto",
  },
  taskIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskPoints: {
    fontSize: 12,
    color: "gray",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#0097A7",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    backgroundColor: "#0097A7",
  },
  checkmark: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default QuestsModal;
