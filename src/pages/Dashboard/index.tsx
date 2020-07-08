import React from "react";
import { Wrapper, Container, UserNameText, SignOutButton, SignOutLabel } from "./styles";
import { useAuth } from "../../contexts/auth";

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Wrapper>
      <Container>
        <UserNameText>Seja bem vindo, {user?.name}!</UserNameText>
        <SignOutButton onPress={handleSignOut}>
          <SignOutLabel>Sair do aplicativo</SignOutLabel>
        </SignOutButton>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;