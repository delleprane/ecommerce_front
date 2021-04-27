import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'


import Navbar from './components/NavBar/Navbar.jsx';
import './App.css';

function App() {
   return (
      <div className="App">
         <Navbar />
         <BrowserRouter>
            <Routes>
               <Route path='/products/' element={<Home />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/profile' element={<Profile />} />

               <Route path='*' element={<h1>Not found 404!</h1>} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
