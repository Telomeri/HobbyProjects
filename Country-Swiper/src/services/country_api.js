import axios from 'axios'
const baseUrl = 'http://localhost:3002/country-api'

const get_country = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const update_array = newObject => {
    const request = axios.patch(`${baseUrl}/${newObject.id}`, newObject)
    return request.then(response => response.data)
}

const get_RESTcountries = () => {
    const request = axios.get('https://restcountries.eu/rest/v2/all')
    return request.then(response => response.data)     
}

//easy way to reset json
const empty_json = () => {
    const body = {
        "id": 2313,
        "countries": [],
        "approved": []
    }
    const request = axios.put(`${baseUrl}/${body.id}`, body)
    return request.then(response => response.data)

}

// eslint-disable-next-line import/no-anonymous-default-export
export default { get_country, update_array, get_RESTcountries, empty_json }
