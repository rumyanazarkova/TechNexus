import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaTrash } from 'react-icons/fa'
import { useFavoritesContext } from '../context/favorites_context'
import { useCartContext } from '../context/cart_context'
import FeaturedStars from './FeaturedStars'
import { Link, useNavigate } from 'react-router-dom'



const FavoritesItem = ({ id, name, amount, images, price, stars, old_price, shipping, colors }) => {
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
  
     <Link to={`/products/${id}`}>
      <img src={images} alt={name} ></img>
      </Link>
    
    <div className='name-stars'>
      <Link to={`/products/${id}`}>
        <h5 className='name' >{name}</h5>
        </Link>
        <FeaturedStars stars={stars} />
        </div>

    <div className='price price-container'>
      <h5>{formatPrice(price)}</h5>
      <h5 className='old-price'>{formatPrice(old_price)}</h5>
    </div>

    
      {shipping ? (<h5 className='free shipping'>Free Shipping</h5>) :
        (<h5 className='shipping'>Shipping: $5.85</h5>)
      }
    

<div className='btns'>
    <Link to='/cart' className='generic-btn' onClick={() => {
      addToCart(id, colors, amount, product)
      getShippingFee(id)
    }}>add to cart</Link>
    <button type='button' className='remove-btn' onClick={() => removeFavorites(id)}>
      <FaTrash />
    </button>
    </div>
  </Wrapper>
}

const Wrapper = styled.article`
display: grid;
gap:.5rem;
img{
  width:100%;
}
.name-stars{
display:flex;
justify-content: center;
gap:1rem;
font-size: 1.1rem;
}
.price-container{
  display: flex;
  justify-content: center;
}
.shipping{
  font-size: 1rem;
}
.free{
  color:var(--clr-red-dark);
}
.btns{
  display: flex;
  justify-content: center;
  gap:1rem;
}

`

export default FavoritesItem
