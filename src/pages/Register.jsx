/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

function Register() {
  return (
    <>
      <Navbar />
      <Container>
        <Image src='assets/background.png' />
        <FormContainer>
          <Title>CREATE YOUR ACCOUNT</Title>
          <Box className='form' component='form'>
            <TextField
              className='input'
              id='name'
              label='Name'
              color='success'
            />
            <TextField
              className='input'
              id='last name'
              label='Last Name'
              color='success'
            />
            <TextField
              className='input'
              id='username'
              label='Username'
              color='success'
            />
            <TextField
              className='input'
              id='email'
              label='Email'
              color='success'
            />
            <TextField
              className='input'
              id='password'
              label='Password'
              type='password'
              color='success'
            />
            <TextField
              className='input'
              id='confirm-password'
              label='Confirm Password'
              type='password'
              color='success'
            />
            <FormControlLabel
              className='agreement'
              control={<Checkbox className='checkbox' color='success' />}
              label='I consent and I accept Terms and Conditions'
            />
            <Button variant='contained' size='large' color='success'>
              CREATE
            </Button>
          </Box>
        </FormContainer>
      </Container>
    </>
  )
}

export default Register

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const FormContainer = styled.div`
  position: absolute;
  width: 420px;
  padding: 20px;
  .form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .input {
    width: 200px;
  }
  .agreement {
    font-size: 12px;
    margin: 20px 0;
  }
  .checkbox {
    padding: 0px;
    margin-right: 10px;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
