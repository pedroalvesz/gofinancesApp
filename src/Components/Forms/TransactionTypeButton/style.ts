import styled, { css } from 'styled-components'
import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';


interface TransactionProps {
  type: 'income' | 'outcome';
}

interface ContainerProps {
  type: 'income' | 'outcome';
  isActive: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
width: ${RFValue(150)}px;

border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
border-color: rgba(150, 156, 178, 0.2);
border-radius: 5px;

${({isActive, type}) => isActive  && type === 'income' && css`
background-color: ${({theme}) => theme.colors.success_light};
`};

${({isActive, type}) => isActive  && type === 'outcome' && css`
background-color: ${({theme}) => theme.colors.attention_light};
`};


flex-direction: row;
align-items: center;
justify-content: center;
padding: 18px 20px;
`;

export const Icon = styled(Feather)<TransactionProps>`
color: ${({theme, type}) => type === "income" ? 
theme.colors.success : theme.colors.attention};

padding-right: 12px;
`;

export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.title}
`;