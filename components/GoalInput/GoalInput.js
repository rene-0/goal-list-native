import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

export function GoalInput({ addGoal, isVisible, onModalVisibilityToggle }) {
  const [goalName, setGoalName] = useState("");

  function goalInputHandler(inputtedText) {
    setGoalName(inputtedText);
  }

  function handleAddGoal() {
    addGoal(goalName);
    setGoalName("");
    onModalVisibilityToggle();
  }

  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.addGoalContainer}>
        <Image
          style={styles.goalImage}
          source={require("../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.goalNameInput}
          placeholder="Write your goal!"
          onChangeText={goalInputHandler}
          onSubmitEditing={handleAddGoal}
          value={goalName}
        />
        <View style={styles.addGoalButtonContainer}>
          <View style={styles.addGoalModalButton}>
            <Button
              onPress={onModalVisibilityToggle}
              color="#fb3b1e"
              title="Close"
            />
          </View>
          <View style={styles.addGoalModalButton}>
            <Button onPress={handleAddGoal} color="#5bb450" title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  addGoalModalContainer: {
    flex: 1,
  },
  goalImage: {
    width: 100,
    height: 100,
    marginBottom: 25,
  },
  addGoalContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  goalNameInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 5,
  },
  addGoalButtonContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  addGoalModalButton: {
    width: 100,
  },
});
