import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {API_URL, API_KEY} from '@env';
import {checkTicketData} from './types';

const api = axios.create({
  baseURL: API_URL, // API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    'X-API-KEY': API_KEY,
  },
});

export const CheckTicketProcess = createAsyncThunk(
  'checkTicket/CheckTicketProcess',
  async (data: checkTicketData) => {
    const {qr} = data;
    const params = new FormData();
    params.append('qr', qr);
    const res = await api.post('checkTicket', params);
    return res.data;
  },
);
