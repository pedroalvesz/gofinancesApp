import React from "react";

import { 
Container,
Header,
Title,
} from "./style";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: string;
  setCategory: (category: Category) => void;
  closeCategory: () => void;
}

export function CategorySelect({ category, setCategory, closeCategory} : Props) {
  return(
    <Container>
      <Header>
        <Title>Category</Title>
      </Header>
      
    </Container>
  )
}
