import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => { //images firstly is undefined and to esc errors we set it to empty array with empty url (to esc main.ur err)
  const [main, setMain] = useState(images[0]);

  return <Wrapper>
    <img src={main.url} alt='main' className='main'></img>
    <div className='gallery'>{
      images.map((image, index) => {
        return <img src={image.url} alt={image.filename} key={index} onClick={() => setMain(images[index])} className={`${image.url === main.url ? 'active' : null}`} />
      })
    }</div>
  </Wrapper>
}

const Wrapper = styled.section`

  img {
    width:100%; 
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    margin-bottom:2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      width: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      min-height: 15vh;
      min-width: 20vh;
    }
    .gallery {
      img {
        max-height: 10vh;
        max-width:13vw;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 450px;
      width:690px;
      margin-bottom:60px;
    }
    .gallery {
      img {
        height: 80px;
        width:120px;
      }
    }
  }
`

export default ProductImages
