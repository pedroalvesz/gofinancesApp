import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './style';

interface Props {
  //o tipo dele pode ser ou incomes ou outcomes ou total;
  type: 'incomes'|'outcomes' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  incomes: "arrow-up-circle",
  outcomes: "arrow-down-circle",
  total: "dollar-sign",
}

export function HighlightCard({type, title, amount, lastTransaction} : Props) {
  return(
    //Ele procura a variavel icon e procura nela uma propriedade que seja igual ao nome do type do cartão que eu to passando
      <Container type={type}>
        <Header>
          <Title type={type}>
            {title}
          </Title>
          <Icon
          type={type}
          name={icon[type]}
          size={RFValue(40)}
          />
        </Header>
        <Footer>
          <Amount type={type}>
            {amount}
          </Amount>
          <LastTransaction type={type}>
          {lastTransaction}
          </LastTransaction>
        </Footer>
      </Container>
  )
}