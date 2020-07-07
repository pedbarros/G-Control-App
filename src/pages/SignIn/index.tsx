import React, { useContext }from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {

  const { signed } = useContext(AuthContext);

  console.log(signed);

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignIn;