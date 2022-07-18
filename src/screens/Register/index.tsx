import React from "react";
import {
  Container,
  Header,
  Title,
  Wrapper,
  Forms,
  FormsFooter,
} from './style'

import { Input } from "../../Components/Forms/Input";
import { SubmitButton } from "../../Components/Forms/SubmitButton";

export function Register() {
  return(
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Wrapper>
        <Forms>
          <Input
          placeholder="Nome"
          />
          <Input
          placeholder="Preço"
          />
        </Forms>
        <FormsFooter>
          <SubmitButton title="Enviar"/>
        </FormsFooter>
      </Wrapper>
      
    </Container>
  )
}