import React from 'react'
const WeatherMainInfo = ({weather}) => {
    return ( <div>
        <div className='info-container'>
        <div><h2>City: {weather?.location.name}</h2>
        <h2>Country: {weather?.location.country}</h2>
        <h2>Temperature: {weather?.current.temp_c}°C</h2></div>
        
        <div><img src={`http:${weather?.current.condition.icon}`} width="128" alt={weather?.current.condition.text} /></div>
        </div>
        
        <div className='map-container'><iframe className='map-content'
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="80%"
        height="550"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe></div>
    </div> );
}
 
export default WeatherMainInfo;