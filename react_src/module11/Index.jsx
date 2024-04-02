
import styled from 'styled-components';
import React from 'react'


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
  
`;

const giftos = styled.div`
    font-size: 15px;
    text-align: center;
`;

const header = styled.div`
    background-color: rgb(250, 217, 223);
    overflow: hidden;
    text-align: center;    
`;

const Mainbar = styled.div`
    background-color : rgb(252, 161,176);
    color: white;
    border-radius:0px 0px 30px 30px;
    padding: 50px;
`;

const Img = styled.div`
    background-image:images/slider-img.png;

`

function Index() {
    return (
        <div>

            <Container>
                <Header>
                    <giftos><h2>GIFTOS</h2></giftos>
                </Header>
                <Nav>

                    <NavLink href="#">Home</NavLink>
                    <NavLink href="#">Shop</NavLink>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Contact</NavLink>

                    <NavLink><input className="form-control me-2" type="text" placeholder="Search" /></NavLink>
                </Nav>

                <Mainbar>
                    <div className="row">
                        <div className="col-7" style={{ padding: 100 }}>
                            <h1>Welcome To Our
                                Gift Shop</h1>
                            <p>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis. </p>
                            <Button>Contact Us</Button>
                        </div>
                        <div className="col-5 " align="center">
                            <img src="images/slider-img.png" alt=""width="70%"  />
                        </div>
                    </div>
                </Mainbar>
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
                    <div className="row">
                        <div className="col-12 ">
                            <a href="#"><i className="	fa fa-facebook-official " /></a>
                            <a href="#"><i className="fa fa-twitter-square" /></a>
                            <a href="#"><i className="fa fa-instagram " /></a>
                            <a href="#"><i className="	fa fa-youtube-square " /></a>
                        </div>
                        <div className="col-3" style={{ padding: 30 }}>
                            <h2>ABOUT US</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
                        </div>
                        <div className="col-3" style={{ padding: 30 }}>
                            <h2>Newsletter</h2>
                            <input type="email" placeholder="Enter Your E-mail" style={{ padding: 10, width: '90%' }} /><br /><br />
                            <Button>Subscribe</Button>
                        </div>
                        <div className="col-3" style={{ padding: 30 }}>
                            <h2>NEED HELP</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
                        </div>
                        <div className="col-3 " style={{ padding: 30 }}>
                            <h2>CONTACT US</h2>
                            <a href="#"><i className="fa fa-phone "> +9199668585 </i></a><br /><br />
                            <a href="#"><i className="fa fa-location-arrow "> Gb Road 123 London Uk</i></a><br /><br />
                            <a href="#"><i className=" fa fa-envelope "> demo@gmail.com</i></a><br /><br />
                        </div>
                    </div>

                </Footer>
            </Container>
        </div>
    )
}

export default Index