import React, {Component} from 'react';

const Weather = props => (
        <div>
            { props.city && props.country && 
                <p>Location: {props.city}, {props.country}</p> }
            {props.temperature && 
               <p>Temperature: {props.temperature}</p> }
            {props.humidity && 
                <p>Humidity: {props.humidity}</p> }
            {props.humidity &&
                <p>Description: {props.description}</p>}
            {props.sunrise &&
                <p>Sunrise: {props.sunrise}</p>}
            {props.sunset &&
                <p>Sunset: {props.sunset}</p>}
            {props.error && 
                <p>{props.error}</p> }
        </div>
);

  
export default Weather;
  