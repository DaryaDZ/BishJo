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
import Questions from './components/Questions';
import Support from './components/Support';
import Photoshop from './components/Photoshop';
import PremierePro from './components/PremierePro';
import Illustarator from './components/Illustarator';
import AfterEffect from './components/AfterEffect';
import AdobeXD from './components/AdobeXD';
import Blender from './components/Blender'
import Figma from './components/Figma';
import UnrealEngine from './components/UnrealEngine'
// import Sketch from './page/Sketch';
import AboutBishjo from './page/AboutBishjo';
import Select from './components/Select';
import YourPointOfView from './components/YourPointOfView';
import WebsitesCategory from './components/WebsitesCategory';
import Design from './components/Design';
import Categories from './components/Categories';
import SingleCourse from './components/SingleCourse';
import UserProfile from './components/UserProfile';
import MasterPro from './components/MasterPro';
import BookStore from './components/BookStore';
import PanelsLayout from './Panel/PanelsLayout';
import DashBoard from './Panel/DashBoard';
import MAsterProfileHomePage from './components/MAsterProfileHomePage';
import Blogs from './components/Blogs';
import SingleBlog from './components/SingleBlog';
import Contents from './Panel/Contents';
import Teachers from './Panel/Teachers';



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
          <Route path='bookstore' element={<BookStore />} />


          <Route path="/category" element={<WebsitesCategory />} >
          <Route path="design" element={<Design />} />
          <Route path="singlecategory" element={<Categories />} />


          </Route>

          <Route path="singlecourse/:id" element={<SingleCourse />} />
          
          <Route path="photoshop" element={<Photoshop />} />
          <Route path="premiere" element={<PremierePro />} />
          <Route path="illustartor" element={<Illustarator />} />
          <Route path="aftereffect" element={<AfterEffect />} />
          <Route path="adobexd" element={<AdobeXD />} />
          <Route path="blender" element={<Blender />} />
          <Route path="figma" element={<Figma />} />
          <Route path="unrealEngine" element={<UnrealEngine />} />

          <Route path='aboutus' element={<AboutBishjo />} />
          <Route path='select' element={<Select />} />
          <Route path='pointofview' element={<YourPointOfView />} />

          <Route path='profilemaster/:id' element={<MAsterProfileHomePage />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='singleblog/:id' element={<SingleBlog />} />
        </Route>
        <Route path="masterprofile" element={<MasterPro/>}></Route>
        <Route path="userprofile" element={<UserProfile />} />

        <Route path='/sinupslayout' element={<SignupLayout />} >            
          <Route path='masterssignup' element={<MastersSignup />} />            
          <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='/loginslayout' element={<LoginsLayout />} >
          <Route path='masterslogin' element={<MasterLogin />} />
          <Route path='login' element={<Login />} />
            </Route>   

            <Route path='/panel' element={<PanelsLayout /> } >
              <Route path='content' element={<Contents />} />
              <Route path='teachers' element={<Teachers />} />
              <Route index element={<DashBoard /> } />
            </Route>
                      



      </Routes>
   </Router>
  );
}

export default App;
