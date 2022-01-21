import axios from 'axios'

const fruityviceApi = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    }
});

export default fruityviceApi