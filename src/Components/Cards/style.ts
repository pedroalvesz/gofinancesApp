//componente do styled components que ajuda a estilizar dentro da interpolação com o js
import styled, { css } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface CardProps {
  type: 'incomes'|'outcomes' | 'total';
}

//adiciono as propriedades do CardProps as propriedades nativas do styled components
export const Container = styled.View<CardProps>`
background-color: ${({theme, type}) =>
type === 'total' ? theme.colors.secondary : theme.colors.shape};
width: ${RFValue(300)}px;
border-radius: 5px;

padding: 20px 20px;
padding-bottom: ${RFValue(42)}px;
margin-right: 16px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content:space-between;
margin-bottom: ${RFValue(35)}px;
`;

export const Title = styled.Text<CardProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme, type}) =>
  type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<CardProps>`
  padding-top: 3px;

  ${({type}) => type === 'incomes' && css`
  color: ${({theme}) => theme.colors.success}
  `};

  ${({type}) => type === 'outcomes' && css`
  color: ${({theme}) => theme.colors.attention}
  `};

  ${({type}) => type === 'total' && css`
  color: ${({theme}) => theme.colors.shape}
  `};
  //se o type for o que eu estou indicando, então aplique tal css
`;

export const Footer = styled.View` 
`;

export const Amount = styled.Text`
font-family: ${({theme}) => theme.fonts.medium};
font-size: ${RFValue(32)}px;
color: ${({theme, type}) =>
  type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const LastTransaction = styled.Text` 
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme, type}) =>
  type === 'total' ? theme.colors.shape : theme.colors.title};
`;