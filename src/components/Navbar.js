import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import NavIcons from './NavIcons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return <NavContainer>

    <div className='nav-header'>
      <Link to='/'><Logo /></Link>
      <button className='nav-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
    </div>

    <ul className='nav-links'>
      {links.map((link) => {
        const { id, text, url } = link
        return <li key={id}><Link to={url}>{text}</Link></li>
      })}
      {
        myUser && <li>
          <Link to='/checkout'>checkout</Link>
        </li>
      }
    </ul>

    <div className='nav-icons'>
      <NavIcons />
    </div>
  </NavContainer>
}

const NavContainer = styled.nav`
 padding:1rem 2rem;
 .nav-links,
 .nav-icons{
  display: none;
 }
 .nav-header{
  display: flex;
 justify-content: space-between;
  align-items: center;
 }
 .nav-toggle{
  display: flex;
  height: fit-content;
  border:none;
  background: transparent;
  font-size: 2rem;
  color: var(--clr-primary-1);
 }
 .nav-toggle:hover{
  color: var(--clr-primary-4);
 }
 @media (min-width: 1000px) {
  display: flex;
justify-content:space-between;
  align-items:center;
  .nav-toggle{
    display:none;
  }
  .nav-links{
  display: flex;
  gap:1rem;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  padding-left: 5rem;
 }
 a{
  color:var(--clr-grey-3);
 }
 a:hover{
  color: var(--clr-primary-4);
 }
 .nav-icons{
  display: flex;
 }
 }
 @media (min-width: 1300px)   {
  .nav-links{
   padding-left:7rem; 
  font-size: 1.5rem;
  
 }
 }
 @media (prefers-color-scheme: dark) {
  background: var(--clr-white);
}

`

export default Nav
