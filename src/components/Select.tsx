import React from 'react';
import './Select.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import Check from "../Assets/check.png";


function Select() {
  return (
    <div className='selectsmain'>
      <div className='selectBtn'>
        <div>
          <button className='Annual' >
            <div className='Annualstext'>
            سالانه
            </div>
            <div className='AnnualIcon'>
            <CalendarMonthIcon /> 
            </div>
          </button>
          <button className='monthly' >
            <div className='monthlytext'>
              ماهانه
            </div>
            <div className='AnnualIcon'>
              <CalendarViewWeekIcon />
            </div>
          </button>
        </div>
      </div>
      <div className='Prices'>

        <div className='Price1'>
          <div className='txt1'>شرکت</div>
          <div className='txt2'>
          <div className='txt11'>تومان</div>
          <div> ۱۰۰۰۰۰۰ </div>
          </div>
          <button className='PriceBtn1'>
            <div className='PriceBtntxt'>
              شروع کنید
            </div>
          </button>
          <div className='information3'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt7' >
          ۱۴ روز رایگان         
             </label>
          </div>
          <br />
          <div className='information2'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt7' >
          ۵ کاربر 
            </label>
          </div>
          </div>
          <br />
          <div className='information2'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt8' >
          امکان دانلود دوره از طریق اپلیکیشن
            </label>
          </div>
          </div>
          <br />
          <div className='information2'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt7' >
          ارتباط مستقیم با استاد
            </label>
          </div>
          </div>
          
          </div>

          </div>

        <div className='Price2'>
        <div className='txt3'>حرفه ای</div>
          <div className='txt2'>
          <div className='txt11'>تومان</div>
          <div> ۷۰۰۰۰۰  </div>
          </div>
          <button className='PriceBtn2' >
            <div className='PriceBtntxt2'>
              شروع کنید
            </div>
          </button>
          <div className='information3'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt7' >
          ۱۰ روز رایگان
            </label>
          </div>
          <br />
          <div className='information2'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt7' >
          ۳ کاربر 
            </label>
          </div>
          </div>
          <br />
          <div className='information2'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt8' >
          امکان دانلود دوره از طریق اپلیکیشن
            </label>
          </div>
          </div>
          
          </div>
        </div>
        

        <div className='Price3'>
        <div className='txt4'>ساده</div>
          <div className='txt2'>
          <div className='txt11'>تومان</div>
          <div> ۵۰۰۰۰۰ </div>
          </div>
          <button className='PriceBtn1' >
            <div className='PriceBtntxt'>
              شروع کنید
            </div>
          </button>

      <div>
        <div className='information'>
        </div>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt7' >
          روز 
          رایگان
          ۷ 
          </label>
          </div>
          <br />
          <div className='information2'>
          <img src={Check} className="checkimg" />
        <div className='txt6'>
          <label className='txt7' >
          ۱ کاربر
          </label>
          </div>
          </div>
      </div>
        </div>


      </div>
      
    </div>
  )
}

export default Select
