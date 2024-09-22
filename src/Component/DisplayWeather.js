import React from 'react'
import { Card,Row,Col } from "antd";
import './DisplayWeather.css'

const DisplayWeather = ({fetchData}) => {

    if(!fetchData){
        return null;
    }

    const {name,main,wind,weather}=fetchData

  return (
    <div>
       <Card className='weather-card'>
        <Row>
            <Col span={24}>
                <h2 className='weather-city'>{name}</h2>
                <p className='weather-info'>Temperature: {main.temp}</p>
                <p className='weather-info'>Humidity: {main.humidity}</p>
                <p className='weather-info'>Wind Speed: {wind.speed}</p>
                <p className='weather-info'>Condition: {weather[0].description}</p>
            </Col>
        </Row>
       </Card>
    </div>
  )
}

export default DisplayWeather