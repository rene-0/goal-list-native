import { StyleSheet, Text, View, Pressable } from "react-native";

export function GoalListItem({ text, goalId, deleteItem }) {
  return (
    <View style={styles.goatItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteItem.bind(this, goalId)}
      >
        <Text style={styles.goatItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goatItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goatItemText: {
    color: "white",
    padding: 8,
    fontWeight: 900,
  },
});
