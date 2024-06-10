import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import Toggle from './components/Toggle';
import OtherWeather from './components/OtherWeather';

export default function App() {
  return (
    <div className='main-dashboard'>
      <Header />
      <Toggle left='°F' right='°C' />
      <div className='seven-day-forecast'>
        <CurrentWeather />
        <OtherWeather />
        <OtherWeather />
        <OtherWeather />
        <OtherWeather />
        <OtherWeather />
        <OtherWeather />
      </div>
    </div>
  );
}
