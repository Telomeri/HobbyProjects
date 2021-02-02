import React, { useState, useEffect } from 'react'
import country_picker from './services/country_picker'
import country_api from './services/country_api'
import CountryButton from './components/CountryButton'
import CountryView from './components/CountryView'

//currently just picks a country depending on the seed


const App = () => {
  require('dotenv').config()

  const [country, setCountry] = useState(undefined)
  const [countries, setCountries] = useState(undefined)
  const [loopval, setLoopval] = useState(0)
  //get amount of countries with console.log(Object.keys(country).length)

  //gets all the countries and sets then as useState
  useEffect(() => {
    country_api.get_country().then(response => {
      //just there for now if countries surpass the loopval
      if (response[0].countries.length === 0 ) {
        country_api.get_RESTcountries().then(res => {
          const chosen_countries = country_picker(res)
          response[0].countries.push.apply(response[0].countries,chosen_countries)
          setCountry(Object.values(response[0].countries)[0])
          country_api.update_array(response[0])
          setCountries(chosen_countries)})
        }
        //placeholder
        else if (response[0].countries.length === loopval){
          console.log("all countries looped")
        }
        else {
          setCountries(response[0].countries)
          setCountry(Object.values(response[0].countries)[loopval])
        }})
  }, [loopval])

  //since first time country = []
  //i dont like giving these as parameters...
  //Maybe I should think about redux?
    return (
      <div>{country === undefined ? "Waiting for information..." : 
      CountryView(country,loopval,countries)}
      {country === undefined ? '' : CountryButton(country,setLoopval,loopval)}
      </div>
    )
}


export default App;

