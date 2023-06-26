import styled from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
width: ${RFValue(310)}px;
height: ${RFValue(56)}px;

background-color: ${({theme}) => theme.colors.secondary};
border-radius: 5px;

align-items: center;
justify-content: center;

`;
export const ButtonText = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.shape}
`;