import axiosApi from './axiosApi';

const catApi = {
	getAllBreed(params) {
		const url = '/v1/breeds';
		return axiosApi.get(url, { params });
	},

	getBreed(id) {
		const url = `/v1/breeds/${id}`;
		return axiosApi.get(url);
	},

	getAllImage(params) {
		const url = '/v1/images/search';
		return axiosApi.get(url, { params });
	},

	getImage(imgId) {
		const url = `/v1/images/${imgId}`;
		return axiosApi.get(url);
	},
};

export default catApi;
