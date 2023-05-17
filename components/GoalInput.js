import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  Button,
  Modal,
  Image
} from "react-native";
import { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  //feature-test1

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <LinearGradient colors={['#e4d0ff','#ddb52f']} style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal!" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </LinearGradient>
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
    // marginBottom: 24,
    padding:16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    // backgroundColor:"#311b6b",
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
  image:{
    width:100,
    height:100,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    backgroundColor:'#e4d0ff',
    borderColor: "#e4d0ff",
    color:'#120438',
    borderRadius:6,
    width: "100%",
    padding: 16,
    // marginRight: 8,
  },
});

export default GoalInput;
