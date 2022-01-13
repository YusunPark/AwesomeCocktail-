import React from "react";
import "./About.css";

import { useLocation } from "react-router-dom";
// import image from '/img/logo192.png'

const About = () => {
  //   const { text } = useParams();
  const location = useLocation();
  console.log(location.state.text);

  return (
    <div>
      <h1>{location.state.text}의 검색 결과입니다.</h1>
      <li>
          <img src={process.env.PUBLIC_URL +'/img/logo192.png'} alt="test"/>
        <span>설명</span>
      </li>
      <li>
          <img src={process.env.PUBLIC_URL +'/img/logo192.png'} alt="test"/>
        <span>설명</span>
      </li>
    </div>
  );
};

export default About;
