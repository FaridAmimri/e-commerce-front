/** @format */

import styled from 'styled-components'

function Announcement() {
  return <Container>Free shipping on orders over 50 €</Container>
}

export default Announcement

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`
