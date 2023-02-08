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
      <div className='display'>


      <div className='textdo'>
      پلن های تدریس در دانشجویار
      </div>
      <div className='textse'>
       :در بیشجو ، نحوه همکاری با مدرسین به 3 شکل میباشد. در این پلن ها ، هزینه ها و درآمد ها به شکل های مختلفی محاسبه میشود که به شرح ذیل میباشد
      </div>
      <div className='tadris'>
      <div className="tadrisyek">
        <div className="number1">
          <div className="firstnumber">1</div>
        </div>
        <div className="firsttexT">
          .ثابت: در روش ثابت به ازای هر ساعت از آموزش مبلغی تحت عنوان حق التدریس
          به مدرس پرداخت می گردد. این مبلغ با توجه به هر دوره و با توافق طرفین
          تعیین می گردد{" "}
        </div>
      </div>
      <div className="tadrisdo">
        <div className="number2">
          <div className="secondnumber">
            <div className="secondNumber">2</div>
          </div>
          <div className="thesecondtxt">
            درصدی: در همکاری به صورت درصدی نحوه در آمد مدرس به صورت زیر می باشد
          </div>
        </div>
        <div>
          <div className="textezard1">
            <div className="Percent1">۴۰% مدرس</div>
          </div>
          <div className="textezard2">
            <div className="Percent2">۳۰% دانشجویار</div>
          </div>
          <div className="textezard3">
            <div className="Percent3">۳۰% تبلیغات</div>
          </div>
        </div>
        <div className="tadris3">
          <div className="number3">
            <div className="thirdnumber">
              <div className="thirdNumber">3</div>
              <div className="thethirdtxt">
                ترکیبی: در این روش مدرس به ازای هر ساعت آموزش مبلغی معادل 70
                درصد از مبلغ ثابت با توجه به امتیازات و 15 درصد از فروش خالص
دوره را دریافت می کند              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      
    </div>
  )
}

export default Apply
