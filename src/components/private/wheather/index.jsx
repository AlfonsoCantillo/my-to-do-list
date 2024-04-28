import { useEffect, useState } from "react";
import { TiWeatherNight } from "react-icons/ti";

const key = "d9561fae5d5db23e1489598e134fc03e";
const url = "https://api.openweathermap.org/data/2.5/weather?q=Barranquilla,169&appid="+key+"&units=metric";

const Wheather = () => {
  const [clima,setClima] = useState("");
  useEffect(() =>{
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setClima(data.main.temp);
    })
  },[]);
  return (
    <div className="text-muted wheather" data-bs-toggle="tooltip" data-bs-placement="top" title="Clima en Barranquilla, Colombia">
      <TiWeatherNight style={{color:"yellow",fontSize: '26px'}}/>
      {Math.round(clima)}
      <sup>°c</sup>
    </div>
  );
  
}

export default Wheather;