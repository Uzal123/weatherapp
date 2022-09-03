import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as Search } from "../Search.svg";

function WeatherCard() {
    //   const date = new Date();
    //   const time = date.toLocaleString("en-us", {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     weekday: "short",
    //     month: "short",
    //     day: "2-digit",
    //     timeZoneName: "longOffset",
    //   });
 

  const DefaultData = async () => {
    if (!WeatherInfo) {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=london&appid=f8ae56befa13e3066c7490be4087a408&units=metric`
        );
        const Data = await res.data;

        setCity(Data.name);
        setTemp(Data.main.temp);
        setFeels(Data.main.feels_like);
        setDesc(Data.weather[0].description);
        setIcon(Data.weather[0].icon);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userLoc}&appid=f8ae56befa13e3066c7490be4087a408&units=metric`
      );
      const Data = await res.data;
      console.log(Data);

      setCity(Data.name);
      setTemp(Data.main.temp);
      setFeels(Data.main.feels_like);
      setDesc(Data.weather[0].description);
      setIcon(Data.weather[0].icon);
      setWeatherInfo(true);
    } catch (error) {
      console.log(error);
    }
  };
  const [userLoc, setuserLoc] = useState("");
  const [Temp, setTemp] = useState();
  const [City, setCity] = useState();
  const [Feels, setFeels] = useState();
  const [Desc, setDesc] = useState();
  const [Icon, setIcon] = useState();
  const [WeatherInfo, setWeatherInfo] = useState(false);

  useEffect(() => {
    DefaultData();
  });
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center bg-gray-300 sm:w-1/3 p-4 rounded-lg mt-4">
        <form onSubmit={getData} className="flex justify-between w-full">
          <input
            type="text"
            className="bg-inherit text-black outline-none w-full"
            placeholder="Enter your city"
            id="userInput"
            onChange={(e) => setuserLoc(e.target.value)}
          />
          <Search className="w-6 h-6" onClick={getData} />
        </form>
      </div>
      <div className="w-full flex justify-center p-8 gap-4">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-xl">
          <div className="text-center">
            Weather in <span className="">{City}</span>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-2 justify-between items-center sm:gap-4 gap-2">
            <div className="flex items-center justify-center">
              <img
                src={`http://openweathermap.org/img/wn/${Icon}.png`}
                className="sm:w-36 w-24 h-24 sm:h-36"
                alt="error"
              />
            </div>
            <div className="text-3xl sm:text-5xl font-bold text-center">
              {Temp} °C
            </div>
            <div className="col-span-2 sm:col-span-1 flex sm:block justify-between pb-2 sm:p-0">
              <div className="font-bold text-center w-full">{Desc}</div>
              <div className="text-center w-full">Feels like {Feels} °</div>
            </div>
          </div>
          {/* <div className="text-center">
            Date and time in <span>{City}: </span>
            <div>{time}</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
