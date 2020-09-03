import React,{ useState } from 'react';
import logo from '../public/logo1.png';

const Header = () => {
  const temp = {
    float: "right"
  }

  return(

        <nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
          <a  class="navbar-brand" href="#">
            <img src={logo} width="35" height="35" class="d-inline-block align-top" alt="" />
            MyPortFolio
          </a>
          <ul class="navbar-nav justify-content-end ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item ml-3 mr-3">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
  );

}

export default Header;
