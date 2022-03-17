import React from 'react';

import './Country.css'

// const ShowDetilesCountry =props=>{

//     return (
//         <div>
//             <h1>Name : {props.name} </h1>
//             <h1>Native Name : {props.nativeName} </h1>
//             <h1>Area : {props.area} </h1>  
//         </div>
//     )
//     }


const ShowDetilesCountry =props=>{
const {name,nativeName,area,population,flag,capital} = props.country;
    return (
        <div className="single-country">
            <img src={flag} alt="" />
            <h1>Name : {name} </h1>
            <h4>Native Name : {nativeName} </h4>
            <h4>Capital : {capital} </h4>
            <p>Area : {area} </p>  
            <p>Population : {population} </p>  
        </div>
    )
    }
export default ShowDetilesCountry;
