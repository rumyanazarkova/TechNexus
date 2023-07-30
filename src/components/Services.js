import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import baner2 from '../assets/baner-dark-2.jpg'

const Services = () => {
  return <Wrapper>
    <div className='section-center'>
     
      <article className='header'>
        <h3>
          Your Trusted Tech Haven
        </h3>
        <p>
        Our love for gadgets and cutting-edge technology led us to create a space 
        where everyone can find their dream devices without breaking the bank.
        </p>
      </article>
      <div className='services-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return <article key={id} className='service'>
            <span className='icon'>{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        })}
      </div>
      </div>
    
  </Wrapper>
}

const Wrapper = styled.section`
margin-top:8rem;
background-image: url(${baner2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h3{color:white;}
  h4 {
    color: var(--clr-grey-1);
  }
  padding: 5rem 0;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: white;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
   background-color: var(--clr-white);
   border:1px solid black;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: 5px 0px 5px 5px rgba(0, 0, 0, 0.1);
    p {
      color: var(--clr-grey-1);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    border:2px solid black;
    background: white;
    color: white;
    background: linear-gradient(40deg,var(--clr-primary-6),var(--clr-primary-3)); 
      border: none;
    svg {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
