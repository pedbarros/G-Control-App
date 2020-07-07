import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #2248f1;
  flex: 1;
`;

export const Container = styled.ScrollView`
  padding: 15px;
`;

export const Img = styled.Image`
  align-self: center;
  width: 50px;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const EmailInput = styled.TextInput`
  flex: 1;
  padding: 10px;
`; 

export const SignInButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #5574ff;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const SignInLabel = styled.Text`
  color: #fff;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;

export const ForgotPasswordLabel = styled.Text`
  color: #5574ff;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
`;
