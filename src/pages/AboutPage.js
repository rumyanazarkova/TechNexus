import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-img.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title='About' />
    <Wrapper>
      <img src={aboutImg} alt='nice desk'></img>

      <div className='text'>
        <h2>Our Journey:<br />
          From Friends to Trusted Tech Gurus</h2>
        <div className='underline'></div>
        <p>It all began in a small garage where we, a group of passionate tech enthusiasts, gathered to explore modern gadgets.
          With a shared love for cutting-edge technology, we spent countless hours
          exchanging ideas for the latest innovations.
          As our knowledge grew, so did our desire to share our expertise with the world. We realized that the thrill of discovering new tech wasn't just a hobby-
          it was a calling to create a space where everyone could find their dream devices and unleash the potential of digital dreams.
          Today, we proudly stand as professionals, connecting our valued customers with the world of technology and turning digital dreams into reality.
          We grew into a bustling hub of inspiration, discovery, and unending curiosity.</p>
      </div>

    </Wrapper>
  </main>
}

const Wrapper = styled.section`
display: grid;
 padding: 4rem 2rem;
 gap:1rem;
 img{
  width: 100%;
 }
 .text{
  display: grid;
  gap:1rem;
 }
 h2{
  font-size:1.7rem;
line-height:1.2;
 }
.underline{
  width: 100px;
  height: .3rem;
  background: var(--clr-primary-1);
 border-radius:7px;
}
p{
  font-size: 1.1rem;
}
@media (min-width: 1000px) {
 grid-template-columns: 1fr 1fr;
 gap: 3rem;
 place-items: center;
 padding:2rem;

}

`
export default AboutPage
