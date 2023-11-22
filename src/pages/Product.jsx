import styled from 'styled-components'
import Navbar from '../components/navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 90%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
// FILTER OPTIONS

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div``

const FilterTitle = styled.span`
  font-size: 25px;
  font-weight: 200;
`

const FilterSize = styled.div`
  display: flex;
  margin: 20px 0px;
`

const FilterSizeButton = styled.button`
  flex: 1;
  min-width: 70px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid lightgray;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#e69840' : '#ffffff')};
  transition: all 0.5s ease;

  &:hover {
    background-color: #e0bf99;
  }
`
// ADD TO CART

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 80px;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  font-size: 17px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #e69840;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 1px solid #e69840;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e0bf99;
    color: #ffffff;
  }
`

const Product = () => {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex === selectedButton ? null : buttonIndex)
  }
  const Sizes = ['XS', 'S', 'M', 'L', 'XL']
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1552066379-e7bfd22155c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </ImgContainer>
        <InfoContainer>
          <Title>Brazil Jersey</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dolore, excepturi harum adipisci ipsum mollitia provident asperiores
            minima qui quis aspernatur, beatae repudiandae error dolorum ex
            aliquam vitae! Facere, consequuntur.
          </Desc>
          <Price>$ 75</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                {Sizes.map((Sizes, index) => (
                  <FilterSizeButton
                    key={index}
                    isSelected={selectedButton === index}
                    onClick={() => handleButtonClick(index)}
                  >
                    {Sizes}
                  </FilterSizeButton>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
