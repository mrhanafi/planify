/* tslint:disable */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import Onboarding from './src/screens/auth/Onboarding';
import { createStackNavigator } from '@react-navigation/stack';
// import Signin from '/src/screens/auth/Signin';
// import Signup from '/src/screens/auth/Signup';
// import Routes from './Routes';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import store from './src/store';


const Stack = createStackNavigator();

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
          <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
