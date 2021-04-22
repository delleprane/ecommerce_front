import React, { Component } from 'react';
import { MenuItens } from './MenuItens';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

class Navbar extends Component {
   state = {
      clicked: false
   }

   handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
   }
   render() {
      return (
         <nav className="NavbarItens">
            <h1 className="navbar-logo">
               <img src={logo} alt="Logo" />
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>
               <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
               {MenuItens.map((item, index) => {
                  return (
                     <li key={index}>
                        <a
                           className={item.cName}
                           href={item.url}>
                           <i className={item.iName}></i>
                           {item.title}
                        </a>
                     </li>
                  )
               })}


            </ul>
         </nav>
      )
   }
}

export default Navbar