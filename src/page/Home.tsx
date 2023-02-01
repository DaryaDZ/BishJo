import React from "react";
import Introduction from './Introduction'
import Courses from "./Courses";
import Software from "./Software";
import Teachers from "./Teachers";
import Why from "./Why";


const Home = () => {

  return (
   <>
      <Introduction />
      <Courses />
      <Software />
      <Teachers />
      <Why/>
   </>
  );
};

export default Home;
