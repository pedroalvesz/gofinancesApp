import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native'
import { VictoryPie } from 'victory-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addMonths, subMonths, format} from 'date-fns'

import {
  Container,
  Header,
  Title,
  Wrapper,
  CategoryCardList,
  ChartContainer,
  MonthSelect,
  MonthButton,
  MonthButtonIcon,
  Month,
} from './styles'

import { CategoryCard } from '../../Components/CategoryCard';
import { categories } from '../../../utils/categories';
import { LoadContainer } from '../Dashboard/style';
import theme from '../../global/styles/theme';
import { useFocusEffect } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '../../hooks/useAuth';

interface TransactionCardProps {
  transactionType : 'income' | 'outcome';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  name: string,
  key: string,
  color: string
  amountFormatted: string,
  amount: number,
  percent: string,
}

export function Resume() {
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>()
  const {user} = useAuth()

  function handleDateSelected(action: "next" | "previous") {
    if(action === "next") {
      setSelectedDate(addMonths(selectedDate, 1))
    }else {
      setSelectedDate(subMonths(selectedDate, 1))
    }
  }

  async function loadResumeInfo() {
    setLoading(true)

    const dataKey = `@gofinances:transactions_user=${user.id}`
    const response = await AsyncStorage.getItem(dataKey)
    const formattedResponse = response ? JSON.parse(response) : []

    const categoryList: CategoryData[] = []

    const outcomeTransactionList = formattedResponse
    .filter((transaction: TransactionCardProps) =>
    transaction.transactionType === "outcome" &&
    new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
    new Date(transaction.date).getFullYear() === selectedDate.getFullYear()
    )

    const outcomeTotal = outcomeTransactionList.reduce((acumullator: number, outcomeTransaction: TransactionCardProps) => {
      return acumullator += Number(outcomeTransaction.amount)
    }, 0)

    categories.forEach(category => {
      let amount = 0

      outcomeTransactionList.forEach((transaction: TransactionCardProps) => {
        if (transaction.category === category.key) {
          amount += Number(transaction.amount)
        }
      })

      if (amount > 0) {
        const amountFormatted = amount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })

        const percent = `${(amount / outcomeTotal * 100).toFixed(0)}%`

        categoryList.push({
          name: category.name,
          key: category.key,
          color: category.color,
          amountFormatted: amountFormatted,
          percent,
          amount
        })
      }
    })

    setTotalByCategory(categoryList)
    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadResumeInfo()
  },[selectedDate]))

  return (
    <Container>
      <Header>
      <Title>Category Resume</Title>
      </Header>
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
          <Wrapper>
            <MonthSelect>
              <MonthButton onPress={() => handleDateSelected("previous")}>
                <MonthButtonIcon
                name="chevron-left"
                size={24}
                />
              </MonthButton>

              <Month>
                {format(selectedDate, "MMMM, yyyy")}
              </Month>
              <MonthButton onPress={() => handleDateSelected("next")}>
                <MonthButtonIcon
                name="chevron-right"
                size={24}
                />
              </MonthButton>
            </MonthSelect>

            <ChartContainer>
              <VictoryPie
                data={totalByCategory}
                x="percent"
                y="amount"
                colorScale={totalByCategory.map(category => category.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: "bold",
                    fill: theme.colors.shape,
                  }
                }}
                labelRadius={60}
              />
            </ChartContainer>

            <CategoryCardList
              data={totalByCategory}
              keyExtractor={item => item.key}
              renderItem={({item}) =>
              <CategoryCard
              title={item.name}
              amount={item.amountFormatted}
              color={item.color}
              key={item.key}
              />
              }
            />
          </Wrapper>
        }
  </Container>
  );
}