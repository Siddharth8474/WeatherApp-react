import React,{useState} from 'react'
import { Input,Button } from 'antd';
import './InputWeather.css';


const Inputweather = ({fetchWeather}) => {

    const [city,setCity]=useState('')

    const handleChange=(event)=>{
      setCity(event.target.value)
    }

    const handleClick=()=>{
        console.log(city)
        if(city){
          fetchWeather(city);
          setCity('');
        }
    };

  return (
    <div className='weather-input-container'>
    <Input placeholder="Enter-City"
      name='city'
      onChange={handleChange}
      className='weather-input'
     />
     <Button type="primary" className='weather-button' onClick={handleClick}>Get Weather</Button>
    </div>
  )
}

export default Inputweather