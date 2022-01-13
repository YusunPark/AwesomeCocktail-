import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(
      {
        pathname: "/about",
      },
      { state: { text } }
    );
  };

  return (
    <div className="main">
      <b>제목 자리입니다.</b>

      <div className="serch-box">
        <div>
          <span>값:{text}</span>
        </div>

        <form onSubmit={onSubmit}>
          <div className="serch">
            <input
              onChange={onChange}
              value={text}
              placeholder="관련 정보를 입력하는 공간임"
            />
            <button type="submit">검색</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
