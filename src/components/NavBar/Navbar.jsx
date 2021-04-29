import React, { Component } from 'react';
import { getToken, getNomeUsuario, logout } from '../../services/auth';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

class Navbar extends Component {
   state = {
      clicked: false,
   }

   
   handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
   }
   
      token = getToken();
      name = getNomeUsuario();
      

   render() {

      return (
         <nav className="NavbarItens">
            <h1 className="navbar-logo">
               <a href="/">
                  <img src={logo} alt="Logo" />
               </a>
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>
               <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

               <li>
                  <a
                     className="nav-links"
                     href={this.token ? '/profile' : '/signin'}>
                     <i className="fas fa-user"></i>
                     {this.token ? this.name[0].toUpperCase() + this.name.substr(1) : 'Entrar'}
                  </a>

                  {this.token && <a href='/' className='nav-links' onClick={logout} > Sair </a>}
               </li>



            </ul>
         </nav>
      )
   }
}

export default Navbar