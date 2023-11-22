import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`
const Logo = styled.h1`
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-style: italic;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: 'grey', fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>FORMULA OUTLET</Logo>
          </Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar
