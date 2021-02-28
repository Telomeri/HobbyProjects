import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/training';


const get_training_data = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

export default {get_training_data};