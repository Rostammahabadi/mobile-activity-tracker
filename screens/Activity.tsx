import AsyncStorage from "@react-native-async-storage/async-storage";
import { PickerIOS } from "@react-native-picker/picker";
import React, { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { UserContext } from "../UserContext";

const ACTIVITIES= [ "", 'Running', 'Swimming', 'Sports', 'Workout', 'Yoga', 'Meditation']
const DURATIONS = [ "", '10 min', '15 min', '30 min', '45 min', '60 min']
const EMOTIONS = [ "", 'Great!', 'Good', 'Challenging', 'Uplifting', 'Energizing']

export default function ActivityScreen() {
  const [ activity, setActivity ] = useState("");
  const [ duration, setDuration ] = useState("");
  const [ emotion, setEmotion ] = useState("");
  const user = useContext(UserContext);
  
  function addActivity() {
    let childData = {activity, duration, emotion}
    let date: Date = new Date();
    let stringDate = date.toString();
    user[stringDate] = childData
    saveUserInfo();
    alert('Activity Saved!')
  }

  function handleOnChange() {
    if(!activity || !duration || !emotion){
      alert('Choose one from all three categories to continue!')
      return
    } else {
      addActivity();
    }
  }

  

  const saveUserInfo = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      console.log(e)
    }
  };

  return (
      <SafeAreaView>
          <Text style={{alignSelf:"center",fontSize:30}}>Select an activity</Text>
          <PickerIOS
          selectedValue={activity}
          onValueChange={(value: any) => {
              setActivity(value);
          }}>
          {ACTIVITIES.map((value) => (
              <PickerIOS.Item
              key={value}
              value={value}
              label={value}
              />
          ))}
          </PickerIOS>
          <Text style={styles.titles}>How long was the activity?</Text>
          <PickerIOS
          selectedValue={duration}
          onValueChange={(value: any) => {
              setDuration(value);
          }}>
          {DURATIONS.map((value) => (
              <PickerIOS.Item
              key={value}
              value={value}
              label={value}
              />
          ))}
          </PickerIOS>
          <Text style={styles.titles}>How did it feel?</Text>
          <PickerIOS
          selectedValue={emotion}
          onValueChange={(value: any) => {
              setEmotion(value);
          }}>
          {EMOTIONS.map((value) => (
              <PickerIOS.Item
              key={value}
              value={value}
              label={value}
              />
          ))}
          </PickerIOS>
          <Button
          title="Submit"
          onPress={handleOnChange}
          />
      </SafeAreaView>
  )
}


const styles = StyleSheet.create!({
    titles: {
        alignSelf: 'center',
        fontSize: 30,
    }
})