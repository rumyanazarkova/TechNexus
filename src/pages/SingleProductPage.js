import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const { name, price, description, stock, stars, reviews, id: sku, company, images, old_price, shipping } = product;

  return <Wrapper>
    <PageHero title={name} product />

    <section className='product'>

      <div className='button-image'>
        <Link to='/products'>
          <button className='generic-btn'>back to products</button>
        </Link>

        <div className='images'>
          <ProductImages images={images} />
        </div>
      </div>

      <div className='content'>
        <h2>{name}</h2>
        <Stars stars={stars} reviews={reviews} />

        <div className='price'>
          <h5>{formatPrice(price)}</h5>
          <h5 className='old-price'>{formatPrice(old_price)}</h5>
        </div>

        <p className='desc'>{description}</p>

        <div className='item-small-info'>
          <p>
            <span>Available: </span>
            {stock > 0 ? 'In stock' : 'Out of stock'}
          </p>
          <p>
            <span>SKU: </span>
            {sku}
          </p>
          <p>
            <span>Brand: </span>
            {company}
          </p>
          <p>
            {shipping && <span className='shipping'>Free Shipping</span>}
          </p>
          <hr />
        </div>

        <div className='add-to-cart'>
          {stock > 0 && <AddToCart product={product} />}
        </div>
      </div>

    </section>

  </Wrapper>
}

const Wrapper = styled.main`
display: flex;
flex-direction: column;
.product{
  display:grid;
  padding:2rem;
}

.button-image{
  display: flex;
  flex-direction: column;
  gap:1.5rem;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:.7rem;
}

.price{
  font-size: 1.5rem;
}
.item-small-info span{
  font-size: 1.2rem;
  font-weight: 700;
  color: var( --clr-grey-3);
}
.item-small-info{
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 1.1rem;
 
}
.item-small-info .shipping{
  color: var(--clr-red-dark);
}
@media (min-width: 1200px){
padding:0 5rem;
   .product{
  grid-template-columns: 1fr 1fr;
  gap:2rem;
} 
.generic-btn{
  font-size: 1.2rem;
}
.content{
  gap:1rem;
}
p{
  font-size:1.2rem;
}
}
@media (prefers-color-scheme: dark) {
  .item-small-info span{
  color: var( --clr-white);
}
}

`

export default SingleProductPage
