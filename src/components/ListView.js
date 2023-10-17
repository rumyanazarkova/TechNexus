import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link,useNavigate } from 'react-router-dom'
import FeaturedStars from './FeaturedStars'
import { useFavoritesContext } from '../context/favorites_context'



const ListView = ({ products }) => {
  const navigate=useNavigate()
  const { addToFavorites} = useFavoritesContext();
  return <Wrapper>{
    products.map((product) => {
      const { id, image, name, price, description, stars, old_price, shipping } = product;
      const amount = 1;
      const tempImage = [
        { url: image }
      ]
      product['images'] = tempImage;

      return <article key={id}>
       <div className='img-container'>
          {shipping && <div className='label free-shipping'>Free Shipping</div>}
          <Link to={`/products/${id}`} >
            <img src={image} alt={name}></img>
          </Link>
          </div>

        <div className='product-info'>
          <Link to={`/products/${id}`} >
            <h3>{name}</h3>
          </Link>
          <FeaturedStars stars={stars} />
          <div className='price'>
          <h5>{formatPrice(price)}</h5>
          <h5 className='old-price'>{formatPrice(old_price)}</h5>
          </div>
          <p>{description.substring(0, 150)}...</p>
        </div>
        <div className='btns'>
        <button onClick={()=>navigate(`/products/${id}`)}>Details</button>
        <button onClick={() => addToFavorites(id, amount, product)}>Add to favorites</button>
        </div>
      </article>
    })
  }</Wrapper>
}

const Wrapper = styled.main`
  display: grid;
  gap:2rem;
  padding:1rem 2rem;
  h3{
    font-weight: 500;
  }
  img{
    width: 70%;
  }
  article{
    display: grid;
    position: relative;
  }
  .btns{
    display: flex;
    gap:1rem;
  }
  button{
    border: none;
    background: var(--clr-primary-1);
    color:white;
    padding:.5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    white-space: nowrap;
  }
  button:hover {
  background: var(--clr-primary-4);
}
.free-shipping{
  top:3rem;
  left:0;
}
.product-info{
  display: flex;
  flex-direction: column;
  gap:.4rem;
  margin-bottom:.4rem;
}
@media (min-width: 1000px){
  gap:4rem;
  article{
   display:flex; 
   gap:2rem;
   justify-content: center;
   align-items: center;
  }
  img{
    width: 100%;
  }
  .img-container{
   max-width:600px
  }
  h3{
    font-size:1.3rem
  }
  .btns{
    display: flex;
    flex-direction: column;
    gap:1rem;
  }
  button{
  padding:.6rem 1rem;
  }
}
@media (prefers-color-scheme: dark) {
  h3{
    color:var(--clr-white)
  }
}
`

export default ListView
