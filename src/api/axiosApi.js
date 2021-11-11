import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'https://api.thecatapi.com',
	headers: {
		'Content-Type': 'application/json',
		'x-api-key': '88425484-50bb-4c31-96f9-4090fbc3030b',
	},
});

export default axiosApi;
