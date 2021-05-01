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
               <br/>
               <h1>Perfil</h1>
               <br/>
               <div>
                  Nome: {profile.name}
               </div>
               <div>
                  E-mail: {profile.email}
               </div>
            </div>
            <br />
            <Address />
         </div>
      );
   };
}

export default Profile;
