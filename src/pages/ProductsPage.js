import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

const ProductsPage = () => {
  return <Wrapper>
    <PageHero title='Products' />
    
      <div className='filter-products'>
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>

    </Wrapper>
 
}

const Wrapper = styled.main`
 display: grid;
 gap:1rem;
 .filter-products{
  display: grid;
  gap:1rem
 }
 @media (min-width:700px ){
  .filter-products{
  display: flex;
  gap:1rem
 }
 }
  
`

export default ProductsPage
