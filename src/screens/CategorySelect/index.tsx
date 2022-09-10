import React from "react";
import { FlatList } from "react-native";
import { categories } from "../../../utils/categories";

import { SubmitButton } from "../../Components/Forms/SubmitButton"

import { 
Container,
Header,
Title,
CategoryContainer,
Icon,
Name,
Separator,
Footer,
} from "./style";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  handleCloseModal: () => void;
}

export function CategorySelect({ category, setCategory, handleCloseModal} : Props) {
  return(
    <Container>
      <Header>
        <Title>Category</Title>
      </Header>

      <FlatList
      data={categories}
      keyExtractor={(item) => item.key}
      renderItem={({item}) => (
        <CategoryContainer>
          <Icon name={item.icon}/>
          <Name>{item.name}</Name>
        </CategoryContainer>
      )}
      ItemSeparatorComponent={() => <Separator/>}
      />

      <Footer>
        <SubmitButton 
        title="Select"
        onPress={handleCloseModal}
        />
      </Footer>
      
    </Container>
  )
}
