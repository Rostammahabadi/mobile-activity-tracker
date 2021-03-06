import React, { useContext } from "react";
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Accordion from "../components/Accordion";
import { UserContext } from "../UserContext";

export default function HistoryScreen() {
  const user: any = useContext(UserContext);

  let months = Platform.OS === 'ios' ? Object.keys(user).map((key) => {
    return new Date(key).toLocaleString('default', { month: 'long'});
  }) : 
  Object.keys(user).map((key) => {
    let date = new Date(key)
    return date.toDateString().split(' ')[1]
  })

  let monthNumber = Object.keys(user).map((key) => {
    return new Date(key).getMonth();
  })

  let distinctMonths = [...new Set(months)]

  return (
    <ScrollView>
      <SafeAreaView>
        {
          distinctMonths.map((month, num) => {
            return <Accordion
                      key={num}
                      title={month}
                      data={user}
                      month={monthNumber[num]}
                    />
          })
        }
      </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create!({
    titles: {
        alignSelf: 'center',
        fontSize: 30,
    },
})