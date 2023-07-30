import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-img.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title='about' />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt='nice desk'></img>
      <article>
        <div className='title'>
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
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  padding-bottom: 100px;
  padding-top:100px;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    background:var(--clr-primary-5);
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
