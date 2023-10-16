import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({products}) => {
  return <Wrapper>
    <div className='products-container'>
      {products.map((product)=>{
 return <Product key={product.id} {...product}></Product>
      })}
    </div>
    </Wrapper>
}

const Wrapper = styled.main`
  .products-container {
    display: grid;
    gap:2rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1300px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
