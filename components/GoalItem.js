//import React from "react";  is not necesary in the modern javascript

import { StyleSheet , View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        padding: 8,
      },
      goalText: {
        color: "white",
      },
});

export default GoalItem;
