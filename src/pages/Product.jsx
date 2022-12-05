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
import CircleIcon from '@mui/icons-material/Circle'
import { mobile, tablet } from '../responsive'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'

function Product() {
  const location = useLocation()
  const productId = location.pathname.split('/')[2]
  const dispatch = useDispatch()

  const [product, setProduct] = useState({})
  const [color, setColor] = useState()
  const [size, setSize] = useState()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${productId}`
        )
        const firstSize = res.data.sizes[0]
        const firstColor = res.data.colors[0]
        setProduct(res.data)
        setSize(firstSize)
        setColor(firstColor)
      } catch (error) {}
    }
    getProduct()
  }, [productId])

  const handleColor = (event) => {
    setColor(event.target.value)
  }

  const handleSize = (event) => {
    setSize(event.target.value)
  }

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }))
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <DetailsContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price} €</Price>
          <FilterContainer>
            <FilterWrapper>
              <FilterTitle>Color</FilterTitle>
              {product.colors && (
                <FormControl sx={{ margin: 1 }} size='small'>
                  <Select
                    labelId='color-select'
                    id='color-select'
                    value={color}
                    onChange={handleColor}
                  >
                    {product.colors.map((color) => (
                      <MenuItem value={color} key={color}>
                        <CircleIcon style={{ color: `${color}` }} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </FilterWrapper>
            <FilterWrapper>
              <FilterTitle>Size</FilterTitle>
              {product.sizes && (
                <FormControl sx={{ minWidth: 120, margin: 1 }} size='small'>
                  <Select
                    labelId='size-select'
                    id='size-select'
                    value={size}
                    onChange={handleSize}
                  >
                    {product.sizes.map((size) => (
                      <MenuItem value={size} key={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </FilterWrapper>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button variant='outlined' onClick={handleClick}>
              ADD TO CART
            </Button>
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
  ${mobile({ padding: '10px', flexDirection: 'column' })};
  ${tablet({ padding: '20px', flexDirection: 'column' })};
`

const ImageContainer = styled.div`
  flex: 1;
  ${mobile({ display: 'flex', justifyContent: 'center' })};
  ${tablet({ display: 'flex', justifyContent: 'center' })};
`

const Image = styled.img`
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '50vh' })};
  ${tablet({ height: '70vh' })};
`

const DetailsContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '20px' })};
  ${tablet({ padding: '30px' })};
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
  flex-wrap: wrap;
  margin: 30px 0px;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  ${mobile({ flexDirection: 'column', alignItems: 'flex-start' })};
  ${tablet({ width: '320px' })};
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

const AddContainer = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '220px' })};
  ${tablet({ width: '230px' })};
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
