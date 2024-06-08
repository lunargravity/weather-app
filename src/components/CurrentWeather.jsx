export default function CurrentWeather() {
  return (
    <div className='current-weather-widget'>
      <div className='date-time'>
        <h3 className='date'>MONDAY</h3>
        <h3 className='time'>TIME</h3>
      </div>
      <div className='temp-and-icon'>
        <div className='temp'>
          <h1>77°F</h1>
          <h4>64°/89°</h4>
        </div>

        <p className='icon'>&#9925;</p>
      </div>
    </div>
  );
}
