import React,{ useState } from 'react';
import logo from '../logo.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Media,
  NavLink,
} from 'reactstrap';
const Header = () => {

  return(
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="#">MyPortFolio</NavbarBrand>


      </Navbar>
    </div>
  );

}

export default Header;
