import React from "react";
import {
  Container,
  ButtonText,
} from './style'

interface SubmitButtonProps {
  title: string;
  onPress: () => void;
}

export function SubmitButton({title, onPress} : SubmitButtonProps) {
  return(
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}