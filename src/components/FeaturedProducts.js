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
    <div className='title'>
      <h2>featured products</h2>
      </div>
      <div className='underline'></div>
      <div className='section-center image'>
        {featured.slice(0, 3).map((product) => {
          
          return <article className='product' key={product.name}>
            <div className='top-products'>Top product</div>
            {product.shipping && <div className='free-shipping'>Free Shipping</div>}
            <FeaturedItem key={product.id} {...product} />
          </article>
        })}
      </div>
   
    <Link to='/products' className='btn'>all products</Link>
    
  </Wrapper>
}

const Wrapper = styled.section`
  min-height:40rem;
  background: var(--clr-grey-10);
  padding-top:3rem;
  padding-bottom:3.5rem;

  .image {
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    
    .product{
      position:relative;
      background-color:white;
      border-radius: 10px;
      padding: 10px;
      text-align:left;
    }
    
    img {  
      height: 100%;
      width: 100%;  
      z-index: 1; 
    }

    .top-products{
      background: var( --clr-primary-5);
      color:white;
      z-index:10;
      position:absolute;
      left: 0px; 
      top:190px;
      padding: 8px 12px;
      border-top-right-radius: 10px;
      font-size: 12px;
      @media (max-width: 1200px){
        top: 2.5rem;
    }
    }
    
    .free-shipping{
      background: var( --clr-primary-3);
      color:white;
      z-index:12;
      position:absolute;
      left: 0px; 
      top:230px;
      padding: 8px 12px;
      border-top-right-radius: 10px;
      font-size: 12px;
      @media (max-width: 1200px){
        top:5rem;
    }
  }
}
  .btn {
      display: block;
      width: 9rem;
      margin:0 auto ;
      text-align: center;
      color: #fff;
      background: linear-gradient(70deg,var(--clr-primary-6),var(--clr-primary-3)); 
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background: var(--clr-primary-8);
      }
   
    }
   
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }


`

export default FeaturedProducts
