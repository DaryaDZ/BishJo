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
<<<<<<< HEAD
import Questions from './components/Questions';
import Support from './components/Support';
import Photoshop from './components/Photoshop';
import PremierePro from './components/PremierePro';
import Illustarator from './components/Illustarator';
import AfterEffect from './components/AfterEffect';
import AdobeXD from './components/AdobeXD';
import Blender from './components/Blender'
import Figma from './components/Figma';
import   UnrealEngine from './components/UnrealEngine'
import Sketch from './page/Sketch';
import AboutBishjo from './page/AboutBishjo';

function App() {
  return (
      // <div style={{ backgroundColor:"#283148"}}>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='apply' element={<Apply />} />
          <Route path="support" element={ <Support />} />
          <Route path="questions" element={<Questions />} />
          <Route path="photoshop" element={<Photoshop />} />
          <Route path='aboutus' element={<AboutBishjo />} />
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
