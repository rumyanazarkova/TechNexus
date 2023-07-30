import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import FeaturedStars from './FeaturedStars'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useFavoritesContext } from '../context/favorites_context'


const ListView = ({ products }) => {
  const { favorites, addToFavorites, removeFavorites } = useFavoritesContext();
  return <Wrapper>{
    products.map((product) => {
      const { id, image, name, price, description, stars, old_price, shipping } = product;
      const amount = 1;
      const tempImage = [
        { url: image }
      ]
      product['images'] = tempImage;

      return <article key={id}>
        <div>
          <div className='favorites'>
            {favorites.find((item) => item.id === id) ?
              (<AiFillHeart onClick={() => removeFavorites(id)} />) : (
                <AiOutlineHeart onClick={() => addToFavorites(id, amount, product)} />
              )
            }
          </div>
          {shipping && <div className='free-shipping'>Free Shipping</div>}
          <Link to={`/products/${id}`} >
            <img src={image} alt={name}></img>
          </Link>
        </div>
        <div>
          <Link to={`/products/${id}`} >
            <h4>{name}</h4>
          </Link>
          <FeaturedStars stars={stars} />
          <h5 className='price'>{formatPrice(price)}</h5>
          <h5 className='old-price'>{formatPrice(old_price)}</h5>
          <p>{description.substring(0, 150)}...</p>
          <Link to={`/products/${id}`} className='btn'>Details</Link>
        </div>
      </article>
    })
  }</Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

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

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
    position:relative;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .old-price{
    text-decoration: line-through;
    color: var(--clr-grey-5);

  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.7rem;
    padding: 0.25rem 0.7rem;
  }
  .free-shipping{
      background: var( --clr-primary-5);
      color:white;
      z-index:12;
      position:absolute; 
      padding: 8px 12px;
      border-top-right-radius: 10px;
      font-size: 12px;
    }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
