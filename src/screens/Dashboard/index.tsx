import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { HighlightCard } from '../../Components/Cards';
import { TransactionCard } from '../../Components/TransactionCard';


import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserImage,
  UserText,
  UserGreeting,
  UserName,
  UserLogout,
  HighlightCards,
  Transactions,
  TransactionsWrapper,
  TransactionsTitle,
  TransactionCards,
 } from './style'



export function Dashboard(){
  const data = [{
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: "Vendas",
      icon: 'dollar-sign',
    },
    date: "13/04/2020",
  },
  {
    type: 'negative',
    title: "Hamburgueria Pizzy",
    amount: "R$ 59,00",
    category: {
      name: "Alimentação",
      icon: 'coffee',
    },
    date: "10/04/2020",
  },
  {
    type: 'negative',
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    category: {
      name: "Casa",
      icon: 'home',
    },
    date: "13/04/2020",
  }];

  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage source={{uri:'https://avatars.githubusercontent.com/u/79289930?v=4'}}/>
            <UserText>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Pedro</UserName>
            </UserText>
          </UserInfo>
          <UserLogout name="power" size ={RFValue(24)}/>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
        type='incomes'
        title='Entradas'
        amount='R$ 17.400,00'
        lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
        type='outcomes'
        title='Saídas'
        amount='R$ 1.259,00'
        lastTransaction='Última saída dia 03 de abril'
        />
        <HighlightCard
        type='total'
        title='Total'
        amount='R$ 16.141,00'
        lastTransaction='01 à 16 de abril'
        />
      </HighlightCards>
      <Transactions>
        <TransactionsWrapper>
          <TransactionsTitle>Listagem</TransactionsTitle>
          <TransactionCards
          data={data}
          renderItem={({item}) => <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: getBottomSpace()}}
          />
        </TransactionsWrapper>
      </Transactions>
    </Container>
  )
}