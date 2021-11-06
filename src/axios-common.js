import axios from 'axios';

export const AXIOS = axios.create({
  //baseURL: 'http://localhost:8000',
  baseURL: 'http://abp-oci2.tk/api',
  withCredentials: true
})