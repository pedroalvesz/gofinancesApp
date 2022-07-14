import styled from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

interface TransactionsProps {
  type: string;
}

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 18px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TransactionsProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({theme, type}) => 
  type === 'positive' ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
margin-top: 19px;

flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const Category = styled.View`
flex-direction: row;
align-items:center;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text};
`;

export const CategoryText = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.text};
padding-left: 17px;
`;

export const Date = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.text};
`;