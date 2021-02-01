export default function CountryView (country)  {

    const flag_address = "https://restcountries.eu/data/"
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      } 

    return (
        <div>
          <h1>{country.name}</h1>
          <img src = {String(flag_address)+
                String(country.alpha3Code.toLowerCase())+".svg"}
                alt = "Contains the flag of given country"
                width = "200" height = "100"/>
          <ul>
            <li><h4>Capital is {country.capital}</h4></li>
            <li><h4>Resides in {country.subregion}</h4></li>
            <li><h4>Population of {numberWithSpaces(country.population)}</h4></li>
            <li><h4>Languages include</h4>{country.languages.map((language, i) => <div key={i}> {language.name}</div>)}</li>
          </ul>
        </div>
      ) 
}