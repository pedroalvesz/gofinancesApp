import React from "react";
import {
  Container,
  Header,
  Title,
  Wrapper,
} from './style'

import { Input } from "../../Components/Forms/Input";

export function Register() {
  return(
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Wrapper>
      <Input
      placeholder="Nome"
       />
       <Input
      placeholder="Preço"
       />
      </Wrapper>
    </Container>
  )
}