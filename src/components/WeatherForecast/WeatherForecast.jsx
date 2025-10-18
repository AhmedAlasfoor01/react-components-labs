import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import WeatherData from '../WeatherData/WeatherData.jsx';

const WeatherForecast = (props) => {
  return(
    <>
      <div className="weather">
  <h2>Day of the Week</h2>
  <WeatherIcon img={props.img} alt={props.Altimg} />
  <WeatherData
  day={props.day}
  conditions={props.conditions}
  time ={props.time} />



</div>
    </>
  )
}

export default WeatherForecast
//we imported bith ican and the data to the  weatherfaorecasts.jsx so we can work on them clearly and easily