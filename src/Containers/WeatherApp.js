import React,{useState} from 'react'
import {Row,Col} from 'antd';
import axios from 'axios';
import Inputweather from '../Component/Inputweather';
import DisplayWeather from '../Component/DisplayWeather';
import './WeatherApp.css'

const WeatherApp = () => {

    const [weatherData,setWeatherData]=useState(null);

    const API_KEY = '3dd2c5a2af16bf6f9393c138c8d079c0'

   const fetchWeather=(city)=>{
     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

     .then((response)=>{
       setWeatherData(response.data)
     })
     .catch((err)=>{
        console.error('error featching weather data',err)
     })
   }

  return (
    <div>

        <Row justify='center' className='weather-app-container'>
         <Col span={12}>
            <h2 className='weather-title'>Weather App</h2>
            <Inputweather fetchWeather={fetchWeather}> </Inputweather>
            <DisplayWeather fetchData={weatherData}> </DisplayWeather>
         </Col>
        </Row>

    </div>
  )
}

export default WeatherApp