import axios from 'axios';

//url api= https://api.themoviedb.org/3/movie/now_playing?api_key=db1e894d18f1c2c5721a5b9108c3bfbd

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;