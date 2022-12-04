/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import ProductList from '../components/ProductList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { mobile, tablet } from '../responsive'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Products() {
  const location = useLocation()
  const category = location.pathname.split('/')[2]

  const [size, setSize] = useState('Newborn')
  const [price, setPrice] = useState('asc')

  const handleSize = (event) => {
    setSize(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(event.target.value)
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='size-sort'>Size</InputLabel>
            <Select
              labelId='size-sort'
              id='size-sort'
              value={size}
              label='Size'
              onChange={handleSize}
            >
              <MenuItem value='Newborn'>Newborn</MenuItem>
              <MenuItem value='3 months'>3 Months</MenuItem>
              <MenuItem value='6 months'>6 Months</MenuItem>
              <MenuItem value='9 months'>9 Months</MenuItem>
              <MenuItem value='12 months'>12 Months</MenuItem>
            </Select>
          </FormControl>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='price-sort'>Price</InputLabel>
            <Select
              labelId='price-sort'
              id='price-sort'
              value={price}
              label='Price'
              onChange={handlePrice}
            >
              <MenuItem value='asc'>Price (asc)</MenuItem>
              <MenuItem value='desc'>Price (desc)</MenuItem>
            </Select>
          </FormControl>
        </Filter>
      </FilterContainer>
      <ProductList category={category} size={size} price={price} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Products

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
  ${mobile({ textAlign: 'center' })};
  ${tablet({ textAlign: 'center' })};
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  margin: 20px;
  gap: 10px;
  align-items: center;
  ${mobile({ flexDirection: 'column', flex: 1 })};
  ${tablet({ flexDirection: 'column', flex: 1 })};
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`
