import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
    <h5>
      &copy; {new Date().getFullYear()}
      <span>TechNexus</span>
    </h5>
    <h5>All Rights Reserved</h5>
  </Wrapper>
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  background: var(--clr-black);
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  span {
    color: var(--clr-primary-2);
    margin:0 1ch;
  }
  h5 {
    color: var(--clr-white);
  }
  @media (prefers-color-scheme: dark) {
  background: var(--clr-white);
  h5 {
    color: var(--clr-black);
  }
}

`

export default Footer
