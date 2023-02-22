import React from "react";
import { useParams } from "react-router-dom";
import YourPointOfView from "./YourPointOfView";
import Frame from "../Assets/Frame49.png";
import check from "../Assets/check.png";
import folder from "../Assets/ICONS/folder.png";
import timer from "../Assets/ICONS/timer.png";
import visibility from "../Assets/ICONS/visibility.png";
import star from "../Assets/star.png";
import Changiz from "../Assets/Teachers/Changiz.png";
import { ShowAllCourse } from "../features/Bishjo/CourseSlice";
// import { ShowAllMasters } from "../features/Bishjo/";

// import blendersvideo from "../Assets/blendersvideo.mp4";

import { useSelector } from "react-redux";
import "./SingleCourse.css";


function SingleCourse() {
  const { id } = useParams();
  console.log(id);

  const AllCourse = useSelector(ShowAllCourse);
  // const Masters = useSelector(ShowAllMasters);


  return (
    <div className="SingleCourse">
      {AllCourse.payload.courses.courses.map((item: any) => {
        return <>
      <div className="singlecouse1">
        <div>
          <img src={Frame} className="Frameimg" />
        </div>
        <div className="txtFrame">
          <div className="txtFrame1">قراره توی این دوره چی یاد بگیریم!</div>
          <div className="Frame5">
            <div className="txtFrame2">
              <div className="txtFrame4">
                <div className="txtFrame6">اصل اولیه طراحی سه بعدی</div>
                <div>
                  {" "}
                  <img src={check} />{" "}
                </div>
              </div>
              <div className="txtFrame4">
                <div className="txtFrame6">معرفی تنظیمات برنامه</div>
                <div>
                  <img src={check} />
                </div>
              </div>
              <div className="txtFrame4">
                <div className="txtFrame6">آشنایی با محیط برنامه</div>
                <div>
                  {" "}
                  <img src={check} />{" "}
                </div>
              </div>
              <div className="txtFrame4">
                <div className="txtFrame6">مدل سازی</div>
                <div>
                  {" "}
                  <img src={check} />{" "}
                </div>
              </div>
            </div>

            <div className="FRAME2">
              <div className="txtFrame7">
                <div className="txtFrame8">تکچر سازی </div>
                <div>
                  <img src={check} />
                </div>
              </div>

              <div className="txtFrame7">
                <div className="txtFrame8">انیمیشن سازی </div>
                <div>
                  <img src={check} />
                </div>
              </div>

              <div className="txtFrame7">
                <div className="txtFrame8">Render / خروجی گرفتن </div>
                <div>
                  <img src={check} />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

        <div className="CONTAINER11">
          <div className="FRAMEcontainer1">
            <div className="CNT1" >
              <div className="iconandstuff1">
                <div className="imgICN" >
                  <img  src={visibility} />
                </div>
                <div className="txt60">
                تعداد بازدید :
                </div>
                <div className="txt61">
                ۱۲۰۰۰
                </div>
              </div>

              <div className="iconandstuff2">
              <div className="imgICN">
              <img src={timer} />
              </div>
              <div className="txt60" >
              مدت زمان :
              </div>
              <div className="txt62" >
              ۶۲ ساعت
              </div>
              </div>

              <div className="iconandstuff3">
              <div className="imgICN">
              <img src={folder} />
              </div>
              <div className="txt60" >
              تعداد فایل ها :
              </div>
              <div className="txt61" >
              ۱۰
              </div>
              </div>


            </div>
            <div className="CNT2" >
              <div className="chngizz">
                <div className="chngizimgdiv">
                <img className="chngizimg" src={Changiz} />
                </div>
                <label className="labelchngiz" >چنگیز مرادی
                {/* {item.mastersName} */}
                </label>
                <button className="Changizsbtn" >مشاهده رزومه</button>
              </div>
              <div className="changiztxt">
                <label className="chnigztxt" >بنده از سال 1388 در حوزه طراحی 3 بعدی فعالیت داشتم و موفق شدم در شرکت بازی سازی
تشتک سازان تبریز، مدل سازی کنم</label>
              </div>
                            </div>
          </div>
          <div className="FRAMEcontainer2">
             <video
               className="movieTrailer" controls 
              //  poster={playMovie.trailersPoster}
              
                > 
                <source src='../Assets/blendersvideo.mp4' type="video/mp4"/>
            </video>
          </div>


        </div>
          <div className="MAIN1">
            <div className="rightContainer">
              <div className="rightContainer1" >
                <div className="twotxts">
                  <div className="jalasatedore">جلسات دوره</div>
                  <div className="modatzaman">مدت زمان</div>
                </div>
                <div className="contents">
                <div className="Content1">
                  <div> ۱- نرم افزار های سه بعدی در چه...</div>
                  <div>00:15:00</div>
                </div>
                <div className="Content1">
                  <div>۲- آشنایی با محیط برنامه</div>
                  <div>00:15:00</div>
                </div>
                <div className="Content1">
                  <div>۳- معرفی تنظیمات برنامه</div>
                  <div>00:15:00</div>
                </div>
                <div className="Content1">
                  <div>۴- مدل سازی (قسمت 1)</div>
                  <div>00:15:00</div>
                </div>
                <div className="Content1">
                  <div>۵- مدل سازی (قسمت 2)</div>
                  <div>00:15:00</div>
                </div>
                <div className="Content1">
                  <div>۶- آشنایی با محیط Shader</div>
                  <div>00:15:00</div>
                </div>
                <div className="Content1">
                  <div>۷- تکسچر سازی</div>
                  <div>00:15:00</div>
                </div>
                </div>

              </div>
              <div className="RIGHTcontainer1" >تبلیغات</div>
              <div className="RIGHTcontainer2" >تبلیغات</div>
            </div>
            <div className="LeftContainer" >
              <div className="LEFTcontainer1">
                <div className="lefttxt1">
                  <div style={{color: "#EAF0FF"}}>بلندر / Blender</div>
                  <div className="LEFTcontainer">
                    <div className="ratetxt" >۵.۰</div>
                    <div className="lefticon">
                    <img style={{height: "10px", width: "10px"}} src={star} />
                    </div>
                  </div>
                </div>
                  <div className="LeftTxt1">
                  بلندر یک نرم افزار open Source طراحی سه بعدی میباشد . با توجه به رایگان بودن برنامه، اما با نرم افزار های مشابه پولی  رقابت دارد و طی 2 سال گذشته
بعد از اپدیت 2.8 طرفدار های زیادی پیدا کرده است 
                  </div>
              </div>
              <div className="LEFTcontainer2">
                <div style={{color: "#EAF0FF", padding: "29px"}}>اهمیت یادگیری این دوره :</div>
                <div className="LeftTxt1">
                در کشور ما تعداد طراحان حرفه ای سه بعدی بسیار محدود است
 و این موضوع باعث ایجاد بازار کار قوی برای کسانی میشود که میخواهند به
 این حرفه ورود کنند
                </div>
                <div className='devidersimg2'>
            </div>
            <div style={{color: "#EAF0FF", padding: "29px"}}>
            این دوره برای چه کسانی مناسبه :
            </div>
            <div className="LeftTxt1">
            برای همه کسانی که علاقه به طراحی و مدل سازی
 برای یک محصول ، بازی سازی یا انیمیشن دارند.توجه داشته باشید که ابزار های نرم افزار های سه بعدی نیازمندسخت افزار های قوی برای اجرا دارند
            </div>
              </div>
            </div>

            </div>


            <div style={{marginTop: "200px", justifyContent: "center",}}>
            <YourPointOfView />
            </div>



      </>
      })
    }
                    // {/* )} */}
    </div>
  );
}

export default SingleCourse;
