import { useEffect } from "react";
import { useState } from "react";
import { getBeachWeatherData } from "../../api/WeatherForecast";

export const Weather = () => {
  // Get today's date
  const currentDate = new Date(Date.now());
  const today = currentDate.toISOString();
  console.log(today);

  const [location, setlocation] = useState(
    ("50.8202727622679", "-0.145883429349536")
  );
  // const [startDate, setStartDate] = useState(today);
  // const [endDate, setEndDate] = useState(today);
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      await getBeachWeatherData({
        // SearchParams
        startDateTime: today,
        endDateTime: today,
        location,
      }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [location]);

  return (
    <div>
      <p>Weather Forecast</p>
      <div>
        <p className="day">Monday </p>
        <p className="temperature">22°</p>
      </div>
    </div>
  );
};
