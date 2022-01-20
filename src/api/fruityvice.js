import axios from 'axios'

const fruityvice = axios.create({
    baseURL: 'https://www.fruityvice.com/api/fruit/'
});