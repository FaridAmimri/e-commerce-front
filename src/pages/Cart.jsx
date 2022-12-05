/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'
import CircleIcon from '@mui/icons-material/Circle'
import { Remove, Add } from '@mui/icons-material'
import { mobile, tablet } from '../responsive'
import { useSelector } from 'react-redux'

function Cart() {
  const cart = useSelector((state) => state.cart)
  console.log(cart)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Button variant='outlined' size='small' color='success'>
            CONTINUE SHOPPING
          </Button>
          <Texts>
            <Text>Shopping Bag(2)</Text>
            <Text>Your Wishlist (0)</Text>
          </Texts>
          <Button variant='outlined' size='small' color='primary'>
            CHECKOUT NOW
          </Button>
        </Top>

        <Bottom>
          <Article>
            {cart.products.map((product) => (
              <>
                <Item key={product._id}>
                  <ProductDetail>
                    <Image src={product.image}></Image>
                    <Details>
                      <Name>
                        <b>Product: </b>
                        {product.title}
                      </Name>
                      <Id>
                        <b>Id: </b>
                        {product._id}
                      </Id>
                      <Color>
                        <CircleIcon style={{ color: `${product.color}` }} />
                      </Color>
                      <Size>
                        <b>Size: </b>
                        {product.size}
                      </Size>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <Remove />
                      <Amount>{product.quantity}</Amount>
                      <Add />
                    </AmountContainer>
                    <Price>{product.price * product.quantity} €</Price>
                  </PriceDetail>
                </Item>
                <Hr />
              </>
            ))}
          </Article>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryContent>Subtotal</SummaryContent>
              <SummaryPrice>{cart.total} €</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryContent>Estimated Shipping</SummaryContent>
              <SummaryPrice>4.90 €</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryContent>Sipping Discount</SummaryContent>
              <SummaryPrice>-6.90 €</SummaryPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryContent>Total</SummaryContent>
              <SummaryPrice>{cart.total} €</SummaryPrice>
            </SummaryItem>
            <ButtonContainer>
              <Button variant='contained' size='small'>
                CHECKOUT NOW
              </Button>
            </ButtonContainer>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })};
  ${tablet({ padding: '15px' })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ marginBottom: '10px' })};
  ${tablet({ marginBottom: '10px' })}
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: 'none' })};
`

const Text = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
  ${tablet({ flexDirection: 'column' })}
`

const Article = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`

const Item = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })};
  ${tablet({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.span`
  margin-bottom: 10px;
`

const Id = styled.span`
  margin-bottom: 10px;
`

const Color = styled.span``

const Size = styled.span`
  margin-bottom: 10px;
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`

const Amount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '7px 17px' })};
  ${tablet({ margin: '5px 15px' })}
`

const Price = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '22px' })};
  ${tablet({ marginBottom: '20px' })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`
const SummaryTitle = styled.h1`
  font-weight: 300;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryContent = styled.span``

const SummaryPrice = styled.span``

const ButtonContainer = styled.div`
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })};
`
