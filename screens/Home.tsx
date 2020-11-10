import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { AuthNavProps } from "../src/AuthParamList";

function Home({navigation}: AuthNavProps<'Home'>) {
    return(
      <SafeAreaView>
        <View style={styles.container}>
        <Button
        onPress={() =>{
          navigation.navigate("Activity")
        }}
        >
          <Text>Track an Activity</Text>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("History")
          }}
        >
          <Text>See previous Activites</Text>
        </Button>
      </View>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      marginVertical: 300,
      maxWidth: 600, //web view
      justifyContent: 'center',
    }
  });
export default Home;

