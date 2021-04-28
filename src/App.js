import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/Login'
import Profile from './pages/Profile'
import AddAdress from './pages/Register/Address'


import Navbar from './components/NavBar/Navbar.jsx';
import './App.css';

function App() {
   return (
      <div className="App">
         <Navbar />
         
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/signin' element={<SignIn />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/addAddress' element={<AddAdress />} />

               <Route path='*' element={<h1>Not found 404!</h1>} />
            </Routes>
       
      </div>
   );
}

export default App;
