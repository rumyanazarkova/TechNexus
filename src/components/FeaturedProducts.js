import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import FeaturedItem from './FeaturedItem'


const FeaturedProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext();

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return <Wrapper >
    <h2>featured products</h2>

    <div className='products-container'>
      {featured.slice(0, 3).map((product) => {

        return <FeaturedItem key={product.id} {...product} />

      })}
    </div>

    <Link to='/products' className='home-btn products-btn'>All Products</Link>
  </Wrapper>
}

const Wrapper = styled.section`
 margin: 2rem auto;
 padding:2rem;
background: var(--clr-grey-10);
display: flex;
gap:2rem;
flex-direction: column;
h2{
  font-size: 2.5rem;
  text-transform:capitalize;
}
.products-container{
  display: flex;
  flex-direction: column;
  gap:2rem;
}
.products-btn{
  padding: 0.5rem 1.5rem;
}
@media (min-width: 800px) {
.products-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:1rem;
}
}
@media (min-width: 1300px) {
  padding:2rem 5rem;
.products-container{
  grid-template-columns: repeat(3,1fr);
}
}

`

export default FeaturedProducts
