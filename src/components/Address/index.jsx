import React, { Component } from 'react';
import api from '../../services/api';


class Address extends Component {
   state = {
      address: []
   }


   componentDidMount = async () => {
      try {
         const response = await api.getAddress();
         this.setState({ address: response })
      } catch (error) {
         console.error(error);
      };
   }

   handleDeleteAddress = async (id) => {
      try {
         await api.deleteAddress(id);
      } catch (error) {
         console.log(error);
      }
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
                        <button>Editar</button>
                        <button
                           onClick={() => this.handleDeleteAddress(address._id)}
                        >Excluir</button>
                     </div>
                  ))}
               </div>
            }

         </div>
      );
   };
}

export default Address;