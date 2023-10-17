import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return <Wrapper>
    <Link to='/'>Home</Link>
    {product && <Link to='/products'>/Products</Link>}
    /{title}
  </Wrapper>
}

const Wrapper = styled.div`
  color: var(--clr-grey-5);
  font-size: 2rem;
  font-weight: 500;
  padding:1em;
  background:  var(--clr-grey-10);
  a {
    color: var(--clr-grey-3);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-4);
  }
  @media (prefers-color-scheme: dark) {
  background: var(--clr-black);
  color: var(--clr-grey-4);
  a {
    color: var(--clr-white);
    transition: var(--transition);
  }
}
`

export default PageHero
