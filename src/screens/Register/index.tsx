import React from "react";
import {
  Container,
  Header,
  Title,
  Wrapper,
  Forms,
  SelectType,
  FormsFooter,
} from './style'

import { Input } from "../../Components/Forms/Input";
import { SubmitButton } from "../../Components/Forms/SubmitButton";
import { TransactionType } from "../../Components/Forms/TransactionType";

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
          <SelectType>
            <TransactionType 
            title="Income"
            type="income"
            />
            <TransactionType
            title="Outcome"
            type="outcome"
            />
          </SelectType> 
        </Forms>
        <FormsFooter>
          <SubmitButton title="Enviar"/>
        </FormsFooter>
      </Wrapper>
      
    </Container>
  )
}