
import React from 'react';
import 'react-native-gesture-handler';
import SignupScreen from './src/components/SignupScreen';
import SigninScreen from './src/components/SigninScreen';
import AccountScreen from './src/components/AccountScreen';
import TrackListScreen from './src/components/TrackListScreen';
import TrackCreateScreen from './src/components/TrackCreateScreen';
import TrackDetailScreen from './src/components/TrackDetailScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as AuthProvider } from './src/context/AuthContext';


const Stack = createStackNavigator();

function Tracks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
  );
}
const StackTwo = createStackNavigator();  
const loginflow = () => {
  return (
    <StackTwo.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <StackTwo.Screen name="SignIn" component={SigninScreen} />
      <StackTwo.Screen name="SignUp" component={SignupScreen} />
    </StackTwo.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const mainflow = () => {
  return (

    <Tab.Navigator>
      <Tab.Screen name="trackListFlow" component={Tracks } />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

const AuthNavigator = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigator.Navigator  screenOptions={{ headerShown: false }} >
          <AuthNavigator.Screen name="loginflow" component={loginflow} />
          <AuthNavigator.Screen name="mainflow" component={mainflow} />
        </AuthNavigator.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
