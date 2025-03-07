// components/TaskList.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <>
      <Text style={styles.taskTitle}>Quests</Text>
      <View style={styles.taskList}>
        {tasks.map((task) => (
          <TouchableOpacity key={task.id} onPress={() => toggleTask(task.id)}>
            <Text
              style={[styles.taskText, task.completed && styles.completedTask]}
            >
              {task.completed
                ? `✔ ${task.text} (+${task.reward} EXP)`
                : `○ ${task.text}`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 20,
    color: "#aaa",
    marginBottom: 10,
  },
  taskList: {
    width: "100%",
  },
  taskText: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 5,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});

export default TaskList;
