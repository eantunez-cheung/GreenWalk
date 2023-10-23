import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Menu from './Screen/Menu';
import Test from './Screen/Test';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Menu' component={Menu}
              options={{
                title: 'GreenWalk',
                headerTitleStyle: {
                  fontFamily: "pirulen rg",
                  fontSize: 30
                },
                headerBackTitleVisible: true,
                headerBackTitle: 'log out',
                headerBackTitleStyle: {
                  fontSize: 15,
                  color: "#ffffff",
                  fontWeight: 'bold'
                }
              }} />
              <Stack.Screen name='Test' component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}