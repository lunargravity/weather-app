import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import Toggle from './components/Toggle';
import WeatherWidget from './components/WeatherWidgets';

export default function App() {
  return (
    <div>
      <Header />
      <Toggle left='°F' right='°C' />
      <div className='seven-day-forecast'>
        <CurrentWeather />
        <WeatherWidget />
      </div>
    </div>
  );
}
