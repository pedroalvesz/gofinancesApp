import React from "react";
import {
  Container,
  CategoryTitle,
  Icon,
} from './style';

interface CategoryButtonProps {
  title: string
  onPress: () => void;
}

export function CategorySelectButton({title, onPress}: CategoryButtonProps) {
  return(
    <Container onPress={onPress}>
      <CategoryTitle>{title}</CategoryTitle>
      <Icon name="chevron-down"/>
    </Container>
  )
}