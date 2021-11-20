import styled from 'styled-components'
import { Container } from './Container.js'

const Wrapper = styled.main`
  padding: 2rem 0;
  @media (min-width: 767  px) {
    padding: 4rem 0;
  }
`

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
