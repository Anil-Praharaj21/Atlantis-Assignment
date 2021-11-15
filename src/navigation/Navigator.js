import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import TaskViewScreen from '../screens/TaskViewScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import {String} from '../assets/values/String';
import {Color} from '../assets/values/Color';

const Stack = createStackNavigator();

const Navigator = rest => {
  const [isAuth, setIsAuth] = useState(false);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    // getUserDetails();
  }, []);

  const getUserDetails = async details => {
    try {
      var user = await AsyncStorage.getItem(String.userData);
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
          <Stack.Screen
            name={String.todo}
            options={{
              headerTintColor: Color.colorOnPrimary,
              headerStyle: {
                backgroundColor: Color.colorPrimary,
              },
            }}>
            {props => (
              <TaskViewScreen
                setAuthValue={value => setIsAuth(value)}
                {...rest}
                {...props}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name={String.addTask}
            options={{
              headerTintColor: Color.colorOnPrimary,
              headerStyle: {
                backgroundColor: Color.colorPrimary,
              },
            }}>
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
          name={String.login}
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
