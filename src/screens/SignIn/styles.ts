import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container =  styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  justify-content: flex-end;
  align-items: center;

  padding: 0px 48px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-top: 40px;
  margin-bottom: 80px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};

  padding-bottom: 68px;
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;

  justify-content: space-between;
`;

export const Footer = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;