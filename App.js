
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import { useState } from "react";

import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import { LinearGradient } from "expo-linear-gradient";


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCoruseGoalsList] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCoruseGoalsList((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function addGoalHandler(enteredGoalText) {
    // setCoruseGoalsList( [...courseGoals, enteredGoalText]);

    setCoruseGoalsList((currentCourseGoals) => [
      ...currentCourseGoals,
      // {text:enteredGoalText, key: Math.random().toString()}
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  }

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground imageStyle={styles.ImageBackground} style={styles.appContainer} source={require('./assets/imgBack.jpg')} resizeMode="cover">
        {/* <View style={styles.appContainer}> */}
          <Button
            title="Add new Goal"
            color="#a065ec"
            onPress={startAddGoalHandler}
          />
          {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
          <View style={styles.goalsContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                // itemData.index;
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
            {/* {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))} */}
          </View>
        {/* </View> */}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
    flex: 1,
  },
  ImageBackground:{
    opacity:.25,
  },  
  goalsContainer: {
    flex: 5,
  },
});
