/** @format */

import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <TextField
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <SearchIcon style={{ color: 'gray', fontSize: 20 }} />
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
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlinedIcon style={{ fontSize: 'xx-large' }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  height: 60px;
  background-color: #f5fafd;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  justify-content: flex-start;
`

const Language = styled.div`
  font-size: 14px;
`

const SearchContainer = styled.div`
  display: flex
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
