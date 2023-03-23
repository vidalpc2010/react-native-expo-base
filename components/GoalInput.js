import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  Button,
  Modal,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal!" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flexDirection: "column",
    // justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding:16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    // marginRight: 8,
  },
});

export default GoalInput;
