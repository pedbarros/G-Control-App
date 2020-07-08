import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #2248f1;
  flex: 1;
`;

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))`
  padding: 15px;
`;

export const UserNameText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const SignOutButton = styled.TouchableOpacity`
  background: #fff;
  margin-top: 5px;
  padding: 10px;
  border-radius: 10px;
`;

export const SignOutLabel = styled.Text`
  color: #2248f1;
  font-size: 16px;
`;
