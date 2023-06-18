import axios, { AxiosError, AxiosResponse } from 'axios';

import { Product } from 'types/index';

axios.defaults.baseURL = 'https://fakestoreapi.com';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

const responseBody = (response: AxiosResponse) => response.data;
// const responseError = (error: AxiosError) => error

const getReq = (url: string) => axios.get(url).then(responseBody).catch(
  (error: AxiosError) => {
    if (error.response) {
      return error.response.data;
    }
    return error;
  }
);
// const postReq = (url: string, body: object) => axios.post(url, body).then(responseBody).catch(responseError);

const products = {
  list: ({ limit = 10 }: { limit?: number }): Promise<Product[]> => getReq(`/products?limit=${limit}`),
  single: (id: string | undefined): Promise<Product> => getReq(`/products/${id}`),
  filter: ({ offset = 0, limit = 10, filterBy = 'title', filterValue = 'Generic' }: { offset?: number, limit?: number, filterBy: string, filterValue: string }) => getReq(`/products?offset=${offset}&limit=${limit}&${filterBy}=${filterValue}`),
  categories: (): Promise<string[]> => getReq('/products/categories'),
  category: (category: string | undefined, limit?: number) => getReq(`/products/category/${category}?limit=${limit}`),
}

const api = {
  products
}

export default api;