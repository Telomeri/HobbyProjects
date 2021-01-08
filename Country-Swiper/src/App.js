import React, { useState, useEffect } from 'react'
import axios from 'axios'
import country_picker from './services/country_picker'

//currently just picks a country depending on the seed
const seed = "912389d151"

const App = (props) => {
  
  require('dotenv').config()

  const [country, setCountry] = useState([])
  //get amount of countries with console.log(Object.keys(country).length)

  //gets all the countries and sets then as useState
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountry(country_picker.getRandomCountry(response.data,parseInt(seed)))
      })
  }, [])

  console.log(country)
  return (
    <div>
      {country.name}
    </div>
  ) 
}


export default App;
