import React, { useState, useEffect, useRef, useMemo } from "react";

const Component = () => {
  const [inputValue, setInputValue] = useState("");
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState();

  const valueNumber = useMemo(() => {
    return slow(number);
  }, [number]);

  const valueTheme = {
    background: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  const input = useRef();

  // useEffect will run when inputValue changes
  useEffect(() => {
    if (inputValue) {
      console.log(`Input value has been updated to: ${inputValue}`);
    }
  }, [inputValue]);

  const display = () => {
    console.log(input.current.value);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setTheme((prev) => !prev)}>Show</button>

      <div style={valueTheme}>{valueNumber}</div>

      <input
        ref={input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
      <p>Current input value: {inputValue}</p>
      <button onClick={display}>show</button>
    </div>
  );
};

function slow(num) {
  for (let i = 0; i <= 1000000; i++) {}
  return num * 2;
}

export default Component;

// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function WeatherApp() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState("");
//   const [error, setError] = useState(null);

//   const getWeather = async () => {
//     const apiKey = "your-api-key-here"; // replace with your OpenWeatherMap API key
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       const data = await response.json();
//       setWeatherData(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setWeatherData(null);
//     }
//   };

//   const handleSearch = () => {
//     if (city.trim()) {
//       getWeather();
//       setCity("");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h1>Weather App</h1>

//       <div>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city"
//           style={{ padding: "10px", fontSize: "16px" }}
//         />
//         <button
//           onClick={handleSearch}
//           style={{
//             padding: "10px",
//             fontSize: "16px",
//             cursor: "pointer",
//             marginLeft: "10px",
//           }}
//         >
//           Search
//         </button>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {weatherData && (
//         <div>
//           <h2>
//             {weatherData.name}, {weatherData.sys.country}
//           </h2>
//           <h3>{weatherData.weather[0].description}</h3>
//           <h4>Temperature: {weatherData.main.temp}°C</h4>
//           <h5>Humidity: {weatherData.main.humidity}%</h5>
//           <h5>Wind: {weatherData.wind.speed} m/s</h5>
//           <img
//             src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
//             alt={weatherData.weather[0].description}
//             style={{ width: "50px", height: "50px" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// ReactDOM.render(<WeatherApp />, document.getElementById("root"));
