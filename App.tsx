import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, View,Text } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <NavigationContainer>
        <View><Text>Ok google</Text></View>
      </NavigationContainer>
    </>
  );
}
export default App;