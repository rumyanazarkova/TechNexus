import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-img.jpg'


const Hero = () => {
  return <Wrapper >
    <section className='section-center'>
      <div className='main-img'>
      <p>Digital Dreams <br/>
        Delivered</p>
      </div>
      <article className='content'>
        <Link to='/products' className='btn hero-btn'>shop now</Link>
      </article>
    </section>
  </Wrapper>
}

const Wrapper = styled.section`
margin-bottom:3rem;
  .main-img {
    min-height: 25rem;
    background-image: url(${heroImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom:2rem;
    margin-top:2rem;
  }
  p{
    color:white;
    letter-spacing:var(--spacing);
    font-size: 1.5rem;
    padding-left:17rem;
    padding-top: 2rem;
    @media(max-width: 1200px){
    padding-left:3rem;
  
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; 
    .hero-btn {
    
      padding: 10px 20px;
      font-size: 17px;
      color: #fff;
      background: linear-gradient(50deg,var(--clr-primary-6),var(--clr-primary-3)); 
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background: var(--clr-primary-8);
      }
    }
  }

  @media (min-width: 992px) {
    align-items: center;
   
    grid-template-columns: 1fr 1fr;   
  }
  
`

export default Hero
