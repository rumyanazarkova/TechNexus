import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import FeaturedStars from './FeaturedStars'
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useFavoritesContext } from '../context/favorites_context'


const FeaturedItem = ({ image, name, price, id, stars, shipping, old_price, colors }) => {

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

    <div className='container'>
      <Link to={`/products/${id}`} >
        <img src={image} alt={name} />
      </Link>
    </div>
    <footer>
      <div className='name-stars'>
        <Link to={`/products/${id}`} >
          <h5 >{name}</h5>
        </Link>
        <FeaturedStars stars={stars} />
      </div>
      <div className='grid-items'>
        <div className='price-items'>
          <p>{formatPrice(price)}</p>
          <p className='old-price'>{formatPrice(old_price)}</p>
        </div>
        <Link to={`/products/${id}`} className='cart-btn'>
          <IoCartOutline />
        </Link>
      </div>
    </footer>
  </Wrapper>
}

const Wrapper = styled.article`
  padding-left:0.5rem;
  padding-right:0.5rem;

  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    background:white;
  }
  img {
    width: 100%;
    height:100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .favorites{
    z-index:9999;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
      color: var(--clr-primary-3);
      &:hover {
        color: var(--clr-primary-8);
      }
    }
  
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  footer h5{
    margin-bottom: 10px;
    font-weight: 400; 
  }
  footer p {
    margin-bottom: 0px;
    font-size:1.3rem;
    font-weight: 600;
  }
  footer p {
    color: var(--clr-red-dark);
    letter-spacing: var(--spacing); 
  }
  .name-stars{
    height:5rem;
    @media(max-width:1000px ){
      margin-bottom:1rem;
    }
  }
  .grid-items{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    height: 3.5rem; /* Set a fixed height for the grid-items */
    @media(max-width:1000px ){
      grid-template-columns: 1fr;
      gap:1rem;
    }
  }
  .price-items{
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap:10px;
  }
  .old-price{
    text-decoration: line-through;
    color: var(--clr-grey-6);
    font-weight:400;
  }
  .cart-btn{
    background:var(--clr-primary-3);
    color: white;
    width: 3rem;
    height: 3rem;
    border:none;
    border-radius:7px;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background: var(--clr-primary-8);
      }
  }
  .free-shipping{
      background: var( --clr-primary-5);
      color:white;
      z-index:12;
      position:absolute;
      left: 0px; 
      padding: 8px 12px;
      margin-top:1rem;
      border-top-right-radius: 10px;
      font-size: 12px;
    }
 
    @media (max-width:991px){
   .free-shipping{
    margin-top:1rem;
   }
    }
   
    @media (min-width: 992px) {
      .free-shipping{
      background: var( --clr-primary-5);
      color:white;
      z-index:12;
      position:absolute;
      margin-top:9.5rem;
      left: 0px; 
      padding: 8px 12px;
      border-top-right-radius: 10px;
      font-size: 12px;
    }
    }
`
export default FeaturedItem
