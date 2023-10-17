import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {

  const { id, stock, colors } = product;
  const { addToCart, getShippingFee } = useCartContext()
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })

  }

  return <Wrapper>
    <div className='colors'>
      <span>Colors:</span>
      <div className='colors-btns-container'>{
        colors.map((color, index) => {
          return <button key={index} style={{ background: color }} className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`} onClick={() => setMainColor(color)}>
          </button>
        })
      }</div>
    </div>
 
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Link to='/cart' className='generic-btn' onClick={() => {
        addToCart(id, mainColor, amount, product)
        getShippingFee(id)
      }}>add to cart</Link>
   
  </Wrapper>
}

const Wrapper = styled.section`
 display: flex;
  flex-direction: column;
  gap: 0.5rem;
.colors{
  display: flex;
  gap:1rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: var( --clr-grey-3);
  align-items: center;
}
.colors-btns-container{
  display: flex;
  gap: 0.5rem;
}
.color-btn{
  width: 1.2rem;
  height: 1.2rem;
  border-radius:50%;
  border: 1px solid var(--clr-grey-6);
}
.active{
  border: 4px solid var(--clr-white);
  outline: 2px solid var(--clr-black);
}
.generic-btn{
  max-width:fit-content;
}
@media (prefers-color-scheme: dark) {
  .colors{
  color: var( --clr-white);
}
.active{
  border: 3px solid var(--clr-black);
  outline: 2px solid var(--clr-white);
}
}
`
export default AddToCart
