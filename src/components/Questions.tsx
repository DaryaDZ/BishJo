import React from 'react';
import './Question.css';
import Divider from "../Assets/Divider.png";
import help from "../Assets/help.png";



const Questions = () => {
  return (
    <div className='maiin'>
      <div className='titLE'>
      سوالات پر تکرار
      </div>
      
      <div>
        <div className='devidersimg'>
          <div className='tag2'>
          <img className="help" src={help} alt="" />
          </div>
          <div className='tag1'>
          چگونه اشتراک تهیه کنم؟ 
          </div>
      {/* <img src={Divider} alt=""  className="TadresIcon" /> */}
        </div>
      </div>
      </div>
)}
export default Questions
