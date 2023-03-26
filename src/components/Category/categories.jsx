import React from "react";
import  categories  from "../../data/category-data";

import CategoryItem from "../CategoryItem/categoryItem";
import {Container} from '../Category/categories.styles'


const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
