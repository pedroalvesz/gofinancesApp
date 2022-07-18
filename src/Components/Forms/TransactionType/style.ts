import styled, { css } from 'styled-components'
import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface TransactionTypeProps {
  type: 'income' | 'outcome';
}
export const Container = styled(TouchableOpacity)`
width: ${RFValue(150)}px;

background-color: ${({theme}) => theme.colors.background};
border-radius: 5px;
border: 1.5px solid rgba(150, 156, 178, 0.2);

flex-direction: row;
align-items: center;

padding: 18px 36px;
`;

export const Icon = styled(Feather)<TransactionTypeProps>`
color: ${({theme, type}) => type === "income" ? 
theme.colors.success : theme.colors.attention};

padding-right: 12px;
`;

export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.title}
`;