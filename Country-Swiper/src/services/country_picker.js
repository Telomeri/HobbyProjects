const amount = 5
export default function country_picker(countries) {
  //retired the old seed one, now using external library since you can't really turn
  //strings into numbers if the first value is a letter.
  //250 is the amount of countries
  var countryholder = []
  for (let i = 0; i < amount; i++) {
    let country = countries[Math.floor(Math.random() * (250))]
    if (!countryholder.includes(country)) {
      countryholder.push(country)
    } 
    else {
      i--
    }
  }
  return countryholder
}

