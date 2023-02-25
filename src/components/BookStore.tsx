import { Button, TextField, InputAdornment } from "@mui/material";
// import search from "../Assets/search.png";
import searchICON from "../Assets/searchICON.png";
import favorite from "../Assets/WhyIcon/favorite.png";
import Star from "../Assets/WhyIcon/Star.png"
import sell from "../Assets/sell.png"
import CTA from "../Assets/CTA.png"



import { ShowAllCourse } from "../features/Bishjo/CourseSlice"
import { ShowAllBooks } from "../features/Bishjo/BooksSlice"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



import React, { useState } from 'react';
import "./BookStore.css";

function BookStore() {
  const ChildDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  
  const { id } = useParams();
  console.log(id);

  // const AllCourse = useSelector(ShowAllCourse);
  const AllBooks = useSelector(ShowAllBooks);
console.log(AllBooks.payload.books.books)
  // const Masters = useSelector(ShowAllMasters);



  return (
    <div className='booksmaincontent'>
      <div className='bookstxt'>کتاب های راهنمای ورود به دنیای هنر دیجیتال</div>
      <div className='bookstxt1'>با کتاب های راهنمای  مسیر های یادگیری مختلف، بهترین مسیر رو برای خودت پیدا کن</div>
      <div>
            <TextField
            placeholder="عنوان کتاب را وارد کنید"
              style={{
                marginLeft: "380px",
                marginTop: "50px",
                width: "450px",
                transition: "width 2s ease-in",
                backgroundColor: "#EAF0FF",
                borderRadius: "16px",
                border: "none",
                justifyContent: "space-between",
                direction: "rtl",
                // justifyContent: "center",
                // alignItems: "center",
                // display: "flex",

              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                    >
                      <img src={searchICON} alt="" />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
      
    </div>

        {AllBooks.payload.books.books.map((item: any) => {
          return <>


    <div style={{
      marginTop: "50px",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      display: "flex",

    }}>
      <div style={{
        backgroundColor: "#313B52", 
        width: "800px",
        height: "245px",
        borderRadius: "16px",
        direction: "rtl",

      }}>
        
          <div 
          style={{
            display: "flex",}}
          >
       
            <div>
              <img style={{
                width: "180px",
                height: "200px",
                margin: "20px",
              }} 
              src={require(`../Assets/Books/${item.picture}`)} />
            </div>

            <div>            
            <div style={{display: "flex", justifyContent: "space-between", direction: "ltr",
              // width: "100%",
              width: "560px",

          
          }}>

              <div style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "left",
                alignItems: "left",
                marginLeft: "4px",

              }} >
                <div 
                >
                  <img
                  
                  style={{
                    width: "15px",
                    height: "16px",
                    marginTop: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginLeft: "5px",

                  }}
                  src={favorite} />
                </div>
                <div style={{
                  marginLeft: "10px",
                  color: "#FDBE34",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // top: "0px",
                }}>
                  {item.rate}
                </div>
                <div style={{
                  marginLeft: "4px",
                  marginTop: "2px",
                }} >
                <img 
                 src={Star} />
                </div>

              </div>
        <div style={{
          color: "#EAF0FF",
          marginTop: "20px",
        }}>
        {item.name}
        </div>

          </div>

          <div style={{width: "520px", color: "#EAF0FF", fontSize: "12px", marginTop: "15px"}}>
          <label >
            {item.information}
          </label>
          </div>

          <div style={{marginTop: "80px", justifyContent: "space-between", display: "flex",}}>

          <div style={{display: "flex",}}>
          <div style={{justifyContent: "center", alignItems: "center",
           }}>
            <img src={sell} style={{width: "15px", height: "15px"}} />
          </div>
          <div style={{color: "#EAF0FF",fontSize: "12px", marginRight: "5px"}}>کیفیت کاری</div>
          </div>

          <div style={{display: "flex",}}>
            <div style={{color: "#EAF0FF",fontSize: "12px", marginLeft: "5px", justifyContent: "center", alignItems: "center" }}>
            مشاهده و دانلود
            </div>
            <div >
              <img style={{width: "20px", height: "20px"}} src={CTA}  />
            </div>
          </div>

          </div>

      </div>

      </div>
    </div>
   </div>
        </>
        })}
    </div>
  )
}

export default BookStore
