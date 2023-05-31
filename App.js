import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { GoalInput } from "./components/GoalInput/GoalInput";
import { GoalList } from "./components/GoalList/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isAddGoalModalVisible, setIsAddGoalModalVisible] = useState(false);
  const [goals, seGoals] = useState([]); // { test: string, id: number }

  function addGoal(newGoalName) {
    seGoals((currentGoals) => [
      ...currentGoals,
      { text: newGoalName, id: Math.random().toString() },
    ]);
  }

  function deleteItem(toBeDeletedItemId) {
    seGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== toBeDeletedItemId)
    );
  }

  function toggleAddGoalModalVisibility() {
    setIsAddGoalModalVisible(
      (currentIsAddGoalModalVisible) => !currentIsAddGoalModalVisible
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.mainViewContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={toggleAddGoalModalVisibility}
        />
        <GoalInput
          isVisible={isAddGoalModalVisible}
          onModalVisibilityToggle={toggleAddGoalModalVisibility}
          addGoal={addGoal}
        />
        <GoalList deleteItem={deleteItem} goals={goals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
