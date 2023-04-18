import {Fragment, useState, useEffect} from 'react'
import WeatherForm from './WeatherForm.jsx'
import WeatherMainInfo from './WeatherMainInfo.jsx'
const WeatherApp = () => {
const [weather,setWeather] = useState(null)
useEffect(() =>{
    loadInfo()
},[])
useEffect(() =>{
    document.title = `weather | ${weather?.location.name??""}`
},[weather])
 async function loadInfo(city = 'London') {
    try {
        
        const request = await fetch (`${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${city}`)
        const jsonRequest = await request.json()
        setWeather(jsonRequest)
        console.log( weather)
        
    } catch (error) {
        
    }
}
function onChangeCity (city){
    setWeather(null)
    loadInfo(city)
    
}
    return ( 
        <Fragment>
            <h1>WeatherApp</h1>
             <WeatherForm onChangeCity={onChangeCity}/>
             <WeatherMainInfo weather={weather} />
        </Fragment>
     );
}
 
export default WeatherApp;