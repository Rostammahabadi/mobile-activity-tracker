import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import React, { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, Platform } from "react-native";
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
  };

  function handleOnChange() {
    if(!activity || !duration || !emotion){
      alert('Choose one from all three categories to continue!')
      return
    } else {
      addActivity();
    }
  };
  

  const saveUserInfo = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      console.log(e)
    }
  };

  const PICKER = Platform.OS === 'ios' ? PickerIOS : Picker;

  
  return (
      <SafeAreaView>
          <Text style={{alignSelf:"center",fontSize:30}}>Select an activity</Text>
          <PICKER
          selectedValue={activity}
          onValueChange={(value: any) => {
              setActivity(value);
          }}>
          {ACTIVITIES.map((value) => (
              <PICKER.Item
              key={value}
              value={value}
              label={value}
              />
          ))}
          </PICKER>
          <Text style={styles.titles}>How long was the activity?</Text>
          <PICKER
          selectedValue={duration}
          onValueChange={(value: any) => {
              setDuration(value);
          }}>
          {DURATIONS.map((value) => (
              <PICKER.Item
              key={value}
              value={value}
              label={value}
              />
          ))}
          </PICKER>
          <Text style={styles.titles}>How did it feel?</Text>
          <PICKER
          selectedValue={emotion}
          onValueChange={(value: any) => {
              setEmotion(value);
          }}>
          {EMOTIONS.map((value) => (
              <PICKER.Item
              key={value}
              value={value}
              label={value}
              />
          ))}
          </PICKER>
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