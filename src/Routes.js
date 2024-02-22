/* tslint:disable */
// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from './screens/auth/Onboarding';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import { Image, StyleSheet, Text } from 'react-native';
import Home from './screens/app/Home';
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';
import DrawerContent from './components/DrawerContent';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/user';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   console.log('user =>',user);
  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(setUser(user));
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


    const TabsNav = () => {
        return (

            <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown:false }}>
                <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({focused}) => (
                    <Image 
                    style={style.icon} 
                    source= { 
                        focused ? require('./assets/home-active.png') : require('./assets/home-inactive.png')
                    } />
                ) }} />
                <Tab.Screen name="Tasks" component={Tasks} options={{ tabBarIcon: ({focused}) => (
                    <Image 
                    style={style.icon} 
                    source= { 
                        focused ? require('./assets/calendar-active.png') : require('./assets/calendar-inactive.png')
                    } />
                ) }}/>
            </Tab.Navigator>
        );
    }

    if(user){
        return (
            <Drawer.Navigator screenOptions={{ headerShown:false }} drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Tabs" component={TabsNav} />
                <Drawer.Screen name="AddTask" component={AddTask} />
            </Drawer.Navigator>
        // <Tab.Navigator>
        //     <Tab.Screen name="Home" component={Home} />
        //     <Tab.Screen name="Tasks" component={Tasks} />
        // </Tab.Navigator>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    );
}

const style = StyleSheet.create({
    icon: {
        width: 24,
        height:24
    }
});

export default React.memo(Routes);
