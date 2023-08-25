/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

function Screen_A(){
  return(
    <View>
      <Text>
        Screen_A
      </Text>
    </View>
  )
}
function App(){
  return(
    <NavigatorContainer>
      <Stack.Navigator>
        <Stack.Screen
        name ='Screen_A'
        component={Screen_A}
        />
      </Stack.Navigator>

    </NavigatorContainer>
  )
}

export default App;