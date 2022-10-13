import styled from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
width: ${RFValue(310)}px;
background-color: ${({theme}) => theme.colors.shape};
border-radius: 5px;

flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 18px 8px;
`;

export const CategoryTitle = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;

color: ${({theme}) => theme.colors.title};
padding-left: 8px;
`;

export const Icon = styled(Feather)`
color: ${({theme}) => theme.colors.text};
font-size: ${RFValue(20)}px;
`;