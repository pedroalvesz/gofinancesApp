import React from "react";
import {
  Container,
  InputButton,
} from './style'

//quando der erro em alguma propriedade nativa do componente
import { TextInputProps } from "react-native";

type Props = TextInputProps

export function Input({...rest} : Props) {
  return(
    <Container>
      <InputButton {...rest}/>
    </Container>
    
  )
}