import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #2248f1;
  flex: 1;
`;

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  padding: 15px;
`;

export const FormContainer = styled.View`
`;

export const Img = styled.Image`
  align-self: center;
  width: 50px;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 10px;
`;

export const StatePicker = styled.Picker`
  flex: 1;
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
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
  flex: 1;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;

export const ForgotPasswordLabel = styled.Text`
  color: #5574ff;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
  flex: 1;
`;

export const CreateFreeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border-radius: 15px;
`;

export const CreateFreeLabel = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding: 15px;
  flex: 1;
  margin-bottom: auto;
`;

export const TermsAndConditionContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const TermsAndConditionLabel = styled.Text`
  color: #fff;
`;
