import axios from 'axios';

const LRCApiClient = axios.create({
    baseURL: 'https://lrclib.net/api/',
    headers: {
        'Lrclib-Client': 'Ongakkou v0 https://github.com/awing256/ongakkou',
    },
});

LRCApiClient.interceptors.request.use(
    (config) => {
        // Add authorization token or other headers
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor (optional)
LRCApiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            console.error('Unauthorized, redirecting to login...');
        }
        else if (error.response?.status === 404) {
            console.error('No results found...');
        }
        return Promise.reject(error);
    }
);

export default LRCApiClient;