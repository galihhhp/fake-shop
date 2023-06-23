import { Cart, ListProducts, Product } from 'types/index';
import axios, { AxiosError, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

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
  list: ({ limit = 10 }: { limit?: number }): Promise<ListProducts> => getReq(`/products?limit=${limit}`),
  single: (id: string | undefined): Promise<Product> => getReq(`/products/${id}`),
  filter: ({ offset = 0, limit = 10, filterBy = 'title', filterValue = 'Generic' }: { offset?: number, limit?: number, filterBy: string, filterValue: string }) => getReq(`/products?offset=${offset}&limit=${limit}&${filterBy}=${filterValue}`),
  categories: (): Promise<string[]> => getReq('/products/categories'),
  category: (category: string | undefined, limit?: number): Promise<ListProducts> => getReq(`/products/category/${category}?limit=${limit}`),
  cart: (): Promise<Cart[]> => getReq('/carts/user/1'),
}

const api = {
  products
}

export default api;