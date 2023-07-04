import React , {useState} from "react";
import axios from "axios";

function App() {
  const [data , setData] = useState({})
  const [location , setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=96720f7fff25cf94f0740ef4778851db`;

  // const url2 = `
  // https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=b4af8e24e9b6c00f5d272f7feac43cbc
  // `

  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }
  return (
    <div className="app">
      <div className="search">
        <center>
        <input value={location} type="text" onChange={event=>setLocation(event.target.value)} placeholder="Enter the location..." onKeyPress={searchLocation} />
        </center>
      
      </div>
      
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {
              data.main? <h1>{data.main.temp.toFixed()} °F</h1> : <h1>°F</h1>
            }
            
          </div>
          <div className="description">
            {
              data.weather? <p>{data.weather[0].main}</p> :null
            }
          </div>
        </div>

        {
          data.name !== undefined &&
          <div className="bottom">
          <div className="feels">
            {data.main? <p className="bold">{data.main.feels_like.toFixed()} °F</p>:null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main? <p className="bold">{data.main.humidity} %</p>:null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind? <p className="bold">{data.main.speed} MPH</p>:null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
        
      </div>
    </div>
  );
}

export default App;
