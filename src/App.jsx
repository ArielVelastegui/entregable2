import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Weather from "./components/Weather";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  

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
          .then(res=>{
            setWeather(res.data)
            const cel = (res.data.main.temp -273.15).toFixed(1)
            const far = (cel*9/5 + 32).toFixed(1)
            setTemp({cel,far})
          })
          .catch(err=>err)
      
    }
  }, [coords]);
  console.log(weather)
  return (
    <div className="App">
      {weather?<Weather weather={weather} temp={temp}/>:<Loading />}
    </div>
  );
}

export default App;
