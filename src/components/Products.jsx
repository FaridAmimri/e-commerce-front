/** @format */

import styled from 'styled-components'
import { products } from '../data'
import ProductItem from './ProductItem'

function Products() {
  return (
    <Container>
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`
