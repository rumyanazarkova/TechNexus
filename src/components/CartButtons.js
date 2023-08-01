import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { useFavoritesContext } from '../context/favorites_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, logout, myUser } = useUserContext()
  const { total_items: total_fav_items } = useFavoritesContext()

  return <Wrapper className='cart-btn-wrapper'>

    <Link to="/cart" className='cart-btn' onClick={closeSidebar}>
      Cart
      <span className='cart-container'>
        <FaShoppingCart />
        <span className='cart-value'>{total_items}</span>
      </span>
    </Link>
    <Link to="/favorites" className='cart-btn' onClick={closeSidebar}>
      Favorites
      <span className='cart-container'>
        <FaHeart />
        <span className='cart-value'>{total_fav_items}</span>
      </span>
    </Link>
    {myUser ?
      <button type='button' className='auth-btn' onClick={() => {
        clearCart()
        logout({ returnTo: window.location.origin })
      }}>
        Logout
        <FaUserMinus />
      </button> :
      <button type='button' className='auth-btn' onClick={loginWithRedirect}>
        Login
        <FaUserPlus />
      </button>
    }
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 300px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.3rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    
    align-items: center;
    padding-right:25px;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 1px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-3);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
