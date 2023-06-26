import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;

  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;

  padding: 0 16px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;