import axios from 'axios';

const HOST_URL = 'https://conduit.productionready.io/api';

export const URI = {
  getArticles: `/articles`,
  login: `/users/login`,
};

export const instance = axios.create({ 
  baseURL: HOST_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  }
});
