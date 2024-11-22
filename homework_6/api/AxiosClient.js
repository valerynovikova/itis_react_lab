
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Моковый сервер
    headers: {
        'Content-Type': 'application/json',
    },
});

// Обработка ошибок
axiosClient.interceptors.response.use(
    response => response,
    error => {
        console.error('Axios error:', error);
        return Promise.reject(error);
    }
);

export default axiosClient;
