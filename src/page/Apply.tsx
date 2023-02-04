import React from 'react';
import './Apply.css';
import bishse from "../Assets/bishse.png";
import bishdo from "../Assets/bishdo.png";
import bishyek from "../Assets/bishyek.png";



function Apply() {

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className='main'>
      <div className='label' >
        چرا در بیشجو تدریس کنم
      </div>
      <div className='contAiner'>
        <div className='firstdiv' >
        <img src={bishse} alt="" className='bishse' />
        <div className="thethirdtext">
        <label > کسب درآمد کنید </label>
        </div>
        <div className='firstcontent'>
         آنچه را که می دانید آموزش دهید و به دانش پژوهان کمک کنید تا علایق خود را کشف کنند 
        </div>
        </div>
        <div className='containerdo'>
        <img src={bishdo} alt="" className='bishdo' />
          <div className="thesecondtext">
        <label > برند شخصی خود را می سازید </label>
          </div>
          <div className='secondcontent' >
          با تدریس در بیشجو خودتان را به عنوان یک متخصص به افراد زیادی معرفی کنید
          </div>
        </div>
        <div className='containeryek'>
        <img src={bishyek} alt="" className='bishyek' />
        <div className="thefirsttext">
        <label >دانش خود را به اشتراک میگذارید</label>
        <div  className='thirdcontent'>
        آنچه را که می دانید آموزش دهید و به دانش پژوهان کمک کنید تا علایق خود را کشف کنند
        </div>
        </div>

        </div>
      </div>

      <div className='textdo'>
      پلن های تدریس در دانشجویار
      </div>
      <div className='textse'>
       :در بیشجو ، نحوه همکاری با مدرسین به 3 شکل میباشد. در این پلن ها ، هزینه ها و درآمد ها به شکل های مختلفی محاسبه میشود که به شرح ذیل میباشد
      </div>
      
    </div>
  )
}

export default Apply
