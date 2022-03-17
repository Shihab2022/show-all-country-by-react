import React, { useEffect, useState } from 'react';
import ShowDetilesCountry from './Country/Country';
import './Countries.css'
const Countries = () => {

const [countries,setCountries]=useState([])
useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
        },[])

    return (
        <div>
            <h1>All countries !!!</h1> 
            <p>countries length : {countries.length}</p>
            
            {
                // countries.map(country=><ShowDetilesCountry name={country.name} nativeName={country.nativeName} area={country.area}></ShowDetilesCountry>)
            }
{/* sokol dada kay amra akta  value hisaby raky dity pari */}

<div className="all-countries">
            {
               countries.map(country=> <ShowDetilesCountry  country={country} key={country.numericCode}></ShowDetilesCountry>)  
            }
</div>
           
           
        </div>
    );
};


// ay khany amra kory pari otoba country tay likay dity pari

// const ShowDetilesCountry =props=>{

// return (
//     <div>
//         <h1>Name : {props.name} </h1>
//         <h1>Native Name : {props.nativeName} </h1>
//         <h1>Area : {props.area} </h1>  
//     </div>
// )
// }
export default Countries;