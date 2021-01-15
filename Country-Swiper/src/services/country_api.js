import axios from 'axios'
const baseUrl = 'http://localhost:3002/country-api'

const get_country = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add_country = newObject => {
    console.log(newObject)
    const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
    return request.then(response => response.data).catch(error => console.error(error.response))
}

const get_RESTcountries = () => {
    const request = axios.get('https://restcountries.eu/rest/v2/all')
    return request.then(response => response.data)
      
}

const update_country = newObject => {
    const request = axios.put(baseUrl, newObject)
    return request.then(response => response.data).catch(error => console.error(error.response))
  }
// eslint-disable-next-line import/no-anonymous-default-export
export default { get_country, add_country, get_RESTcountries, update_country }
