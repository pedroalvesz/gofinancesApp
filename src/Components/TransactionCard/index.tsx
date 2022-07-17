import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  Date,
  CategoryText,
} from './style'

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Data {
  data: TransactionCardProps;
}

export function TransactionCard({data} : Data) {
  return(
    //se o data.type for negative então 
    <Container>
      <Title>
        {data.title}
      </Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} size={20}/>
          <CategoryText>{data.category.name}</CategoryText>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}