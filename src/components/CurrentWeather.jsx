export default function CurrentWeather() {
  return (
    <div className='current-weather-widget'>
      <div className='date-time'>
        <h3 className='date'>MONDAY</h3>
        <h3 className='time'>TIME</h3>
      </div>
      <div className='temp-and-icon'>
        <h1 className='temp'>77°F</h1>
        <img
          src='src\icons\square-placeholder.jpg'
          alt='current-weather'
          className='icon'
        />
      </div>
    </div>
  );
}
