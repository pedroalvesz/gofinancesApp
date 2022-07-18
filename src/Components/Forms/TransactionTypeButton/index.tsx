import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Icon,
  Title,
} from './style'

interface TransactionTypeProps extends TouchableOpacityProps{
  type: 'income' | 'outcome';
  title: string;
  isActive: boolean;
}

const icon = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
}
export function TransactionTypeButton({title, type, isActive, ...rest} : TransactionTypeProps) {
  return(
    <Container 
    isActive={isActive}
    type={type}
    {...rest}
    >
      <Icon 
      name={icon[type]}
      type={type}
      size={24}
      />
      <Title>{title}</Title>
    </Container>
  )
}