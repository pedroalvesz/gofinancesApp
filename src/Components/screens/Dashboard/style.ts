import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;


export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(42)}px;
  align-items: center;
  justify-content: center;
`;

export const UserWrapper = styled.View`
width: 100%;
padding: 0 24px;
flex-direction: row;
justify-content: space-between;
align-items: center
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

export const UserLogout = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
`; 