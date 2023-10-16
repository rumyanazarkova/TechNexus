import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link, useNavigate } from 'react-router-dom'
import FeaturedStars from './FeaturedStars'
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useFavoritesContext } from '../context/favorites_context'


const FeaturedItem = ({ image, name, price, id, stars, shipping, old_price, colors }) => {
const navigate=useNavigate()
  const { favorites, addToFavorites, removeFavorites } = useFavoritesContext();

  const tempImage = [
    { url: image }
  ]

  const product = { images: tempImage, name, price, stars, old_price, shipping, colors };

  const amount = 1;
  return <Wrapper>
    <div className='img-container'>
      <div className='favorites'>
        {favorites.find((item) => item.id === id) ?
          (<AiFillHeart className='fav-icon' onClick={() => removeFavorites(id)} />) : (
            <AiOutlineHeart className='fav-icon' onClick={() => addToFavorites(id, amount, product)} />
          )
        }
      </div>

      <div className='label top-products'>Top product</div>
      {shipping && <div className='label free-shipping'>Free Shipping</div>}

      <Link to={`/products/${id}`} >
        <img src={image} alt={name} />
      </Link>
    </div>

    <div className='info'>
  
        <Link to={`/products/${id}`} >
          <h5 >{name}</h5>
        </Link>

        <FeaturedStars stars={stars} />
     
        <div className='price'>
          <p>{formatPrice(price)}</p>
          <p className='old-price'>{formatPrice(old_price)}</p>
        </div>

        <button onClick={()=>navigate(`/products/${id}`)} className='cart-btn'>
          <IoCartOutline />
        </button>
      </div>
    
  </Wrapper>
}

const Wrapper = styled.article`
display: flex;
flex-direction: column;
gap:1rem;
img{
  width: 100%;
  cursor: pointer;
}
.img-container{
  position: relative;
}
.favorites{
  position: absolute;
  top:1.5rem;
  left:1.5rem;
}
.fav-icon{
  font-size: 2.5rem;
  background: transparent;
  cursor: pointer;
  color: var(--clr-primary-1);
}
.fav-icon:hover
{
  color: var(--clr-primary-4);
}

.top-products{
top:5rem;
background: var(--clr-primary-2);
}
.free-shipping{
top: 8.3rem;
}

`
export default FeaturedItem
