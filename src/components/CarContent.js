import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return <Wrapper>
  {/*   <CartColumns /> */}
    {
      cart.map((item) => { 
        return <CartItem key={item.id} {...item} />
      })
    }
    <hr />
    <div className='link-container'>
      <Link to='/products' className='generic-btn'>
        continue shopping
      </Link>
      <button type='button' className='remove-btn' onClick={clearCart}>
        clear cart
      </button>
    </div>

    <div className='cart-totals'>
    <CartTotals />
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .cart-totals{
  display:flex;
  justify-content: center;
}
 @media (min-width: 1000px) {
  .cart-totals{
  display: flex;
  justify-content: flex-end;
} 
 } 

 
`
export default CartContent
