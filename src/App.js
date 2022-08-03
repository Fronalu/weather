import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import CityButtons from './components/CityButtons'
import Search from './components/Search'
import TimeAndCity from './components/TimeAndCity';
import WeatherIndicators from './components/WeatherIndicators';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './components/services/weatherService';
import { setWeather } from './redux/slices/weatherSlice';
import { setUnits } from './redux/slices/unitsSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const dispatch = useDispatch()

  const query = useSelector(state => state.query.query)
  const units = useSelector(state => state.units.units)
  const weather = useSelector(state => state.weather.weather)

  useEffect(() => {
    const fetchWeather = async () => {

      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then(data => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        dispatch(setWeather(data))
      });
    }

    fetchWeather()
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };



  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}>
      <CityButtons />
      <div className="flex flex-row justify-center items-center">
        <Search />
        {/* <Degrees /> */}
      </div>

      {weather && (
        <div>
          <TimeAndCity weather={weather} />
          <WeatherIndicators weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />

    </div>
  );
}

export default App;
