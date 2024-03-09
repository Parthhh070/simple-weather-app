import "./searchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const APIURL = "https://api.openweathermap.org/data/2.5/weather";

  const APIKEY = "a831c707eec49db2e0fba6ae7cbd5b01";

  let getWeather = async () => {
    try {
      let res = await fetch(`${APIURL}?q=${city}&appid=${APIKEY}&units=metric`);
      let response = await res.json();

      let result = {
        city: city,
        temp: response.main.temp,
        humidity: response.main.humidity,
        tempMin: response.main.temp_min,
        tempMax: response.main.temp_max,
        feelsLike: response.main.feels_like,
        weather: response.weather[0].description,
      };

      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      setCity("");
      event.preventDefault();
      let newInfo = await getWeather();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      Search your city's weather
      <form>
        <br></br>
        <br></br>
        <TextField
          id="city"
          label="enter city"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>no such place exist</p>}
      </form>
    </div>
  );
}
