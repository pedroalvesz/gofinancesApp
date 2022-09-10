import React, {useState} from "react";
import { Modal } from 'react-native'

import { Input } from "../../Components/Forms/Input";
import { TransactionTypeButton } from "../../Components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../Components/Forms/CategorySelectButton"
import { SubmitButton } from "../../Components/Forms/SubmitButton";
import { CategorySelect } from "../CategorySelect";

import {
  Container,
  Header,
  Title,
  Wrapper,
  Forms,
  SelectType,
  FormsFooter,
} from './style'


export function Register() {
  //Criei o Estado que diz qual bottão ta sendo selecionado
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  })

  function handleTransactionTypeSelect(type: string) {
    setTransactionType(type)
  }

  function handleOpenModal () {
    setCategoryModalOpen(true)
  }
  
  function handleCloseModal() {
    setCategoryModalOpen(false)
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
          <CategorySelectButton 
          title="Category"
          onPress={handleOpenModal}
          />

        </Forms>

        <FormsFooter>
          <SubmitButton title="Add"/>
        </FormsFooter>

      </Wrapper>
      
      <Modal visible={categoryModalOpen}>
        <CategorySelect
        category={category}
        setCategory={setCategory}
        handleCloseModal={handleCloseModal}
        />
      </Modal>
    </Container>
  )
}