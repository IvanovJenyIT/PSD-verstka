import React from 'react';
import '../../styles/App.scss';
import icon from "../../assets/images/burger_menu_icon.png"
import cart from "../../assets/images/cart.png"
import TopMenu from "../topMenu/topMenu"
import MainPage from '../mainPage'
import apiMagazin from '../../api/api'

export default class App extends React.Component{
  render() {
      return (
          <div className="main-content">
              <div className="mainMenu">
                  <div className="mainMenu__row1">
                      <div className="mainMenu__menuBurger">

                          <img src={icon} alt="error"/>
                      </div>
                      <div className="mainMenu__logo">
                          Portland
                      </div>
                      <div className="mainMenu__menu">
                          <TopMenu/>
                      </div>
                      <div className="mainMenu__cart">
                          <img src={cart} alt="error"/> CART <span>0</span>
                      </div>
                      <div className="mainMenu__button-sign">
                          <a href="/">SIGN IN</a>
                      </div>
                  </div>

                  <div className="mainMenu__row2">

                      <div className="menu-categories">
                          <ul className="mainMenu__menu__nav-categories">
                              <li className="nav__item">
                                  <a href="/">
                                      Top Sales
                                  </a>
                              </li>
                              <li className="nav__item">
                                  <a href="/">
                                      Brand Focus
                                  </a>
                              </li>
                              <li className="nav__item">
                                  <a href="/">
                                      Hi-tech
                                  </a>
                              </li>
                              <li className="nav__item">
                                  <a href="/">
                                      Best Sellers
                                  </a>
                              </li>
                              <li className="nav__item">
                                  <a href="/">
                                      Projects
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="mainMenu__support">
                          <a href="/">
                              Support
                          </a>
                      </div>

                      <div className="mainMenu__search">
                          <input className="mainMenu__search-input" type="text" placeholder="I’m looking for ..."
                                 size="29"/>
                      </div>
                  </div>
              </div>
              <div className="banner">
                  <div className="banner__content">
                      <div className="banner__header">
                          iPhone 6 32Gb<br/>Black
                      </div>
                      <div className="banner__text">

                      </div>
                      <div className="banner__button-buy">

                      </div>
                  </div>
              </div>
              <div className="main_content">
                  <div className="container">
                      <div className="row">
                          <div className="col-2">
                              leftMenu
                          </div>
                          <div className="col-10">
                              <MainPage items={apiMagazin}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };
  };