import React, { Component } from 'react';
import api from '../../services/api';

import Address from '../../components/Address'
import './Profile.css';
class Profile extends Component {
   state = {
      profile: {},
   };

   componentDidMount = async () => {
      try {
         const response = await api.getProfile();
         this.setState({ profile: response })
         
      } catch (error) {
         console.error(error);
      };
   }

   render() {
      const { profile } = this.state;

      return (
         <div>
            <div>
               <h1>Perfil</h1>
               <div>
                  {profile.name}
               </div>
               <div>
                  {profile.email}
               </div>
            </div>
            <button>Editar</button>
            <br />
            <br />
            <Address />
         </div>
      );
   };
}

export default Profile;
