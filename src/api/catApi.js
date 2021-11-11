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

	getImage(params) {
		const url = `/v1/images`;
		return axiosApi.get(url, { params });
	},
};

export default catApi;
