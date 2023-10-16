import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
   
      <h2>Join our newsletter and get 20% off</h2>
    
        <p>
          Stay ahead: discover exciting deals and new innovations in Our latest newsletter!
        </p>
        <form className='contact-form' action='https://formspree.io/f/maygyryg' method="POST">
          <input type='email' className='form-input' placeholder='enter email' name='_replyto' />
          <button type='submit' className='submit-btn'>subscribe</button>
        </form>
     
  
  </Wrapper>
}
const Wrapper = styled.section`
margin-left:0;
padding:3rem;
display: flex;
flex-direction: column;
gap:.5rem;
p{
  font-size: 1.1rem;
  font-weight: 500;
}
.form-input{
 padding:.5rem 1rem;
} 
.submit-btn{
  padding:.5rem 1rem;
  color: white;
  border:1px solid var(--clr-primary-1);
  background: var(--clr-primary-1);
  text-transform:capitalize;
}
.submit-btn:hover{
  border:1px solid var(--clr-primary-4);
  background: var(--clr-primary-4);
}
 
`

export default Contact
