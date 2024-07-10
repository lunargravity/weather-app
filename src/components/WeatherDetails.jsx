export default function WeatherDetails({ setShowModal, isCelsius, details }) {
    const feelsLike = isCelsius
        ? `${(details.main.feels_like - 273.15).toFixed(0)} °C`
        : `${((details.main.feels_like - 273.15) * (9 / 5) + 32).toFixed(0)} °F`;

    const description = details.weather[0].description;
    const temp = isCelsius
        ? `${(details.main.temp - 273.15).toFixed(0)} °C`
        : `${((details.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)} °F`;
    const max = isCelsius
        ? `${(details.main.temp_max - 273.15).toFixed(0)} °C`
        : `${((details.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0)} °F`;
    const min = isCelsius
        ? `${(details.main.temp_min - 273.15).toFixed(0)} °C`
        : `${((details.main.temp_min - 273.15) * (9 / 5) + 32).toFixed(0)} °F`;
    const humidity = 0; // percentage
    const windSpeed = 0; // meter/sec
    const windDeg = 0; // degrees
    const windGust = 0; // meter/sec
    const clouds = 0; // percentage
    const rain = 0; // rain volume in mm over last hour
    const snow = 0; // snow volume in mm over last hour
    const sunrise = 0; // time in UTC
    const sunset = 0; // time in UTC

    return (
        <div className='modal-backdrop'>
            <div className='weather-details-container'>
                <div className='weather-details-content'>
                    <div className='closeButton'>
                        <button onClick={() => setShowModal(false)}>&times;</button>
                    </div>
                    <div className='weather-details'>
                        <div className='temp-header'>
                            <div className='circle'>
                                <h1>{temp}</h1>
                            </div>
                            <div className='min-max'>
                                <h3>Low: {min}</h3>
                                <h3>High: {max}</h3>
                            </div>
                        </div>
                        <div className='additional-info'>
                            <p></p>
                            <p>
                                <em>
                                    feels like... {feelsLike} with {description}.
                                </em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
