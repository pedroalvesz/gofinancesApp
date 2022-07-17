import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import theme from '../../../global/styles/theme';


export const Container = styled.View`

`;
export const InputButton = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.text
})`
width: ${RFValue(310)}px;
height: ${RFValue(56)}px;
border-radius: 5px;

font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.title};

background-color: ${({theme}) => theme.colors.shape};
padding: 18px 16px;
margin-bottom: 8px;
`;