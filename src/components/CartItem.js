import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const CartItem = ({ id, image, name, color, old_price, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }
  return <Wrapper>

    <div className='item'>
      <div className='img-container'>
        <img src={image} alt={name}></img>
      </div>

      <div className='name-color'>
        <h5 className='name'>{name}</h5>
        <span> Color: </span>
        <button className='color-btn' style={{ background: color }}></button>

      </div>
    </div>

    <div className='other-info'>
      <div className='price-container'>
        <h5 className='new-price'>{formatPrice(price)}</h5>
        <h5 className='old-price'>{formatPrice(old_price)}</h5>
      </div>

      <div className='amount-btns'>
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      </div>
      <h5 className='subtotal'>
        {formatPrice(price * amount)}
      </h5>

      <div className='btn-container'>
        <button className='remove-btn' onClick={() => removeItem(id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.article`
   .subtotal {
    display: none;
  } 
  border-top: 2px solid var(--clr-grey-6); 
  display: flex;
  flex-direction: column;
  padding:1rem 0;
  gap:1rem;
 .item{
  display: flex;
  gap:1rem;
  align-items: center;
  max-width: 350px;
 }
.img-container{
 max-width:40%;
 padding:.5rem;
}
 img{
  width: 100%;
 }
 .color-btn{
  height: 1rem;
  width: 1rem;
  border: 1px var(--clr-grey-7);
  border-radius: 50%;
 }
 .other-info{
  display:flex;
  justify-content: space-between;
  padding: 0 1rem;
 }
 .price-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
 }
 .new-price{
    color:var(--clr-red-dark);
  }
  .remove-btn{
    height: fit-content;
  }
   @media(min-width: 700px)  {
  flex-direction: row;
  gap:5rem;
  .other-info{
    display:flex;
    flex:1;
    align-items:center;
    justify-content:space-between;
  }
  } 
  @media(min-width: 1200px)  {
    gap:10em; 
    .other-info{
    display:flex;
    flex:1;
    align-items:center;
    justify-content:space-around;
  }
  } 

`

export default CartItem
