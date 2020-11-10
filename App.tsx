
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [user, setUser] = React.useState(Object);

  const getMyObject = async () => {
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

  const saveUserInfo = async (user: any) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getMyObject();
  },[]);

  const handleOnChange = (childData: Object) => {
    let date: Date = new Date();
    let stringDate = date.toString();
    user[stringDate] = childData
    saveUserInfo(user);
  }

  return (
    <Home
      onPress={handleOnChange}
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
