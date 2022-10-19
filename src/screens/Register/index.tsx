import React, {useState} from "react";
import { Modal } from 'react-native'
import { useForm } from 'react-hook-form'

import { InputForm } from "../../Components/Forms/InputForm";
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

interface FormData {
  name: string;
  amount: number;
}

export function Register() {
  //Criei o Estado que diz qual bottão ta sendo selecionado
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  })

  const {control, handleSubmit} = useForm()

  function handleRegister(FormData) {
    
  }

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
          <InputForm
          name="name"
          control={control}
          placeholder="Name"
          />
          <InputForm
          name="amount"
          control={control}
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
          title={category.name}
          onPress={handleOpenModal}
          />

        </Forms>

        <FormsFooter>
          <SubmitButton
            title="Add"
            onPress={handleSubmit(handleRegister)}
          />
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