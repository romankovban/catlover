import axios from 'axios';
import { config } from './config';

export const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    'x-api-key': config.apiKey,
  },
});
