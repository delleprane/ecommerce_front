import React, { Component } from 'react';
import api from '../../services/api';

import { getIdUsuario } from '../../services/auth';

class Address extends Component {
   state = {
      address: [],
   }


   async componentDidMount() {
      var idUsuario = getIdUsuario()
      const response = await api.get('perfil/address/' + idUsuario);
      console.log(response.data.length)
      this.setState({
         address: response.data
      })
   }

   render() {
      const { address } = this.state

      return (
         <div>
            <h1>Endereços</h1>
            {address.length === 0 ?

               <div>
                  <br />
                  <h3>Verificamos que não existem Endereços cadastrados, deseja adicionar endereço?</h3>
                  <br />
                  <a href="/addAddress">
                        <button >Cadastrar Endereço</button>
                  </a>
               </div>

               :

               <div>
                  {address.map(address => (
                     <div className='address-box' key={address._id}>
                        Endereço: {address.address}
                        <br />
                    Número: {address.number}
                        <br />
                    Complemento: {address.suplement}
                        <br />
                    Cep: {address.cep}
                        <br />
                    Cidade: {address.city}
                        <br />
                    Estado: {address.state}
                        <br />
                     </div>
                  ))}
               </div>
            }

         </div>
      );
   };
}

export default Address;