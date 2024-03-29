import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  justify-content: space-between;

  padding: 13px 24px;

  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};

  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.Title};
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`
export const Amount = styled.Text`
  ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.medium};
`