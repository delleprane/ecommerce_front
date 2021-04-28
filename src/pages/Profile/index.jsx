import React, { Component } from 'react';
import api from '../../services/api';
import { getIdUsuario } from '../../services/auth';
import Address from '../../components/Address'
import './Profile.css';
class Profile extends Component {
   state = {
      profile: [],
   }


   async componentDidMount() {
      var idUsuario = getIdUsuario()
      const response = await api.get('perfil/' + idUsuario);
      this.setState({
         profile: response.data,
      })
   }

   render() {
      const { profile } = this.state

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
            <br />
            <br />
            <Address />
         </div>
      );
   };
}

export default Profile;