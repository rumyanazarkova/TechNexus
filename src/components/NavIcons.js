import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { useFavoritesContext } from '../context/favorites_context'

const NavIcons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, logout, myUser } = useUserContext()
  const { total_items: total_fav_items } = useFavoritesContext()

  return <Wrapper>

    <Link to="/cart" className='icon' onClick={closeSidebar}>
      Cart <FaShoppingCart />
      <span className='icon-value'>{total_items}</span>
    </Link>
   

    <Link to="/favorites" className='icon' onClick={closeSidebar}>
      Favorites <FaHeart />
        <span className='icon-value'>{total_fav_items}</span>
      
    </Link>

    {myUser ?
      <button className='auth-btn' onClick={() => {
        clearCart()
        logout({ returnTo: window.location.origin })
      }}>
        Logout
        <FaUserMinus />
      </button> :
      <button className='auth-btn' onClick={loginWithRedirect}>
        Login
        <FaUserPlus />
      </button>
    }
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  gap:1.7rem;
  font-size: 1.2rem;
.auth-btn{
display: flex;
align-items: center;
gap: 0.3rem;
border: none;
background: transparent;
color:inherit;
font-size: inherit;
letter-spacing:.1ch;
}
.auth-btn:hover{
  color:var(--clr-primary-4);
}
.icon{
  position: relative;
  display: flex;
  align-items: center;
  color: var(--clr-black);
}
span{
  position: absolute;
  display: flex;
  color: var(--clr-white);
  background-color: var(--clr-primary-1);
  border-radius: 50%;
  font-size:.7rem;
  font-weight: 500;
  padding:0.3rem .6rem;
  left:95%;
  bottom:10px
}
 
`
export default NavIcons
