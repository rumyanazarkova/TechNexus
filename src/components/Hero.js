import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-img.jpg'


const Hero = () => {
  return <Wrapper >
    <div className='img-container'>
      <p>Digital Dreams <br />
        Delivered</p>
   
    </div>
    <Link to='/products' className='shop-btn home-btn'>Shop Now</Link>
  </Wrapper>
}

const Wrapper = styled.section`

display: flex;
flex-direction: column;
gap:1rem;
.img-container{
position: relative;
background-image: url(${heroImg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;

 min-height:500px;
}
p{
  display:none;
}
.shop-btn{
  padding:.5rem 1rem;
}

 @media (min-width: 1000px){
  p{
  display:inline;  
  position: absolute;
  color:white;
  font-size: 2.5rem;
  top:2rem;
  left:2rem;
 }
}

 @media (min-width: 1500px){
  p{
  left:10em;
 }
}

`

export default Hero
