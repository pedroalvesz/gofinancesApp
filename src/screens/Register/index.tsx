import React, {useState} from "react";
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
import { TransactionTypeButton } from "../../Components/Forms/TransactionTypeButton";

export function Register() {
  //Criei o Estado que diz qual bottão ta sendo selecionado
  const [transactionType, setTransactionType] =useState('')

  function handleTransactionTypeSelect(type: string) {
    setTransactionType(type)
  }

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
            <TransactionTypeButton 
            title="Income"
            type="income"
            onPress={() => handleTransactionTypeSelect('income')}
            isActive={transactionType === 'income'}
            />
            <TransactionTypeButton
            title="Outcome"
            type="outcome"
            onPress={() => handleTransactionTypeSelect('outcome')}
            isActive={transactionType === 'outcome'}
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