import React from 'react'
import './Panel.css'

function Contents() {
  return (
    <div style={{ display: "flex" , justifyContent: "center", alignItems: "center"}}>
      <div >
        <div  className='Content1'>
          <div className='ContentTxt'>محتوای مربوط به بیشجو</div>
        </div>
        <div className='Content2'>
          <div className='ContentTxt'>محتوای اپلود شده توسط اساتید</div>
        </div>
        <div className='Content3'>
          <div className='ContentTxt'>دوره ها و نرم افزار های درخواستی</div>
        </div>
        <div className='Content4'>
          <div className='ContentTxt'>پیشنهادات و تبلیغات</div>
        </div>

      </div>
    </div>
  )
}

export default Contents
