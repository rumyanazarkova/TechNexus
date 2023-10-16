import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import baner2 from '../assets/baner-dark-2.jpg'

const Services = () => {
  return <Wrapper>
   
     
      <div className='header'>
        <h3>
          Your Trusted Tech Haven
        </h3>
        <p>
        Our love for gadgets and cutting-edge technology led us to create a space 
        where everyone can find their dream devices without breaking the bank.
        </p>
      </div>

      <div className='services-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return <article key={id} className='service'>
            <span className='icon'>{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        })}
      </div>
      
    
  </Wrapper>
}

const Wrapper = styled.section`
padding: 3rem;
display: grid;
gap:2rem;
background-image: url(${baner2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

 .header{
  display: flex;
  flex-direction: column;
  gap:.5rem;
  color:white;
 }
 h3{
  font-size: 1.6rem;
 }
 p{
  font-size: 1.1rem;
 }
 .services-center{
 display: grid;
 gap:2rem;
 }
 .service{
 display :flex ;
 flex-wrap: wrap;
 flex-direction: column;
 background: white;
 text-align: center;
 padding:2rem 5rem;
 place-items: center;
 border-radius: 10px;
 gap:1rem;
 }
 .icon{
  display: flex;
  max-width:fit-content;
  color:white;
  background: linear-gradient(to right, var(--clr-primary-3), var(--clr-primary-1));
  padding: 1rem;
  font-size: 3rem;
  border-radius: 50%;
  text-align: center;
 }
 @media (min-width:1300px ) {
  .services-center{
 grid-template-columns:repeat(3,1fr );
 gap:3rem;
 }
 .service{
 padding:3rem 5rem;
 min-height: 400px;

 }
 }
`
export default Services
