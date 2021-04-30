import React, { useState } from 'react';

import api from '../../services/api'

function SignUp() {

   //Lembrar de colocar verificação se email já esta sendo usado
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   async function handleSubmit() {
      const data = { name: name, email: email, password: password }

      if (name !== '' && email !== '' && password !== '') {
         await api.addUser(data);
         // window.location.href = '/profile'

      } else {
         alert('Por favor, preencha todos os campos!')
      }


   }

   return (
      <div>
         <h1>Cadastrar</h1>

         <form>
            <label>
               Nome:
    <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  label="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
            </label>

            <label>
               E-mail:
    <input
                  required
                  type="text"
                  id="email"
                  name="email"
                  label="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </label>
            <label>
               Password:
    <input
                  required
                  type="password"
                  id="senha"
                  name="senha"
                  label="Senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
            </label>
         </form>
         <button onClick={handleSubmit}>
            Enviar
               </button>
      </div>
   )
}

export default SignUp;