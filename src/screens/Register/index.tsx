import React, {useEffect, useState} from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useForm } from 'react-hook-form'
import uuid from 'react-native-uuid'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

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
import { useAuth } from "../../hooks/useAuth";

const schema = Yup.object().shape({
  name: Yup.string().required("Please insert a name"),
  amount: Yup.number().typeError("Please insert a valid number").positive("Amount must be positive").required("Please insert an amount"),
})

interface FormData {
  name: string;
  amount: number;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const {user} = useAuth()

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  })

  const dataKey = `@gofinances:transactions_user=${user.id}`

  const navigation = useNavigation()

  const {control, handleSubmit, formState: { errors}} = useForm({
    resolver: yupResolver(schema)
  })

  async function handleRegister(form: FormData) {
    if(!transactionType)
      return Alert.alert('Select a transaction type')

    if(category.key === 'category')
      return Alert.alert('Select your category')

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    }

    try {
      const data = await AsyncStorage.getItem(dataKey)
      const storedData = data ? JSON.parse(data) : []
      const currentData = [...storedData, newTransaction]

      await AsyncStorage.setItem(dataKey, JSON.stringify(currentData))

      setTransactionType('')
      setCategory({
        key: 'category',
        name: 'Category',
      })

      navigation.navigate("Listagem");
      
    } catch (error) {
      Alert.alert("Não foi possível salvar")
    }
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

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey)
    }

    loadData()
  },[])

  return(
    //Quando clicar em qualquer lugar da tela, fecha o teclado que está aberto.
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
            />
            <InputForm
            name="amount"
            control={control}
            placeholder="Price"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  )
}