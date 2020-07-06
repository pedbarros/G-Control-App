import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import AuthContext from './src/contexts/auth';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <NavigationContainer>
        <AuthContext.Provider value={{ signed: false }}>
          <Routes />
        </AuthContext.Provider>
      </NavigationContainer>
    </>
  );
}
export default App;