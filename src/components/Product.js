import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import FeaturedStars from './FeaturedStars'
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useFavoritesContext } from '../context/favorites_context'

const Product = ({ image, name, price, id, stars, shipping, old_price, colors }) => {

  const { favorites, addToFavorites, removeFavorites } = useFavoritesContext();

  const tempImage = [
    { url: image }
  ]

  const product = { images: tempImage, name, price, stars, old_price, shipping, colors };

  const amount = 1;
  return <Wrapper>
    <div className='favorites'>
      {favorites.find((item) => item.id === id) ?
        (<AiFillHeart onClick={() => removeFavorites(id)} />) : (
          <AiOutlineHeart onClick={() => addToFavorites(id, amount, product)} />
        )
      }
    </div>

    {shipping && <div className='free-shipping label'>Free Shipping</div>}
    <div className='img-container'>
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} />
      </Link>
    </div>

<div className='info-btn-container'>
    <div className='info'>
      <div className='name-stars'>
        <Link to={`/products/${id}`}>
          <h5 >{name}</h5>
        </Link>
        <FeaturedStars stars={stars} />
      </div>

      <div className='price'>
        <p>{formatPrice(price)}</p>
        <p className='old-price'>{formatPrice(old_price)}</p>
      </div>
    </div>

    <Link to={`/products/${id}`} className='cart-btn'>
      <IoCartOutline />
    </Link>
    </div>
  </Wrapper>
}

const Wrapper = styled.article`
position: relative;
padding: 1rem;
img{
  width: 100%;
}

.free-shipping {
  top: 6rem;
}
.info-btn-container{
display: flex;
justify-content: space-between;
gap:1rem;
}


`
export default Product
