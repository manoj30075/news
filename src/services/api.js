import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = 'eb3caa6fcafc49f4963e0d01db2be62d'

export const fetchTopNews = async (country) => {
    return await axios.get(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`);
};

export const fetchUserProfile = async (userId) => {
    return await axios.get(`${BASE_URL}/profile/${userId}`);
};

// Add more API functions as needed
