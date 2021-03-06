import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #5636d3;
  padding-top: ${getStatusBarHeight() + 30}px;
  height: ${getStatusBarHeight() + 80}px;
`;

export const Content = styled.View`
  padding: 0 23px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.Image`
  max-width: 150px;
`;

export const DateText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: #fff;
  opacity: 0.6;
`;

export const Complement = styled.View`
  height: 150px;
  background-color: #5636d3;
  z-index: 1;
`;
