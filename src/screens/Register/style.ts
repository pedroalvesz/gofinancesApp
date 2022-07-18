import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components'



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
flex: 1;
padding: 24px;
align-items: center;
justify-content: space-between;
`;

export const SelectType = styled.View`
flex-direction: row;
justify-content: space-between;
padding-top: 8px;
`;

export const Forms = styled.View`
`;

export const FormsFooter = styled.View`
`;