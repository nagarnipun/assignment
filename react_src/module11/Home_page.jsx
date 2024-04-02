import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  background-color: green;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px 20px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  text-align:center;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  margin: 0;
`;


const Banner = styled.div`
  background-image: url('./image/img1.jpg');
  background-size: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color:white
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const ProductCard = styled.div`
  background-size:100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
background-image: url('./image/img2.jpg');
background-size:100%;
padding: 120px;
background-repeat: no-repeat;
      
`;

const Footer = styled.div`
background-color: rgb(58, 53, 53);
color: white;
padding: 50px;

`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;



const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;





function Home_page() {
  return (
    <div>
      <div>


        <Container>
          <Header>
            <h1>Shopping Site</h1>
          </Header>
          <Nav>
            
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Shop</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>

            <NavLink><input className="form-control me-2" type="text" placeholder="Search" /></NavLink>
          </Nav>
          <Banner>

            <h2>Welcome to Our Store</h2>
          </Banner>
          <Main>
            <ProductCard>
              <Image></Image>
              <Title>Product 1</Title>
              <Price>$19.99</Price>
              <Button>Add to Cart</Button>
            </ProductCard>
            <ProductCard>
              <Image></Image>

              <Title>Product 2</Title>
              <Price>$29.99</Price>
              <Button>Add to Cart</Button>
            </ProductCard>
            <ProductCard>
              <Image></Image>

              <Title>Product 3</Title>
              <Price>$39.99</Price>
              <Button>Add to Cart</Button>
            </ProductCard>

            <ProductCard>
              <Image></Image>

              <Title>Product 4</Title>
              <Price>$19.99</Price>
              <Button>Add to Cart</Button>
            </ProductCard>
            <ProductCard>
              <Image></Image>

              <Title>Product 5</Title>
              <Price>$29.99</Price>
              <Button>Add to Cart</Button>
            </ProductCard>
            <ProductCard>
              <Image></Image>

              <Title>Product 6</Title>
              <Price>$39.99</Price>
              <Button>Add to Cart</Button>
            </ProductCard>
          </Main>
          <Footer>
            <h3>Footer</h3>
          </Footer>
        </Container>
      </div>
    </div>
  )
}

export default Home_page