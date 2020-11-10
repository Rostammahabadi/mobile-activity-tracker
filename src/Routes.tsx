import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import ActivityScreen from '../screens/Activity';
import HistoryScreen from '../screens/History';
import Home from '../screens/Home';
import { AuthParamList } from './AuthParamList';
import { UserContext } from '../UserContext';

interface RoutesProps { 
}
const Stack = createStackNavigator<AuthParamList>()

export const Routes: React.FC<RoutesProps> = ({}) => {
  const [user, setUser] = React.useState(Object);
  
  const getUserObject = async () => {
    const previousUser = await AsyncStorage.getItem('user');
    if(previousUser){
      setUser(JSON.parse(previousUser))
    } else {
      console.log('shouldnt be running')
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
    <NavigationContainer>
      <UserContext.Provider value={user}>
        <Stack.Navigator>
          <Stack.Screen options={{header: () => null }} name="Home" component={Home}/>
          <Stack.Screen options={{headerTitle: ""}} name="Activity" component={ActivityScreen}/>
          <Stack.Screen name="History" component={HistoryScreen}/>
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
}