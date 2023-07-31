import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return <Wrapper className='section section-center'>
    <CartColumns />
    {
      cart.map((item) => { 
        return <CartItem key={item.id} {...item} />
      })
    }
    <hr />
    <div className='link-container'>
      <Link to='/products' className='link-btn'>
        continue shopping
      </Link>
      <button type='button' className='link-btn clear-btn' onClick={clearCart}>
        clear cart
      </button>
    </div>
    <CartTotals />
  </Wrapper>
}
const Wrapper = styled.section`

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
export default CartContent
