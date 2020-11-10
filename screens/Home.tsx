import AsyncStorage from "@react-native-async-storage/async-storage";
import { PickerIOS } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const ACTIVITIES= [ "", 'Running', 'Swimming', 'Sports', 'Workout', 'Yoga', 'Meditation']
const DURATIONS = [ "", '10 min', '15 min', '30 min', '45 min', '60 min']
const EMOTIONS = [ "", 'Great!', 'Good', 'Challenging', 'Uplifting', 'Energizing']

// gloval state store. Redux is annoying. Don't use this unless your livelihood depends on you learning this
// useContext for quick global state stuff
// And honestly, prop threading isn't that bad, and I'd just default to this, as long as you can keep it realllllly simple.

export default function Home({ user }: any) {
  const [ activity, setActivity ] = useState("");
  const [ duration, setDuration ] = useState("");
  const [ emotion, setEmotion ] = useState("");

  function handleOnChange() {
    let childData = {activity, duration, emotion}
    let date: Date = new Date();
    let stringDate = date.toString();
    user[stringDate] = childData
    saveUserInfo;
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
          <Text style={{alignSelf:"center",fontSize:30, marginTop:20}}>Select an activity</Text>
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