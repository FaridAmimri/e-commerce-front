/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.image} />
        <Details>
          <Title>{item.title}</Title>
          <Button variant='contained'>SHOW NOW</Button>
        </Details>
      </Link>
    </Container>
  )
}

export default CategoryItem

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Details = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const Title = styled.h1`
  margin-bottom: 20px;
`
