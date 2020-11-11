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
                                      title={data[date]['activity']}
                                      description={["Duration: ", data[date]['duration'],"\n",
                                        "Emotion: ", data[date]['emotion'], "\n",]}
                                      
                                      /> 
                              )
                          })}
          </List.Accordion>
      </List.Section>
  )
}