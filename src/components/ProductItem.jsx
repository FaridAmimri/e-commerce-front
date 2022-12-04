/** @format */

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ProductItem({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Link to={`/product/${item._id}`}>
        <Details>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Details>
      </Link>
    </Container>
  )
}

export default ProductItem

const Details = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fafd;
  position: relative;

  &:hover ${Details}{
    opacity: 1
`

const Circle = styled.div``

const Image = styled.img`
  height: 90%;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f5fafd;
    transform: scale(1.1);
  }
`
