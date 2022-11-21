/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { Remove, Add } from '@mui/icons-material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CircleIcon from '@mui/icons-material/Circle'

function Product() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src='assets/products/product3.png' />
        </ImageContainer>
        <DetailsContainer>
          <Title>Baby Sweet</Title>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi autem
            temporibus, quod eaque delectus eligendi, assumenda minus sapiente
            dolore alias quidem.
          </Description>
          <Price>19 €</Price>
          <FilterContainer>
            <FilterWrapper>
              <FilterTitle>Color</FilterTitle>
              <FilterColor>
                <IconButton style={{ padding: 0 }}>
                  <CircleIcon style={{ color: 'green' }} />
                </IconButton>
                <IconButton style={{ padding: 0 }}>
                  <CircleIcon style={{ color: 'black' }} />
                </IconButton>
                <IconButton style={{ padding: 0 }}>
                  <CircleIcon style={{ color: 'gray' }} />
                </IconButton>
              </FilterColor>
            </FilterWrapper>
            <FilterWrapper>
              <FilterTitle>Size</FilterTitle>
              <FormControl sx={{ minWidth: 120, margin: 1 }} size='small'>
                <Select labelId='size-select' id='size-select' defaultValue={0}>
                  <MenuItem value={0}>0 Months</MenuItem>
                  <MenuItem value={3}>3 Months</MenuItem>
                  <MenuItem value={6}>6 Months</MenuItem>
                  <MenuItem value={9}>9 Months</MenuItem>
                  <MenuItem value={12}>12 Months</MenuItem>
                </Select>
              </FormControl>
            </FilterWrapper>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button variant='outlined'>ADD TO CART</Button>
          </AddContainer>
        </DetailsContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  height: 90vh;
  object-fit: cover;
`

const DetailsContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 300;
`

const Description = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
`

const FilterColor = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 5px;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0, 5px;
`
