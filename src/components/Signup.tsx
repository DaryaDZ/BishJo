import React from 'react';
import './Signup.css';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className="App">
    <div>
    <div className='Return'> بازگشت </div>
    <div className='sabtenam'>ثبت نام کنید</div>
    {/* <div className='bishJo'>Bishjo</div> */}
    </div>
      <div className='aHover'>
            <button className='YellowOne' >
            دانشجو
            </button>
        {/* <div className='whiteOne'>
          <div className='whitetext'>استاد</div>
        </div> */}
        <Link to='./login' >
        <button className='whiteOne' >
          استاد
        {/* <div className='whitetext'>استاد</div> */}
        </button>
        </Link>
      </div>
    <div className='first' >
      <div>
        <div>
          <label className='firsttext'   > نام کاربری
                   {/* <PersonOutlineIcon /> */}
          </label>
            {/* <div className='firsttext'>
              </div> */}
          <input className='firstInput' type='text' placeholder='نام کاربری خود را وارد کنید'       />
          {/* <PersonOutlineIcon  className='icon1'/> */}
          {/* </input> */}
        {/* <div className='firstcontainer'></div> */}
        </div>
        <div>
        <div className='Secondtext'>ایمیل 
         {/* <PersonOutlineIcon /> */}
             </div>
          <input className='SecondInput' type='email' placeholder=' ایمیل خود را وارد کنید' />
        </div>
        <div>
        <div className='Secondtext'>شماره  تلفن  
         {/* <PersonOutlineIcon /> */}
             </div>
          <input className='SecondInput' type='number' placeholder='شماره تلفن خود را وارد کنید' />
        </div>
        <div>
        <div className='Secondtext'>رمز عبور  
        {/* <PersonOutlineIcon /> */}
             </div>
          <input className='SecondInput' placeholder='رمز عبور خود را وارد کنید' type='password' />
        </div>
        

        <div className='recapat'>
                      {/* img: "../Image/second.webp", */}

          <img className='axyek' src='../Ax/download.jpg' />
        </div>
        <div>
          <button className='signupBtn' >ثبت نام</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
