/** @format */

import styled from 'styled-components'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { sliderItems } from '../data'
import { mobile, tablet } from '../responsive'

function Slider() {
  const slideListLength = sliderItems.length
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleArrow = (direction) => {
    if (direction === 'left') {
      setCurrentSlide(
        currentSlide === 0 ? slideListLength - 1 : currentSlide - 1
      )
    }
    if (direction === 'right') {
      setCurrentSlide(
        currentSlide === slideListLength - 1 ? 0 : currentSlide + 1
      )
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleArrow('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper currentSlide={currentSlide}>
        {sliderItems.map((slide, index) => (
          <Slide key={index}>
            {index === currentSlide && (
              <ImageContainer>
                <Image src={slide.image} />
              </ImageContainer>
            )}
            <TextContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button variant='outlined'>SHOW NOW</Button>
            </TextContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleArrow('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow-x: hidden;
  ${mobile({ display: 'none' })}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff7f7;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 10;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.currentSlide * -100}vw);
  transition: all 1.5s ease-in-out;
`

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
`

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  text-align: center;
`

const Image = styled.img`
  object-fit: cover;
  ${tablet({ width: '200px' })}
`

const TextContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${tablet({ padding: '40px' })}
`

const Title = styled.h1`
  font-size: 50px;
  ${tablet({ fontSize: '25px' })}
`

const Description = styled.p`
  font-size: 20px;
  margin: 50px 0;
  font-weight: 500;
  letter-spacing: 3px;
  ${tablet({ fontSize: '15px' })}
`
