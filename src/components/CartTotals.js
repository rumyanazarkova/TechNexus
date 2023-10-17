import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
 
  return <Wrapper>
  
      <article>
        <p className='subtotal'>Subtotal: <span>{formatPrice(total_amount)}</span></p>
        <p>Shipping fee: <span>{formatPrice(shipping_fee)}</span></p>
        <hr />
        <h5>Order total: <span>{formatPrice(total_amount + shipping_fee)}</span> </h5>
      </article>
      {myUser ? <Link to='/checkout' className='generic-btn btn'>proceed to checkout</Link> :
      <button className='generic-btn btn' onClick={loginWithRedirect}>Login</button>
      }
   
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:1rem;
  article {
    display: grid;
    gap:1rem;
    border: 1px solid var(--clr-grey-8);
    border-radius: 5px;
    padding: 1rem 2rem;
    font-size:1.1rem;
    color:var(--clr-grey-1);
  }
  h5{
    font-size: 1.5rem;
    font-weight: 500;
  }
.btn{
  display: flex;
  justify-content: center;
  min-width:100%;
  font-weight: 600;
  font-size:1.3rem

}
@media (min-width: 1000px) {
  width: fit-content;
}
@media (prefers-color-scheme: dark) {
  article{
  color:var(--clr-white);
  }
}

`

export default CartTotals
