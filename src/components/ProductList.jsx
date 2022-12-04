/** @format */

import styled from 'styled-components'
import ProductItem from './ProductItem'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductList({ category, size, price }) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : 'http://localhost:5000/api/products'
        )
        setProducts(res.data)
      } catch (error) {}
    }
    getProducts()
  }, [category])

  useEffect(() => {
    category &&
      setFilteredProducts(products.filter((item) => item.sizes.includes(size)))
  }, [products, category, size])

  useEffect(() => {
    if (price === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [price])

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => (
            <ProductItem item={item} key={item._id} />
          ))
        : products.map((item) => <ProductItem item={item} key={item._id} />)}
    </Container>
  )
}

export default ProductList

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`
