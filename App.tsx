
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [user, setUser] = React.useState(Object);

  const getUserObject = async () => {
    const previousUser = await AsyncStorage.getItem('user');
    if(previousUser){
      setUser(JSON.parse(previousUser))
    } else {
      try {
        await AsyncStorage.setItem('user', JSON.stringify({}))
      } catch (e) {
        console.log(e)
      }
    }
  };

  useEffect(() => {
    getUserObject();
  },[]);

  return (
    <Home
      user={user}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
