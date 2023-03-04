import './Teachers.css'
import { createSlice } from "@reduxjs/toolkit";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Teacher1 from "../Assets/Profile/Teacher1.png";
import Teacher2 from "../Assets/Profile/Teacher2.png";
import Teacher3 from "../Assets/Profile/Teacher3.png";
import Teacher4 from "../Assets/Profile/Teacher4.png";
import Teacher5 from "../Assets/Profile/Teacher5.png";
import Teacher6 from "../Assets/Profile/Teacher6.png";
import Line6 from "../Assets/Line6.png";
import BigProfile1 from "../Assets/Profile/BigProfile1.png";
import BigProfile2 from "../Assets/Profile/BigProfile2.png";
import BigProfile3 from "../Assets/Profile/BigProfile3.png";
import BigProfile4 from "../Assets/Profile/BigProfile4.png";
import BigProfile5 from "../Assets/Profile/BigProfile5.png";
import warning from "../Assets/warning.png";
import cancel from "../Assets/cancel.png";

function Teachers() {
  const editorRef = useRef(null);
  return (
    <div>
      <div>

      <div style={{display: "flex", justifyContent: "space-between", direction: "rtl", margin: "15px", padding: "18px"}}>
      {/* {masterInfo.map((master: any) => {
        master.imgMaster ? (
          )})}
        */}
        <div className='profilesContainer'>
          <div>
            {/* <img               
              src={require(`../Assets/Teachers/${master.Profileimg}`)}
 /> */}
 </div>
 <div>
  <div style={{display: "flex", justifyContent: "space-between"}}>

 <div className='imgProfile'>
  <img src={Teacher1} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher2} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher3} className="Profileimg" />
 </div>
  </div>

  <div style={{display: "flex", justifyContent: "space-between"}}>
 <div className='imgProfile'>
  <img src={Teacher4} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher5} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher6} className="Profileimg" />
 </div>
  </div>


          </div>

          <div className='profilebottom'>
            <button className='ProfilesSubmitBtn' >
            تایید
            </button>
          </div>
        </div>
        <div className='textarea'>
        <Editor
        //  onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
         
         init={{
           height: 200,
           width: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px,backgroundColor:" blue" }'
         }}
       />
       <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4px"}}>
        <button className='submitbtn' >ثبت </button>
       </div>

        </div>
      </div>
      <img src={Line6} />

      </div>
      <div>
        <div style={{display: "flex"}}>

          <div>
            <img src={BigProfile1} style={{width:"250px", height: "200px"}} />
          </div>
          <div>
          <img src={BigProfile2}  style={{width:"250px", height: "200px"}} />
          </div>
          <div>
          <img src={BigProfile3}  style={{width:"250px", height: "160px"}} />
          </div>
          <div>
          <img src={BigProfile4}  style={{width:"250px", height: "160px"}} />
          </div>

        </div>
        <div style={{display: "flex"}}>
      
          <div className='yellowdiv' >
            <img src={warning} />
            اخطار
          </div>
          <div className='Reddiv'>
          <img src={cancel} />
          مسدود
          </div>
          <div className='yellowdiv' >
            <img src={warning} />
            اخطار
          </div>
          <div className='Reddiv'>
          <img src={cancel} />
          مسدود
          </div><div className='yellowdiv' >
            <img src={warning} />
            اخطار
          </div>
          <div className='Reddiv'>
          <img src={cancel} />
          مسدود
          </div>
          <div className='yellowdiv' >
            <img src={warning} />
            اخطار
          </div>
          <div className='Reddiv'>
          <img src={cancel} />
          مسدود
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Teachers
