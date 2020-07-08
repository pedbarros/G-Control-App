import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <>
    <StatusBar backgroundColor="#2248f1" barStyle="light-content" />
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Log In',
          headerStyle: {
            backgroundColor: '#2248f1',
          },
          headerTintColor: '#fff',
        }}
      />
    </AuthStack.Navigator>
  </>
);

export default AuthRoutes;
