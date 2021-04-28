import React, { useState } from 'react';

import { setNomeUsuario, login, setIdUsuario } from '../../services/auth';
import api from '../../services/api';

export default function SignIn() {
   const [email, setEmail] = useState('');
   const [password, setSenha] = useState('');

   async function handleSubmit() {
      await api.post('/auth/login', { email, password })
         .then(res => {
            if (res.status === 200) {
               login(res.data.token)
               setIdUsuario(res.data.id)
               setNomeUsuario(res.data.name)

               window.location.href = '/profile'

            } else {
               alert('Erro servidor');
            }
         })
   }


   return (
      <div>
         <h1>SignIn</h1>
         <input
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email" />
            <br/>
         <input
            name="password"
            id="password"
            value={password}
            onChange={e => setSenha(e.target.value)}
            type="password" />
         <button
            onClick={handleSubmit}
         >Entrar</button>
      </div>
   )
}