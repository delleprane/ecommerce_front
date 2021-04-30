import React, { useState } from 'react';

import api from '../../../services/api';
import { getIdUsuario } from '../../../services/auth';

export default function AddAdress() {

   const [addressP, setAddress] = useState('');
   const [numberP, setNumber] = useState('');
   const [suplementP, setSuplement] = useState('');
   const [cepP, setCep] = useState('');
   const [stateP, setState] = useState('');
   const [cityP, setCity] = useState('');

   async function handleSubmit() {
      var id = getIdUsuario()
      const data = { address: addressP, number: numberP, suplement: suplementP, cep: cepP, state: stateP, city: cityP }
      if (addressP !== '' && numberP !== '' && suplementP !== '' && stateP !== '' && cepP !== '' && cityP !== '') {
         await api.addAddress(id, data);

      } else {
         alert('Por favor, preencha todos os campos!')
      }


   }

   return (
      <div>
         <h1>Cadastrar Endereço</h1>
         <br /><br />
         <label>Endereço:</label>
         <input
            id="address"
            name="address"
            value={addressP}
            onChange={e => setAddress(e.target.value)}
            type="text" />
         <label>Número:</label>
         <input
            id="number"
            name="number"
            value={numberP}
            onChange={e => setNumber(e.target.value)}
            type="number" />
         <label>Complemento:</label>
         <input
          id="suplement"
          name="suplement"
          value={suplementP}
          onChange={e => setSuplement(e.target.value)}
          type="text" />
         <label>Cep:</label>
         <input
           id="cep"
           name="cep"
           value={cepP}
           onChange={e => setCep(e.target.value)}
          type="text" />
         <label>Estado:</label>
         <input
          id="state"
          name="state"
          value={stateP}
          onChange={e => setState(e.target.value)}
          type="text" />
         <label>Cidade:</label>
         <input
          id="city"
          name="city"
          value={cityP}
          onChange={e => setCity(e.target.value)}
          type="text" />
         <button onClick={handleSubmit}>Cadastrar</button>
      </div>
   )
}
