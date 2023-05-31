import { FlatList, StyleSheet, Text, View } from "react-native";

import { GoalListItem } from "./components/GoalListItem/GoalListItem";

export function GoalList({ goals, deleteItem }) {
  return (
    <View style={styles.goalListContainer}>
      <FlatList
        data={goals}
        renderItem={(goalItemData) => (
          <GoalListItem
            deleteItem={deleteItem}
            goalId={goalItemData.item.id}
            text={goalItemData.item.text}
          />
        )}
        keyExtractor={(item) => item.id}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalListContainer: {
    borderTopColor: "#cccccc",
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
    flex: 12,
  },
});
