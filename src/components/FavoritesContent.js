import React from 'react'
import styled from 'styled-components'
import { useFavoritesContext } from '../context/favorites_context'
import { Link } from 'react-router-dom'
import FavoritesItem from './FavoritesItem'


const FavoritesContent = () => {
  const { favorites, clearFavorites } = useFavoritesContext();

  return <Wrapper className='section section-center'>
     <div className='content'>
      <h5>Favorites</h5>
      <span></span>
    </div>
    <hr/>
    {
      favorites.map((item) => {
        return <FavoritesItem key={item.id} {...item} />
      })
    }
    <hr />
    <div className='link-container'>
      <Link to='/products' className='link-btn'>
        continue shopping
      </Link>
      <button type='button' className='link-btn clear-btn' onClick={clearFavorites}>
        clear favorites
      </button>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
 display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-3);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    &:hover {
        background: var(--clr-primary-8);
      }
  }
  .clear-btn {
    background: var(--clr-black);
    &:hover {
        background: var(--clr-red-light);
        color:white;
      }
  }
`
export default FavoritesContent
