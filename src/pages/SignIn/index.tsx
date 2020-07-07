import React, { useState } from 'react';
import { useAuth } from "../../contexts/auth";
import {
  Wrapper, Container, Img, InputContainer,
  Input, StatePicker, SignInButton, SignInLabel,
  ForgotPasswordButton, ForgotPasswordLabel, CreateFreeButton, CreateFreeLabel,
  TermsAndConditionLabel, FormContainer, TermsAndConditionContainer
} from './styles';
import { Entypo, AntDesign, Feather, Fontisto } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignIn: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("brazil");
  const [showPassword, setShowPassword] = useState(true);

  const { signIn } = useAuth();

  function handleShowHideInput() {
    setShowPassword(!showPassword);
  }

  function handleSignIn() {
    signIn();
  }

  return (
    <Wrapper>
      <Container>
        <FormContainer>
          <Img source={logo} resizeMode="contain" />
          <InputContainer>
            <Fontisto name="world-o" size={24} color="gray" />
            <StatePicker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={itemValue => setSelectedValue(itemValue)}
            >
              <StatePicker.Item label="United States" value="us" />
              <StatePicker.Item label="Brazil" value="brazil" />
              <StatePicker.Item label="Argentina" value="argentina" />
            </StatePicker>
          </InputContainer>
          <InputContainer>
            <Entypo name="email" size={24} color="gray" />
            <Input placeholder="E-mail" />
          </InputContainer>
          <InputContainer>
            <AntDesign name="lock1" size={24} color="gray" />
            <Input secureTextEntry={showPassword} placeholder="Password" />
            <TouchableOpacity onPress={handleShowHideInput}>
              <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
            </TouchableOpacity>
          </InputContainer>
          <SignInButton onPress={handleSignIn}>
            <SignInLabel>Sign In</SignInLabel>
          </SignInButton>
          <ForgotPasswordButton onPress={handleSignIn}>
            <ForgotPasswordLabel>Forgot Password?</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <CreateFreeButton onPress={handleSignIn}>
            <CreateFreeLabel>Create Free Account</CreateFreeLabel>
          </CreateFreeButton>
        </FormContainer>
        <TermsAndConditionContainer>
          <TermsAndConditionLabel>
            This service is for authorized use only. Use may be monitored recorded and audited.
            Access and use constitutes consent to Terms and Conditions. Privacy Policy and monitoring /recording/ auditing. Unauthorized use is prohibited.</TermsAndConditionLabel>
        </TermsAndConditionContainer>
      </Container>
    </Wrapper>
  );
};

export default SignIn;