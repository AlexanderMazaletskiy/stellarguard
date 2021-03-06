import axios from 'axios';

import AppError from '../../shared/errors/AppError';
import UnknownError from '../../shared/errors/UnknownError';

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

const apiClient = axios.create({
  baseURL: '/api/'
});

setCsrf(csrfToken);

export const get = wrap('get');
export const post = wrap('post');
export const put = wrap('put');
export const del = wrap('delete');

export function setCsrf(csrf) {
  apiClient.defaults.headers = apiClient.defaults.headers || { common: {} };
  apiClient.defaults.headers.common['x-csrf-token'] = csrf;
}

function wrap(method) {
  return function() {
    return call(method, arguments);
  };
}

async function call(method, args) {
  try {
    const result = await apiClient[method].apply(apiClient, args);
    return result.data;
  } catch (err) {
    const data = (err.response && err.response.data) || err.data;
    if (data && data.code) {
      throw new AppError(data);
    } else {
      console.error(err);
      throw new UnknownError();
    }
  }
}

export default { get, post, put, delete: del };
