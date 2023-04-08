import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { AuthContextProvider } from './context/AuthContext';
import { Protected } from './components/Protected';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/signin' element ={<Signin />} />
        <Route path='/account' element ={
        <Protected>
          <Account />
          </Protected>
        } 
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
