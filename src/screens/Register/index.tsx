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
import { TransactionTypeButton } from "../../Components/Forms/TransactionTypeButton";
import {CategoryButton} from "../../Components/Forms/CategorySelectButton"
import { SubmitButton } from "../../Components/Forms/SubmitButton";

export function Register() {
  //Criei o Estado que diz qual bottão ta sendo selecionado
  const [transactionType, setTransactionType] =useState('')

  function handleTransactionTypeSelect(type: string) {
    setTransactionType(type)
  }

  return(
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>
      <Wrapper>
        <Forms>
          <Input
          placeholder="Name"
          />
          <Input
          placeholder="Price"
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
          <CategoryButton title="Category"/>
        </Forms>
        <FormsFooter>
          <SubmitButton title="Add"/>
        </FormsFooter>
      </Wrapper>
      
    </Container>
  )
}