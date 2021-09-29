import React from 'react';
import '../css/index.css';
import { InputGroup, FormControl, Dropdown, DropdownButton, NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import counterReducer from '../reducers/counterReducer';


function Header(props) {
  const {counterReducer} = useSelector((state) => state)
  // console.log("state", myState[0])
    return (
      <>
     <nav className="header">
        <Link to='/'> <img src="https://www.online-tech-tips.com/wp-content/uploads/2021/03/Logo.jpg.optimal.jpg" alt="amazon-logo" className="amazon-logo"></img></Link>
         <div  className="address">
         <h6>Address Address</h6>
         <h6>City City</h6>
         </div>
         {/* <Flags.US title="United States" className="flag"/> */}
         <InputGroup className="search-bar">
            <DropdownButton id="dropdown-item-button" title="All">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
            <InputGroup.Text className="search-bar-btn"><i class="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
        </InputGroup>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="neha"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Link to='logout' className='nav-link'>
          <span className="nav-span1">Hello Neha</span>
          <span className="nav-span2">SignIn</span>
        </Link>

        <Link to='/signin' className='nav-link'>
        <span className="nav-span1">Returns</span>
        <span className="nav-span2">& Order</span>
        </Link>


        <Link to='checkout' className='nav-link nav-basket'>
          <span ><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
          <span className="basket-count">{counterReducer.count}</span>
          </Link>


     </nav>
      
  <Navbar bg="dark" variant="dark" className="second-nav">
    <Navbar.Brand href="#home" className="second-nav-first-element">All</Navbar.Brand>
    <Nav className="me-auto second-nav-elements">
      <Nav.Link href="#home" className="second-nav-link">Best Sellers</Nav.Link>
      <Nav.Link href="#features" className="second-nav-link">Mobiles</Nav.Link>
      <Nav.Link href="#pricing" className="second-nav-link">Fashion</Nav.Link>
      <Nav.Link href="#home" className="second-nav-link">Electronics</Nav.Link>
      <Nav.Link href="#features" className="second-nav-link">Amazon Pay</Nav.Link>
      <Nav.Link href="#pricing" className="second-nav-link">Customer Service</Nav.Link>
      <NavDropdown 
      href="#home" 
      className="second-nav-link-dropdown"
      id="nav-dropdown-dark-example"
      title="Prime"
      menuVariant="dark">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link href="#features" className="second-nav-link">Today's Deal</Nav.Link>
      <Nav.Link href="#pricing" className="second-nav-link">New Releases</Nav.Link>
      <Nav.Link href="#home" className="second-nav-link">Computers</Nav.Link>
      <Nav.Link href="#features" className="second-nav-link">Home & Kitchen</Nav.Link>
      <Nav.Link href="#pricing" className="second-nav-link">Toys & Games</Nav.Link>
      <Nav.Link href="#home" className="second-nav-link">Books</Nav.Link>
    </Nav>
  </Navbar>



     </>
    )
}

export default Header
