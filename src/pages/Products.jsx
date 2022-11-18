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
import { useState } from 'react'

function Products() {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')

  const handleColor = (event) => {
    setColor(event.target.value)
  }

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
      <Title>Babies</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='color-select'>Color</InputLabel>
            <Select
              labelId='color-select'
              id='color-select'
              value={color}
              label='Color'
              onChange={handleColor}
            >
              <MenuItem value=''>Color</MenuItem>
              <MenuItem value={10}>White</MenuItem>
              <MenuItem value={20}>Black</MenuItem>
              <MenuItem value={30}>Red</MenuItem>
              <MenuItem value={30}>Blue</MenuItem>
              <MenuItem value={30}>Yellow</MenuItem>
              <MenuItem value={30}>Green</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='size-select'>Size</InputLabel>
            <Select
              labelId='size-select'
              id='size-select'
              value={size}
              label='Size'
              onChange={handleSize}
            >
              <MenuItem value=''>Size</MenuItem>
              <MenuItem value={10}>Newborn</MenuItem>
              <MenuItem value={20}>3 Months</MenuItem>
              <MenuItem value={30}>6 Months</MenuItem>
              <MenuItem value={30}>9 Months</MenuItem>
              <MenuItem value={30}>12 Months</MenuItem>
            </Select>
          </FormControl>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='price-sort'>Order</InputLabel>
            <Select
              labelId='price-sort'
              id='price-sort'
              value={price}
              label='Price'
              onChange={handlePrice}
            >
              <MenuItem value=''>Order</MenuItem>
              <MenuItem value={10}>Price (asc)</MenuItem>
              <MenuItem value={20}>Price (desc)</MenuItem>
            </Select>
          </FormControl>
        </Filter>
      </FilterContainer>
      <ProductList />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Products

const Container = styled.div`
  //   display: flex;
`

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  margin: 20px;
  gap: 10px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`
