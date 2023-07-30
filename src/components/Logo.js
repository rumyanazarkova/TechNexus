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
font-weight:600;
color: var( --clr-primary-5);
span{
    color: var( --clr-primary-3);
}

`
export default Logo

