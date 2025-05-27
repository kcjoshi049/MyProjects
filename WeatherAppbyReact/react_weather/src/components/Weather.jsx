import { useEffect, useRef, useState } from "react";
import { IoLocation, IoSearchSharp } from "react-icons/io5";
import "./Weather.css";

export default function Weather() {
  // states to handle the celcius and ferenhite
  let [span1, setSpan1] = useState({});
  let [span2, setSpan2] = useState({});
  let [tempValue, setTempValue] = useState("");
  let [isCel, setIsCel] = useState(true);

  let handleSpan1 = () => {
    setSpan1({ fontWeight: "bold" });
    setSpan2({ fontWeight: "500"});
    setIsCel(true);
  };

  let handleSpan2 = () => {
    setSpan2({ fontWeight: "bold", color:"white" });
    setSpan1({ fontWeight: "500", color:"rgba(236, 242, 236, 0.7)" });
    setIsCel(false);
  };

  // states to handle the api data
  let [apiData, setApiData] = useState(null);
  let [myLocation, setMyLocation] = useState("new Delhi");

  // states to set the input value
  let [inputValue, setInputValue] = useState("");

  // states for loading and error handling
  let [loading, setLoading] = useState(true);
  let [Error, setError] = useState("");

  // state to handle the time
  let [time, setTime] = useState("");

  let formData = useRef(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.current.value);
    setMyLocation(formData.current.value);
    console.log(myLocation);
    setInputValue("");
  };

  const API = `https://api.weatherapi.com/v1/current.json?key=1a234154a86c433badd132433240712&q=${myLocation}&aqi=no`;

  let fetchApi = async () => {
    try {
      let res = await fetch(API);
      const data = await res.json();
      setApiData(data);
      setLoading(false);
      //   console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  let date = new Date();
  useEffect(() => {
    fetchApi();
  }, [myLocation]);

  useEffect(() => {
    if (apiData) { 
        if(isCel){
            setTempValue(apiData.current.temp_c);
        }
        else{
            setTempValue(apiData.current.temp_f);
        }
      let interval = setInterval(() => {
        let mydate = new Date();
        let mytime = mydate.toLocaleTimeString("en-US", {
          timeZone: apiData.location.tz_id,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setTime(mytime);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [apiData, isCel]);

  if (loading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  if (Error) {
    return (
      <>
        <h1>{Error.message}</h1>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="searchBox">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search here"
              id="searh-input"
              ref={formData}
              required
              autoComplete="none"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
            <button type="submit">
              <IoSearchSharp className="searchIcon" />
            </button>
          </form>
        </div>
        <div className="main_location_container">
          <div className="location_container">
            <div className="location">
              <IoLocation className="locationIcon" />
              <h3>{apiData.location.name},</h3>
              <h3>{apiData.location.country}</h3>
            </div>
            <div className="date">
              <h3 className="date">
                {date.toLocaleDateString("en-US", {
                  timeZone: apiData.location.tz_id,
                  dateStyle: "medium",
                })}
              </h3>
            </div>
          </div>
          <h1 className="time">{time}</h1>
        </div>
        <div className="time_weather">
          <img src={apiData.current.condition.icon} alt="img" id="myimg" />
          <div className="temprature">
            <div className="temp_details">
              <div className="temprature">
                <p className="temprature_digit">
                  {tempValue}
                  <sup>o</sup>
                </p>
                <h2 className="Cel_Fre">
                  <span onClick={handleSpan1} style={span1} id="span1">
                    C
                  </span>
                  <span>/</span>
                  <span onClick={handleSpan2} style={span2} id="span2">
                    F
                  </span>
                </h2>
              </div>
              <h2>{apiData.current.condition.text}</h2>
            </div>
          </div>
        </div>

        <div className="otherDetails">
          <div className="humidity_windspeed">
            <div className="humidity">
                <img src="../public/images/humidity.png" alt="humidity" className="otherimg" />
              <div className="des">
                <h3>Humidity</h3>
                <h3>{apiData.current.humidity}</h3>
              </div>
            </div>
            <div className="windspeed">
              <img
                src="../public/images/wind_speed.png"
                alt="wind_speed"
                className="otherimg"
              />
              <div className="des">
                <h3>Wind</h3>
                <h3>{apiData.current.wind_kph}km/h</h3>
              </div>
            </div>
          </div>
          <div className="visibility_direction">
            <div className="wind-direction">
              <img
                src="../public/images/wind-direction.png"
                alt="wind_direction"
                className="otherimg"
              />
              <div className="des">
                <h3>Wind direction</h3>
                <h3>{apiData.current.wind_dir}</h3>
              </div>
            </div>
            <div className="visibility">
              <img
                src="../public/images/visible.png"
                alt="visibility"
                className="otherimg"
              />
              <div className="des">
                <h3>visibility</h3>
                <h3>{apiData.current.vis_km}km</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
