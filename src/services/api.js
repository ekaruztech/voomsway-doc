import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('voomToken');

    if (token) {
      config.headers['x-access-token'] = `${ token }`;
    }

    return config;
  }, 

  (error) => {
    return Promise.reject(error);
  }
);

const API = {
  url: process.env.REACT_APP_BASE_URL,
  apiKey: process.env.REACT_APP_API_KEY,

  get(endpoint) {
		return axios.get(`${this.url}${endpoint}`, {
      headers: { 
        'x-api-key': `${this.apiKey}`,
      },
    });
  },

  post(endpoint, body) {
    return axios.post(`${this.url}${endpoint}`, body, {
      headers: { 
        'x-api-key': `${this.apiKey}`,
      },
    });
  },
};

export default API;
