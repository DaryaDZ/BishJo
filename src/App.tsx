import React from 'react';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Layout from './page/Layout';
import Home from './page/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import MastersSignup from './components/MastersSignup';
import SignupLayout from './components/SignupLayout';
import LoginsLayout from './components/LoginsLayout';
import MasterLogin from './components/MasterLogin';
import Apply from './page/Apply';

function App() {
  return (
      // <div style={{ backgroundColor:"#283148"}}>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='apply' element={<Apply />} />

        </Route>
        <Route path='/sinupslayout' element={<SignupLayout />} >            
          <Route path='masterssignup' element={<MastersSignup />} />            
          <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='/loginslayout' element={<LoginsLayout />} >
          <Route path='masterslogin' element={<MasterLogin />} />
          <Route path='login' element={<Login />} />
            </Route>            



      </Routes>
   </Router>
  );
}

export default App;
