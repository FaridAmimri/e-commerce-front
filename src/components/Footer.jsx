/** @format */

import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import { mobile, tablet } from '../responsive'

function Footer() {
  return (
    <Container>
      <Left>
        <Title>e-BiBi.</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia
          minima aut repellendus quo. Suscipit distinctio dolor asperiores
          exercitationem iste harum.
        </Description>
        <SocialContainer>
          <SocialIcon color='385999'>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Boy</ListItem>
          <ListItem>Girl</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon />1 square de béranger, 75000 Paris
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          +33 6 40 40 82 05
        </ContactItem>
        <ContactItem>
          <MailIcon />
          farid.amimri@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  display: flex;
  padding-left: 30px;
  ${mobile({ flexDirection: 'column', paddingLeft: 0 })};
  ${tablet({ flexDirection: 'column' })};
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Description = styled.p`
  margin-bottom: 20px;
  line-height: 1.5em;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`

const Title = styled.h3`
  margin-bottom: 20px;
  ${tablet({ textAlign: 'center' })};
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#eeeeee5e' })};
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`

const Payment = styled.img`
  width: 50%;
`
