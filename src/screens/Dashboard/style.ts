import styled from 'styled-components'
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'
import {BorderlessButton} from 'react-native-gesture-handler' 

import { 
  getStatusBarHeight,
  getBottomSpace,
 } from 'react-native-iphone-x-helper';

import {DataListProps} from './index'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;


export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(42)}px;
  padding-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserWrapper = styled.View`
width: 100%;
padding: 0 24px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const UserImage = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.secondary_light};
`;

export const UserText = styled.View`
padding: 0 17px;
`;

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme }) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme }) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.shape};
`;

export const LogoutButton = styled(BorderlessButton)`
  
`;

export const UserLogout = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
`;

// Funcionalidade do Styled Components que permite acessar e customizar as propriedades do componente pelo arquivo de estilo
export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  //Propriedade de listagem que permite alterar os estilos internos da listagem
  contentContainerStyle: {paddingHorizontal: 24}
})`
  position:absolute;
  margin-top: ${getStatusBarHeight() + RFValue(110)}px;
`;

export const Transactions = styled.View`
`;
export const TransactionsWrapper = styled.View`
  margin-top: ${RFValue(64)}px;
  padding: 0px 24px;
`;
export const TransactionsTitle = styled.Text`
  font-family: ${({theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.dark};

  margin-bottom: 16px;
`;
export const TransactionCards = styled(
  FlatList as new() => FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom : getBottomSpace()}
  })`
`;