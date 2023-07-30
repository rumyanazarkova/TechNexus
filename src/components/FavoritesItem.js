import React, { useEffect } from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaTrash } from 'react-icons/fa'
import { useFavoritesContext } from '../context/favorites_context'
import { useCartContext } from '../context/cart_context'
import FeaturedStars from './FeaturedStars'
import { Link, useNavigate } from 'react-router-dom'



const FavoritesItem = ({ id, name, amount, images, price, stars, old_price, shipping, colors }) => {
  const navigate = useNavigate();
  const { removeFavorites } = useFavoritesContext();
  const { addToCart, getShippingFee } = useCartContext();

  //fix the cart image nesting 
  const tempImage = images
  const productImage = [
    { url: tempImage }
  ]
  const product = {
    id,
    name,
    amount,
    images: productImage,
    price,
    stars,
    old_price,
    shipping
  }
 
  return <Wrapper>
    <div className='title'>
     <Link to={`/products/${id}`}>
      <img src={images} alt={name} ></img>
      </Link>
      <div>
      <Link to={`/products/${id}`}>
        <h5 className='name' >{name}</h5>
        </Link>
        <FeaturedStars stars={stars} />
        <h5 className='price-small'>{formatPrice(price)}</h5>
      </div>
    </div>
    <div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <h5 className='old-price'>{formatPrice(old_price)}</h5>
    </div>
    <div>
      {shipping ? (<h5 className='name'>Free Shipping</h5>) :
        (<h5 className='name'>Shipping: $5.85</h5>)
      }
    </div>
    <Link to='/cart' className='btn' onClick={() => {
      addToCart(id, colors, amount, product)
      getShippingFee(id)
    }}>add to cart</Link>
    <button type='button' className='remove-btn' onClick={() => removeFavorites(id)}>
      <FaTrash />
    </button>
  </Wrapper>
}

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-grey-2);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
    &:hover {
        background: var(--clr-red-light);
        color:white;
      }
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-red-dark);
      font-weight: 400;
    }
    .old-price{
    text-decoration: line-through;
    color: var(--clr-grey-6);
    font-weight:400;
  }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default FavoritesItem
