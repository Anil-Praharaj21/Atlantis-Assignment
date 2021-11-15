import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import TaskViewScreen from '../screens/TaskViewScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createStackNavigator();

const Navigator = rest => {
  const [isAuth, setIsAuth] = useState(false);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async details => {
    try {
      var user = await AsyncStorage.getItem('userData');
      if (user) {
        setIsAuth(true);
        setUserDetails(user);
      }
    } catch (e) {}
  };

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen name="Todo">
            {props => (
              <TaskViewScreen
                setAuthValue={value => setIsAuth(value)}
                {...rest}
                {...props}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Add Task">
            {props => (
              <AddTaskScreen
                setAuthValue={value => setIsAuth(value)}
                {...rest}
                {...props}
              />
            )}
          </Stack.Screen>
        </>
      ) : (
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}>
          {props => (
            <LoginScreen
              setAuthValue={value => setIsAuth(value)}
              {...rest}
              {...props}
            />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
