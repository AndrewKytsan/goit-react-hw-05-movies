import axios from 'axios';
const API_KEY = 'c4d6c6cd7ae75702c01e6a9bda1adcd5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export function getTrendFilms() {
    return axios
        .get(`trending/all/week?api_key=${API_KEY}`)
        .then(res => res.data);
}

export function getFilmsByQuery(query, page = 1) {
    return axios
        .get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
        .then(res => res.data);
}

export function getDetailsofFilm(id) {
    return axios
        .get(`movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.data);
}

export function getCredits(id) {
    return axios
        .get(`movie/${id}/credits?api_key=${API_KEY}`)
        .then(res => res.data);
}

export function getReviews(id) {
    return axios
        .get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.data);
}
export function getTrailer(id) {
    return axios
        .get(`/movie/${id}/videos?api_key=${API_KEY}`)
        .then(res => res.data);
}
