import axios from 'axios';

const API = {
  url: `${process.env.BASE_URL}`,
  apiKey: `${process.env.API_KEY}`,

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
