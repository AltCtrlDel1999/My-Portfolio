import React,{ useState } from 'react';
import logo from '../public/logo1.png';

const Header = () => {
  const temp = {
    float: "right"
  }

  return(

        <nav class="navbar navbar-expand-lg bg-transperent navbar-transperent sticky-top">
          <a  class="navbar-brand text-light" href="#">
            <img src={logo} width="35" height="35" class="d-inline-block align-top" alt="" />
            MyPortFolio
          </a>
          <ul class="navbar-nav justify-content-end ml-auto">
            <li class="nav-item">
              <a class="nav-link  text-light" href="#">Projects</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link text-light" href="#">Resume</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link text-light" href="#">About</a>
            </li>
            <li class="nav-item ml-3 mr-3">
              <a class="nav-link text-light" href="#">Contact</a>
            </li>
          </ul>
        </nav>
  );

}

export default Header;
