import React, { useEffect, useState } from "react";

const Weather = ({weather}) => {
  console.log({weather});


const [temp, setTemp] = useState(Number(weather?.main.temp).toFixed(2) )
const [hack, setHack] = useState(false)
const [hackF, setHackF] = useState(false)
const [cel, setCel] = useState(temp-273.15)
const [far, setFar] = useState((temp - 273.15)*9/5 + 32)




  return (
    <article className="card">
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
         <span className="temp"> {hackF?`${far.toFixed(2)}°F`:''}</span>
        </button>
        <button className="btn" onClick={ ()=>
          {setHack(!hack)}}>
          Degrees Celsius
          <br />
         <span className="temp"> {hack?`${cel.toFixed(2)}°C`:''}</span>
        </button>
    </article>
  );
};

export default Weather;
