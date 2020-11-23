import React,{ useState } from 'react';
import logo from '../public/logo1.png';
import ReactDOM from "react-dom";
import { Link,
         BrowserRouter as Router
        } from 'react-router-dom';

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
              <Link class="nav-link text-light" to='/'>Home </Link>
            </li>
              <li class="nav-item ml-3">
                <Link class="nav-link text-light" to='/projects'>Projects </Link>
              </li>
              <li class="nav-item ml-3">
                <Link class="nav-link text-light" to='/resume'>Resume </Link>
              </li>
              <li class="nav-item ml-3 mr-3">
                <Link class="nav-link text-light" to='/contact'>Contact </Link>
              </li>

          </ul>
        </nav>
  );

}

export default Header;
