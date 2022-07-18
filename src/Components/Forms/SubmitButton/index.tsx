import React from "react";
import {
  Container,
  ButtonText,
} from './style'

interface SubmitButtonProps {
  title: string;
}

export function SubmitButton({title} : SubmitButtonProps) {
  return(
    <Container>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}