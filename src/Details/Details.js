import './Details.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';

export default function Details() {
    const [data, setData] = useState(null);
    let location = useLocation();
   // console.log()
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(location.aboutProps.url);
        const newData = await response.json();
        setData(newData);
      };
      fetchData();
    }, []);
    if (data) {
        //console.log(data);
      return <div><ul>
      <img src={data.sprites.front_default} />
      {data.abilities.map(item => (

         <li key={item.name}>
               {item.ability.name}
           </li>

      ))}
  </ul>Name : {data.name}<br /> Weight : {data.weight} <br /> Height : {data.height}</div>;
    } else {
      return null;
    }
  }

