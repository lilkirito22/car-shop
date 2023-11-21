import { Facebook, GitHub, Instagram } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`
const Logo = styled.h1`
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-style: italic;
`
const Desc = styled.p``
const SocialContainer = styled.div``
const SocialIcon = styled.div``
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FO</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          aliquid voluptatem accusantium error officiis qui eligendi impedit
          vitae fugit deserunt corporis nulla iusto delectus expedita ex, rem
          cupiditate magnam! Enim!
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <GitHub />
          </SocialIcon>

          <SocialIcon>
            <Instagram />
          </SocialIcon>

          <SocialIcon>
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer
