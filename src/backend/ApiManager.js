import axios from 'axios';
// import { BaseUrl } from './Config';
// axios.defaults.baseURL = BaseUrl;
axios.defaults.params = {}
axios.interceptors.response.use(function (response) {
    return { ok: true, data: response?.data };
}, function (error) {
    return { ok: false, error: error?.response?.data }
});
export const ApiManager = {
    get: async (endpoint, params = {}) => {
        return axios.get(endpoint, { params });
    },
    post: async (endpoint, body, params = {}) => {
        return axios.post(endpoint, body, { params });
    },
};
