import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import NavIcons from './NavIcons'
import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  const { myUser } = useUserContext()

  return <SidebarContainer>
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
       <Logo/>
        <button className='close-btn' type='button' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, text, url }) => {
          return <li key={id}>
            <Link to={url} onClick={closeSidebar}>
              {text}
            </Link>
          </li>
        })}
        {myUser &&(
          <li>
            <Link to='/checkout' onClick={closeSidebar}>Checkout </Link>
          </li>
        )}
        <div className='nav-icons'>
        <NavIcons />
        </div>
      </ul>
    </aside>
  </SidebarContainer>
}

const SidebarContainer = styled.div`

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }

  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-black);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .nav-icons{
    display: flex;
    justify-content: center;
    span{
  left:88%;
  bottom:30px;
}
 .icon,
 .auth-btn{
  font-size: 1.4rem;
}
.icon:hover{
color:var(--clr-primary-4);
background: transparent;
}
  }

`

export default Sidebar
