import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper>
    <span>Tech</span>Nexus
    </Wrapper>
  )
}

const Wrapper=styled.h3`
margin-bottom:0;
font-weight:700;
font-size: 2rem;
color: var( --clr-primary-2);
span{
    color: var( --clr-primary-1);
}

`
export default Logo

