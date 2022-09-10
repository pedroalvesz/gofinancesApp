import styled from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'



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


export const CategoryContainer = styled.View`
width: 100%;
padding: ${RFValue(15)}px;
flex-direction: row;
align-items: center;
`;

export const Icon = styled(Feather)`
margin-right: 12px;
font-size: ${RFValue(20)}px;
`;

export const Name = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
width: 100%;
height: 1px;
background-color: ${({theme}) => theme.colors.text};
`;

export const Footer = styled.View`
padding: 24px;
`;