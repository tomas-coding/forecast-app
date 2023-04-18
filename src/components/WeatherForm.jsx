import React, {Fragment, useState} from 'react'

const WeatherForm = ({onChangeCity}) => {
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (city !== "") {
      onChangeCity(city);
    }
  }
    return ( 
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleChange}
      />
    </form>
     );
}
 
export default WeatherForm;