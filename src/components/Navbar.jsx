/** @format */

import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { mobile, tablet } from '../responsive'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const quantity = useSelector((state) => state.cart.quantity)

  return (
    <Container>
      <Wrapper className={expandNavbar ? 'open' : 'close'}>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <TextField
              size='small'
              placeholder='Search'
              style={{ minWidth: '125px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <SearchIcon className='searchIcon' />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              variant='outlined'
            />
          </SearchContainer>
        </Left>
        <Center>
          <ChildFriendlyOutlinedIcon style={{ fontSize: 'xx-large' }} />
          BiBi.
        </Center>
        <Right className={expandNavbar ? 'visible' : 'unvisible'}>
          <Link to='/register'>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to='/login'>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to='/cart'>
            <MenuItem>
              <Badge
                badgeContent={quantity}
                color='primary'
                className='cartButton'
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
        <MenuButton className='menuButton'>
          <IconButton
            onClick={() => {
              setExpandNavbar((prev) => !prev)
            }}
          >
            <MenuIcon />
          </IconButton>
        </MenuButton>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  .open {
    ${mobile({ height: '100vh', alignItems: 'flex-start' })}
  }
  .unvisible {
    ${mobile({ display: 'none' })}
  }
`

const Wrapper = styled.div`
  background-color: #f5fafd;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: '10px 0' })}
`

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  justify-content: flex-start;
  .searchIcon {
    font-size: x-large;
    ${mobile({ fontSize: 'large', padding: '0px' })}
  }
`

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })};
  ${tablet({ display: 'none' })}
`

const SearchContainer = styled.div`
  display: flex
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  ${mobile({ padding: 0 })}
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  ${mobile({ fontSize: '20px' })}
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  justify-content: flex-end;
  .cartButton {
    font-size: 'xx-large';
    ${tablet({
      fontSize: 'large'
    })};
  }
  ${mobile({
    height: '150px',
    width: '60px',
    position: 'absolute',
    top: 'calc(50% - 75px)',
    left: 'calc(50% - 30px)',
    flexDirection: 'column',
    justifyContent: ' space-around',
    alignItems: 'center'
  })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: '16px',
    marginLeft: 0
  })};
  ${tablet({
    fontSize: '12px',
    marginLeft: '5px'
  })}
`

const MenuButton = styled.div`
  display: none;
  ${mobile({
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: '15px',
    cursor: 'pointer'
  })}
`
