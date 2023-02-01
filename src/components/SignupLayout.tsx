import React from 'react'
import { Outlet } from 'react-router-dom';
import './Signup.css';
import { Link } from 'react-router-dom';


function Signuplayout() {
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

      <Outlet />
      
    </div>
  )
}

export default Signuplayout
