import React, { useEffect, useState } from "react";

const Weather = ({weather,temp}) => {
  console.log({weather});
  


const [hack, setHack] = useState(false)
const [hackF, setHackF] = useState(false)

temp?.cel>17?"card":"cold"


  return (
    <article className={temp?.cel>17?"card":"cold"}>
      <header>
        <h1 className="card_title">Weather App</h1>
        <h2 className="card_subtitle">
          {weather?.name}, {weather?.sys.country}
        </h2>
      </header>
      <div className="info_container">
      <section className="card_icon-container">
        <img
          className="card_icon"
          src={
            weather &&
            `http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`
          }
          alt=""
        />
        <h3 className="card_temp"> {weather?.main.temp} K</h3>
      </section>
      <section className="card_info">
        <h3>{weather?.weather[0].description}</h3>
        <ul>
          <li>
            <span className="subtitle">Wind speed:</span> {weather?.wind.speed}
            m/s
          </li>
          <li>
            <span className="subtitle">Clouds:</span> {weather?.clouds.all}%
          </li>
          <li>
            <span className="subtitle">Pressure:</span> {weather?.main.pressure}
            hPA
          </li>
        </ul>
      </section>
      </div>
      <footer>
      </footer>
        <button className="btn" onClick={ ()=>
          {setHackF(!hackF)}}>
          Degrees Farenheit
          <br />
         <span className="temp"> {hackF?`${temp?.far}°F`:''}</span>
        </button>
        <button className="btn" onClick={ ()=>
          {setHack(!hack)}}>
          Degrees Celsius
          <br />
         <span className="temp"> {hack?`${temp?.cel }°C`:''}</span>
        </button>
    </article>
  );
};

export default Weather;
