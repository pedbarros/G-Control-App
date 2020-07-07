import React from 'react';
import { useAuth } from "../../contexts/auth";
import { Wrapper, Container, Img, InputContainer, 
         EmailInput, SignInButton, SignInLabel,
         ForgotPasswordButton, ForgotPasswordLabel } from './styles';
import { Entypo, AntDesign } from '@expo/vector-icons';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {

  const { signIn, user } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <Wrapper>
      <Container>
        <Img source={logo} resizeMode="contain" />
        <InputContainer>
          <Entypo name="email" size={24} color="gray" />
          <EmailInput placeholder="E-mail" />
        </InputContainer>
        <InputContainer>
          <AntDesign name="lock1" size={24} color="gray" />
          <EmailInput placeholder="Password" />
        </InputContainer>
        <SignInButton onPress={handleSignIn}>
          <SignInLabel>Sign In</SignInLabel>
        </SignInButton>
        <ForgotPasswordButton onPress={handleSignIn}>
          <ForgotPasswordLabel>Forgot Password?</ForgotPasswordLabel>
        </ForgotPasswordButton>
        
      </Container>
    </Wrapper>
  );
};

export default SignIn;