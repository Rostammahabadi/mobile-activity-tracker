import React from 'react';
import { List } from 'react-native-paper';

export default function Accordion({title, data, month}: any) { 
  let keys = Object.keys(data)

  let filteredByMonth = keys
  .filter(key =>
      new Date(key).getMonth() == month)
      
  return (
    <List.Section>
      <List.Accordion
      title={title}
      >
      {filteredByMonth.map((date, num) => {
        return (
          <List.Item
            key={num}
            title={new Date(date).toDateString()}
            description={[ 'Activity: ', data[date]['activity'], "\n", "Duration: ", data[date]['duration'],"\n",
              "Emotion: ", data[date]['emotion'], "\n",]}
            descriptionNumberOfLines={3}
          /> 
        )
      })}
      </List.Accordion>
    </List.Section>
  )
}