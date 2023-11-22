import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 23%;
  padding: 20px;
  background-color: #ffffff97;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-width: 1px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #e69840;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #cca579;
  }
`
const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link> DO NOT REMEMBER YOUR PASSWORD? </Link>
          <Link> CREATE A NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
