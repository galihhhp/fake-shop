import { Category, Product } from 'types/index';
import axios, { AxiosError, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1';
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
  list: ({ offset = 0, limit = 10 }: { offset?: number, limit?: number }): Promise<Product[]> => getReq(`/products?offset=${offset}&limit=${limit}`),
  single: (id: string): Promise<Product> => getReq(`/products/${id}`),
  filter: ({ offset = 0, limit = 10, filterBy = 'title', filterValue = 'Generic' }: { offset?: number, limit?: number, filterBy: string, filterValue: string }) => getReq(`/products?offset=${offset}&limit=${limit}&${filterBy}=${filterValue}`),
  categories: (): Promise<Category[]> => getReq('/categories'),
  category: (id: string) => getReq(`/products/category/${id}`),
}

const api = {
  products
}

export default api;