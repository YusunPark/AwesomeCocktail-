import React, { useEffect, useState } from "react";
import "./About.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
// import image from '/img/logo192.png'

const About = () => {
  //   const { text } = useParams();
  const location = useLocation();
  console.log(location.state.text);
  console.log(
    `www.thecocktaildb.com/api/json/v1/1/search.php?s=${location.state.text}`
  );
  const [data, setData] = useState({});

  // const keyword = params.get("q")
  useEffect(() => {
    console.log("effect");

    (async () => {
      const { data } = await axios.get(
        "https://thecocktaildb.com/api/json/v1/1/search.php",
        {
          params: { s: location.state.text },
        }
      );
      setData(data && <p>hello</p>);
    })();
  }, []);

  return (
    <div>
      <h1>{location.state.text}의 검색 결과입니다.</h1>

      <Link to="/">Go Home</Link>

      {/* <div>{JSON.stringify(data)}</div> */}

      <li>
        <img src={JSON.stringify(data.drinks[0].strDrinkThumb)} alt={JSON.stringify(data.drinks[0].strDrink)}/>

        <div>
          <div>{JSON.stringify(data.drinks[0].strDrink)}</div>
          <div>{JSON.stringify(data.drinks[0].strCategory)}</div>
          <div>{JSON.stringify(data.drinks[0].strAlcoholic)}</div>
          <div>{JSON.stringify(data.drinks[0].strInstructions)}</div>
          <div>{JSON.stringify(data.drinks[0].strIngredient1)}</div>
          <div>{JSON.stringify(data.drinks[0].strMeasure1)}</div>
          <div>{JSON.stringify(data.drinks[0].strIngredient2)}</div>
          <div>{JSON.stringify(data.drinks[0].strMeasure2)}</div>
          <div>{JSON.stringify(data.drinks[0].strIngredient3)}</div>
          <div>{JSON.stringify(data.drinks[0].strMeasure3)}</div>
          <div>{JSON.stringify(data.drinks[0].strIngredient4)}</div>
          <div>{JSON.stringify(data.drinks[0].strMeasure4)}</div>
        </div>
      </li>
      <li>
        <img src={process.env.PUBLIC_URL + "/img/logo192.png"} alt="test" />
        <span>설명</span>
      </li>
    </div>
  );
};

export default About;
