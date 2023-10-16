import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({amount, increase,decrease}) => {
  return <Wrapper>
    <button className='amount-btn' onClick={decrease}><FaMinus/></button>
    <h2 className='amount'>{amount}</h2>
    <button  className='amount-btn' onClick={increase}><FaPlus/></button>
     </Wrapper>
}

const Wrapper = styled.div`
display: flex;
gap:1rem;
align-items: center;
 .amount{
  font-size: 1.7rem;
} 
.amount-btn{
background: transparent;
border: none;
font-size: 1rem;
}
`

export default AmountButtons
