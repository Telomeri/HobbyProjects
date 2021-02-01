import country_api from '.././services/country_api'

export default function CountryButton(country,setLoopval,loopval) {
    return ( 
    <div>
      <h2>Would you travel to this country?</h2>
      <button onClick = {() => approveCountry(country.name,setLoopval,loopval)}>yes</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick = {() => approveCountry(false,setLoopval,loopval)}>no</button>
    </div>
    )
  }

  const approveCountry = (countryObject,setLoopval, loopval) => {
    if (countryObject !== false) {
      country_api.get_country().then(response => {
        response[0].approved.push(countryObject)
        //adds approved country
        country_api.update_array(response[0])
        setLoopval(loopval +1)
    })
  }
  else {
    setLoopval(loopval +1)
  }
}