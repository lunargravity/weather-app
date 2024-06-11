import CurrentWeather from './CurrentWeather';
import OtherWeather from './OtherWeather';

export default function ForecastWidget({ temperature, date, time }) {
  return (
    <div className='seven-day-forecast'>
      <CurrentWeather />
      <OtherWeather />
      <OtherWeather />
      <OtherWeather />
      <OtherWeather />
      <OtherWeather />
      <OtherWeather />
    </div>
  );
}
