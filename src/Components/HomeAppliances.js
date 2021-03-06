import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import "../css/ProductList.css";
import { Link } from 'react-router-dom';
import MensWearCard  from "./MensWearCard";
import { MensWearData } from '../Data/MensWearData';

function HomeAppliances() {
  const [ items, setItems ] = useState("neha");
  console.log("nehahahaha");
  return (
    <div>

      <Navbar expand="lg" className="amazon-fashion-wrapper">
        <Navbar.Brand href="#home" className="amazon-fashion">
          Amazon Fashion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="#home">Women</Nav.Link>
            <Nav.Link href="#link">Men</Nav.Link>
            <Nav.Link href="#home">Kids</Nav.Link>
            <Nav.Link href="#link">Bags & Luggage</Nav.Link>
            <Nav.Link href="#home">Sportswear</Nav.Link>
            <Nav.Link href="#link">Sales & Deals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className="row">
        <div className="col-md-2 mens-wear-firstdiv mt-2">
            <h6 className="mt-2">Delivery Day</h6>
            <input type="checkbox" />
            <label>Get it in 2 Days</label><br />
            <input type="checkbox" />
            <label>Get it in 4 Days</label><br />
            <input type="checkbox" />
            <label>Get it in 6 Days</label><br />
            <input type="checkbox" />
            <label>Get it in 10 Days</label><br />
            <input type="checkbox" />
            <label>Get it in 1 Days</label><br />
            <input type="checkbox" />
            <label>Get it in 5 Days</label><br />
            <h6 className="mt-3">Department</h6>
            <Link className="link">Clothing and Accessories</Link><br />
            <Link className="link">Shoppers Stop - Men</Link><br />
            <Link className="link">Shirts</Link><br />
            <Link className="link">T-shirts & Polos</Link><br />
            <Link className="link">Shorts</Link><br />
            <Link className="link">Jeans</Link><br />
            <Link className="link">Sportswear</Link><br />
            <Link className="link">Trousers</Link><br />
            <Link className="link">Winterwear</Link><br />
            <Link className="link">Accessories</Link><br />
            <Link className="link">10% Off or more</Link><br />
            <Link className="link">20% Off or more</Link><br />
            <Link className="link">25% Off or more</Link><br />
            <Link className="link">50% Off or more</Link><br />
            <Link className="link">75% Off or more</Link><br />
            
        </div>
        <div className="col-md-10 mens-wear-seconddiv mt-2">
          {
            MensWearData.map((a) => {
              return (
                <MensWearCard imgM={a.imgM} price={a.price} setItems={a}/>
              )
            })
          }
          
          </div>
      </div>
    </div>
  );
}

export default HomeAppliances;
