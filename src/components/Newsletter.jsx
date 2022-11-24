/** @format */

import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import InputAdornment from '@mui/material/InputAdornment'
import { mobile, tablet } from '../responsive'

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <TextField
          fullWidth
          size='large'
          placeholder='Your Email'
          type='email'
          color='success'
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <IconButton>
                  <SendIcon style={{ color: 'teal' }} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </InputContainer>
    </Container>
  )
}

export default Newsletter

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf5f5;
`

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  ${mobile({ fontSize: '25px' })};
  ${tablet({ fontSize: '40px' })};
`

const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  width: 90%;
  text-align: center;
`
const InputContainer = styled.div`
  width: 50%;
  height: 56px;
  background-color: #fff;
  ${mobile({ width: '80%' })}
  ${tablet({ width: '80%' })}
`
