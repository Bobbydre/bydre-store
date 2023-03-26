
import React from 'react';
import popularProducts from '../../data/products-data';
import Product from '../Product/product'
import  {Container}  from './products.styles';

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) =>(
            <Product item ={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products
