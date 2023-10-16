import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      text, category, company, color, min_price, max_price, price, shipping
    },
    updateFilters,
    clearFilters,
    all_products
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')


  return <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        {/*search input*/}
        <div className='form-control'>
          <input type='text' name='text' placeholder='search' className='search-input' value={text} onChange={updateFilters} />
        </div>
        {/*categories*/}
        <div className='form-control'>
          <h5>category</h5>
          <div className='category-container'>{
            categories.map((c, index) => {
              return <button key={index}
                onClick={updateFilters}
                name='category'
                type='button'
                className={`${category === c.toLowerCase() ? 'active' : null}`}
              >{c}</button>
            })
          }</div>
        </div>
        {/*companies*/}
        <div className='form-control'>
          <h5>company</h5>
          <select name='company' value={company}
            onChange={updateFilters}
            className='company'>
            {companies.map((c, index) => {
              return <option key={index} value={c}>{c}</option>
            })}
          </select>
        </div>
        {/*colors*/}
        <div className='form-control'>
          <h5>colors</h5>
          <div className='colors'>
            {
              colors.map((c, index) => {
                if (c === 'all') {
                  return <button name='color'
                    key={index}
                    onClick={updateFilters}
                    data-color='all'
                    className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}
                  >
                    all
                  </button>
                }
                return <button key={index}
                  name='color'
                  style={{ background: c }}
                  className={`${color === c ? 'color-btn color-active' : 'color-btn'}`}
                  data-color={c}
                  onClick={updateFilters}
                >
                 
                </button>
              })
            }
          </div>
        </div>
        {/*price*/}
        <div className='form-control price-container'>
          <h5>price</h5>
          <p>{formatPrice(price)}</p>
          <input type='range'
            name='price'
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          ></input>
        </div>
        {/*shipping*/}
        <div className='form-control shipping'>
          <label htmlFor='shipping'>free shipping</label>
          <input type='checkbox'
            name='shipping'
            id='shipping'
            onChange={updateFilters}
            checked={shipping}
          ></input>
        </div>
      </form>
      <button type='button' className='clear-btn' onClick={clearFilters}>
        {''}
        clear filters
      </button>
   
  </Wrapper>
}

const Wrapper = styled.section`
padding:0 1rem;
form{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-control{
   display: flex;
   flex-direction: column; 
   gap: 0.5rem;
}
h5,
label,
.price{
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 500;
}
.search-input,
.company{
  width: fit-content;
  padding:.4rem;
  border:none;
  background: var(--clr-grey-10);
  letter-spacing: .1ch;
  text-transform: capitalize;
}
.category-container{
  display:flex;
  gap: .5rem;
}
.category-container button, .all-btn{
font-size: 1rem;
text-transform: capitalize;
border:none;
background: transparent;
color: var(--clr-grey-4);
}
.category-container .active, .active{
  color: var(--clr-primary-1);
 font-weight: 600;
 text-decoration: underline;
}
.colors{
  display: flex;
  gap:.4rem;
  max-width: 40%;
  flex-wrap: wrap;
}
.color-btn{
width: 1.2rem;
height: 1.2rem;
border-radius: 50%;
border: 1px solid var(--clr-grey-6);
}
.color-active{
  border: 4px solid var(--clr-white);
  outline: 2px solid var(--clr-black);
}
.shipping{
  display: inline;
}
.shipping input{
 margin-left: .5rem;
 width: 15px;
 height:15px;
}
.price-container{
  font-weight:600;
  font-size: 1.2rem;
  gap: 0.2rem;
}
.price-container input{
    max-width: 50%;
}
.clear-btn{
  font-size: 1rem;
  text-transform:capitalize;
  color: white;
  background: var(--clr-red-dark);
  border:none;
  padding: .5rem 1rem;
  margin-top:1rem;
 
}
@media (min-width: 700px) {
  display:flex;
  flex-direction: column;
  max-width: 250px;

  .category-container{
  display:flex;
  flex-direction: column;
  align-items: start;
  gap: .6rem;
}
.colors,
.price input
{
  min-width: 100%;
}
.clear-btn{
 max-width: 150px;
}
}
`

export default Filters
