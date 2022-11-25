import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    const success = (pos) => {
      setCoords({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const apiKey = "df460505930b5f66a5d364a0d352ee19";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apiKey}`

        axios.get(URL)
          .then(res=>setWeather(res.data))
          .catch(err=>err)
      
    }
  }, [coords]);
  console.log(weather)
  return (
    <div className="App">
      <Weather weather={weather}/>
    </div>
  );
}

export default App;
