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
import { categories } from "../../../utils/categories";

export interface TransactionCardProps {
  transactionType : 'income' | 'outcome';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Data {
  data: TransactionCardProps;
}

export function TransactionCard({data} : Data) {
  // pega a primeira posição e renomeia para category  
  const [category] = categories.filter(item => item.key === data.category);

  return(
    //se o data.type for negative então 
    <Container>
      <Title>
        {data.name}
      </Title>
      <Amount type={data.transactionType}>
        {data.transactionType === 'outcome' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon} size={20}/>
          <CategoryText>{category.name}</CategoryText>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}