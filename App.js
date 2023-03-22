import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCoruseGoalsList] = useState([]);

 

  function addGoalHandler(enteredGoalText) {
    // setCoruseGoalsList( [...courseGoals, enteredGoalText]);


    setCoruseGoalsList((currentCourseGoals) => [
      ...currentCourseGoals,
      // {text:enteredGoalText, key: Math.random().toString()}
      {text:enteredGoalText, id: Math.random().toString()}
    ]);

    
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            // itemData.index;
            return (
              <GoalItem text={itemData.item.text}/>
            );
          }}
          keyExtractor={(item,index) => {
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
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  
  goalsContainer: {
    flex: 5,
  },
  
});
