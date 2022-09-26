import axios from 'axios';

export const AXIOS = axios.create({
  // baseURL: 'https://a.abp-te.tk',
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://a.abp-te.tk:8443/api',
  withCredentials: true
})