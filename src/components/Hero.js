import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-img.jpg'


const Hero = () => {
  return <Wrapper >
    <div className='img-container'>
      <p>Digital Dreams <br />
        Delivered</p>
      <img src={heroImg} alt='hero-image' />
    </div>
    <Link to='/products' className='shop-btn home-btn'>SHOP NOW</Link>
  </Wrapper>
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
gap:1rem;
.img-container{
position: relative;
}
 img{
  width:100%;
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
  left:5rem;
 }
 .shop-btn{
 padding:.7rem 2rem;
 font-size:1.7rem;
}
}

@media (min-width: 1500px){
  p{
  font-size: 4rem;
  left:9rem;
 }
}

`

export default Hero
