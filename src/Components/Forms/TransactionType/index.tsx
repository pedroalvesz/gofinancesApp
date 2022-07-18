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
}

const icon = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
}
export function TransactionType({title, type, ...rest} : TransactionTypeProps) {
  return(
    <Container {...rest}>
      <Icon 
      name={icon[type]}
      type={type}
      size="24"
      />
      <Title>{title}</Title>
    </Container>
  )
}