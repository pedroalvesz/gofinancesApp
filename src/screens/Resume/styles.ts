import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import { TransactionCardProps } from '../../Components/TransactionCard';

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
width: 100%;
height: ${RFValue(113)}px;

align-items: center;
justify-content: flex-end;
background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(18)}px;

color: ${({theme}) => theme.colors.shape};
padding-bottom: 20px;
`;

export const Wrapper = styled.View`
  margin-top: ${RFValue(40)}px;
  padding: 0 24px;
`;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const CategoryCardList = styled(
  FlatList as new() => FlatList<TransactionCardProps>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom : getBottomSpace()},
})``;

export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MonthButton = styled(BorderlessButton)`
`;

export const MonthButtonIcon = styled(Feather)`
`;

export const Month = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;
