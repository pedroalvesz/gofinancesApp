import React, { useCallback, useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HighlightCard } from '../../Components/Cards';
import { TransactionCard, TransactionCardProps } from '../../Components/TransactionCard';

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
  LogoutButton,
  LoadContainer
 } from './style'
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import theme from '../../global/styles/theme';
import { useAuth } from '../../hooks/useAuth';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  income: HighlightProps;
  outcome: HighlightProps;
  total: HighlightProps;
}

export function Dashboard(){
  const [loading, setLoading] = useState(true);
  const [transactionList, setTransactionsList] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

  const {user, signOut} = useAuth()

  function getLastTransactionDate(collection: DataListProps[], type: "income" | "outcome") {

    if(collection.length === 0) return 0

    const lastTransaction = new Date(
      Math.max.apply(Math, collection
      .filter(transaction => transaction.transactionType === type)
      .map(transaction => new Date(transaction.date).getTime())))
  
      return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`;
  }

  async function loadTransationList() {
    setLoading(true)

    const dataKey = `@gofinances:transactions_user=${user.id}`
    const response = await AsyncStorage.getItem(dataKey)
    const transactionList = response ? JSON.parse(response) : []

    let incomeAmount = 0
    let outcomeAmount = 0

    const formattedTransactionList : DataListProps[] = transactionList.map((item: DataListProps) => {
      if (item.transactionType === 'income') {
        incomeAmount += Number(item.amount)
      } else {
        outcomeAmount += Number(item.amount)
      }

      const amount = Number(item.amount)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date));

      return {
        id: item.id,
        name: item.name,
        amount,
        transactionType: item.transactionType,
        category: item.category,
        date,
      }
    });
    
    setTransactionsList(formattedTransactionList)

    const lastIncomeTransaction = getLastTransactionDate(transactionList, "income")
    const lastOutcomeTransaction = getLastTransactionDate(transactionList, "outcome")
    const totalInterval = lastOutcomeTransaction === 0 ? "Ainda não há transações" : `01 a ${lastOutcomeTransaction}`;

    setHighlightData({
      income: {
        amount: incomeAmount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastIncomeTransaction === 0
        ? "Ainda não há transações"
        : `Última entrada dia ${lastIncomeTransaction}`
      },
      outcome: {
        amount: outcomeAmount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastOutcomeTransaction === 0
        ? "Ainda não há transações"
        : `Última saída dia ${lastOutcomeTransaction}`
      },
      total: {
        amount: (incomeAmount - outcomeAmount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: totalInterval
      }
    })

    setLoading(false)
  }

  useEffect(() =>{
    loadTransationList()
  },[])

  useFocusEffect(useCallback(() => {
    loadTransationList()
  },[]))

  return(
    <Container>
      {
        loading
        ?
        <LoadContainer>
          <ActivityIndicator
            color={theme.colors.secondary}
            size="large"
          />
        </LoadContainer>
        :
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <UserImage source={{uri: user.photo}}/>
                <UserText>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>{user.name}</UserName>
                </UserText>
              </UserInfo>
              <LogoutButton onPress={signOut}>
                <UserLogout name="power" size ={RFValue(24)}/>
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
            type='incomes'
            title='Entradas'
            amount={highlightData.income.amount}
            lastTransaction={highlightData.income.lastTransaction}
            />
            <HighlightCard
            type='outcomes'
            title='Saídas'
            amount={highlightData.outcome.amount}
            lastTransaction={highlightData.outcome.lastTransaction}
            />
            <HighlightCard
            type='total'
            title='Total'
            amount={highlightData.total.amount}
            lastTransaction={highlightData.total.lastTransaction}
            />
          </HighlightCards>
          <Transactions>
            <TransactionsWrapper>
              <TransactionsTitle>Listing</TransactionsTitle>
              <TransactionCards
              data={transactionList}
              keyExtractor={item => item.id}
              renderItem={({item}) => <TransactionCard data={item}/>}
              />
            </TransactionsWrapper>
          </Transactions>
        </>
      }
    </Container>
  )
}