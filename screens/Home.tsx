import { PickerIOS } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const ACTIVITIES= ['Running', 'Swimming', 'Sports', 'Workout', 'Yoga', 'Meditation']
const DURATIONS = ['10 min', '15 min', '30 min', '45 min', '60 min']
const EMOTIONS = ['Great!', 'Good', 'Challenging', 'Uplifting', 'Energizing']
export default function Home() {
    const [ activity, setActivity ] = useState("");
    const [ duration, setDuration ] = useState("");
    const [ emotion, setEmotion ] = useState("");

    function handleOnPress() {

    }
    return (
        <SafeAreaView>
            <Text style={{alignSelf:"center",fontSize:30, paddingTop:20}}>Select an activity</Text>
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
            onPress={handleOnPress}
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