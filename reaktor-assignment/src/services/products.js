import axios from 'axios'
//thought dotenv might be a bit more secure
require('dotenv').config()
//since the serverAPI had cors enabled, hosted my own cors-anywhere herokuapp to bypass it. 
//https://github.com/Rob--W/cors-anywhere/
//this is not ideal, but works for now. Since we are hosting the app
//ourselfs, we are not relying on an external server, but it should be noted
//that directing the traffic makes the app slower and if it goes down this
//no longer functions. 

//simple axios, with a lot of concats since we need both cors-anywhere url, products page and category of the product.
const getProducts = (category) => {
    const request = axios.get(process.env.REACT_APP_CORSPASS.concat(process.env.REACT_APP_PRODURL).concat(category))
    return request.then(res => res.data)
  }

export default getProducts