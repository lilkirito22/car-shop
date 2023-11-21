import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from '@mui/icons-material'
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
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
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
`
const Logo = styled.h1`
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-style: italic;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;
`

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
          <SocialIcon color="3b5999">
            <GitHub />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Kids Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>My Orders</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ margin: '10px' }} /> 1240 1204 Luciano Cavalcante
        </ContactItem>
        <ContactItem>
          <Phone style={{ margin: '10px' }} /> +5588998106150
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ margin: '10px' }} /> dccastro.7@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
