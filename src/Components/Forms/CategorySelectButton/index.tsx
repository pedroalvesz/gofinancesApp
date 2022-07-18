import React from "react";
import {
  Container,
  CategoryTitle,
  Icon,
} from './style';

interface CategoryButtonProps {
  title: string
}

export function CategoryButton({title}: CategoryButtonProps) {
  return(
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      <Icon name="chevron-down"/>
    </Container>
  )
}