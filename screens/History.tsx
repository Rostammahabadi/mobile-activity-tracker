import React, { useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { List } from 'react-native-paper'
import Accordion from "../components/Accordion";
import { UserContext } from "../UserContext";

export default function HistoryScreen() {
  const user: any = useContext(UserContext);

  let months = Object.keys(user).map((key) => {
    return new Date(key).toLocaleString('default', { month: 'long'});
  })

  let monthNumber = Object.keys(user).map((key) => {
    return new Date(key).getMonth();
  })

  let distinctMonths = [...new Set(months)]

  console.log(distinctMonths)
  return (
    <ScrollView>
      <SafeAreaView>
        {
          distinctMonths.map((month, num) => {
            return <Accordion
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