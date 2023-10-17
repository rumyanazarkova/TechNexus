import React from 'react'
import styled from 'styled-components'
import { useFavoritesContext } from '../context/favorites_context'
import { Link } from 'react-router-dom'
import FavoritesItem from './FavoritesItem'


const FavoritesContent = () => {
  const { favorites, clearFavorites } = useFavoritesContext();

  return <Wrapper>
      <h5 className='heading'>Your Favorites</h5>
    <hr/>
    <div className='fav-items-container'>
    {
      favorites.map((item) => {
        return <FavoritesItem key={item.id} {...item} />
      })
    }
    </div>
    <hr />
    <div className='btns-container'>
      <Link to='/products' className='generic-btn'>
        continue shopping
      </Link>
      <button type='button' className='remove-btn' onClick={clearFavorites}>
        Clear Favorites
      </button>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
padding: 1rem 2rem;
display: grid;
text-align:center;
gap:1rem;
.heading{
  font-size: 2rem;
  font-weight:700;
}
.fav-items-container{
  display: grid;
  gap:2rem;
}
  .btns-container {
    display: flex;
    justify-content: space-between;
    margin-top:1rem;

  }
  @media(min-width:800px){
    .fav-items-container{
 grid-template-columns:1fr 1fr;
} 
  }
  @media(min-width:1200px){
    .fav-items-container{
 grid-template-columns:1fr 1fr 1fr;
} 
  }
  

  
`
export default FavoritesContent
