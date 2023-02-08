import React from "react";
import "./AboutBishjo.css";
import Divider from "../Assets/Divider.png";
import help from "../Assets/help.png";

function AboutBishjo() {
  return (
    <div className="myMain">
      <div className="titleone">سوالات پر تکرار</div>

      <div className="QuestionsContainer">
        <img className="pic1" src={Divider} alt="" />
        <div className="ContaineR1">
          <div className="BTTTN">
            <button className="bTn">
              <div className="answer">
              پاسخ
              </div>
              </button>
          </div>
          <img className="help" src={help} alt="" />
          <div className="TXT1">چگونه اشتراک تهیه کنم؟</div>
        </div>
      </div>
      <div className="QuestionsContainer">
        <img className="pic1" src={Divider} alt="" />
        <div className="ContaineR1">
          <img className="help" src={help} alt="" />
          <div className="TXT1">چگونه اشتراک خود را تمدید کنم؟</div>
          <div className="BTTTN">
            <button className="bTn">پاسخ</button>
          </div>
        </div>
      </div>
      <div className="QuestionsContainer">
        <img className="pic1" src={Divider} alt="" />
        <div className="ContaineR1">
          <img className="help" src={help} alt="" />
          <div className="TXT1">چگونه تدریس کنم؟</div>
          <div className="BTTTN">
            <button className="bTn">پاسخ</button>
          </div>
        </div>
      </div>
      <div className="QuestionsContainer">
        <img className="pic1" src={Divider} alt="" />
        <div className="ContaineR1">
          <img className="help" src={help} alt="" />
          <div className="TXT1">چگونه از دوره های جدید با خبر بشم؟</div>
          <div className="BTTTN">
            <button className="bTn">پاسخ</button>
          </div>
        </div>
      </div>
      <div className="QuestionsContainer">
        <img className="pic1" src={Divider} alt="" />
        <div className="ContaineR1">
          <img className="help" src={help} alt="" />
          <div className="TXT1">نمیتوانم به اکانتم وارد بشم </div>
          <div className="BTTTN">
            <button className="bTn">پاسخ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBishjo;
