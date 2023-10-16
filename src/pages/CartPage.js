import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const {cart} = useCartContext();
  if(cart.length<1){
    return <Wrapper>
      <div className='empty'>
        <h2>Your cart is empty</h2>
        <Link to='/products' className='generic-btn btn'>fill it</Link>
      </div>

    </Wrapper>
  }
  return <main>
    <PageHero title='Cart'/>
    <Wrapper className='page'>
     <CartContent/>
    </Wrapper>
  </main>
}

const Wrapper = styled.main`
padding:2rem;

`

export default CartPage
