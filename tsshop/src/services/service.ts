import axios, { AxiosRequestConfig } from 'axios';

export class Service {
  constructor() { }

  instance = axios.create({
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    }
  });

  //get
  public get = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
    return this.instance
      .get(url, config)
      .then(response => response)
      .catch(error => error);
  };

  //post
  public post = async (url: string, params?: any, config?: AxiosRequestConfig): Promise<any> => {
    return this.instance
      .post(url, params, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
  };
  //put
  public put = async (url: string, params?: any, config?: AxiosRequestConfig): Promise<any> => {
    return this.instance
      .put(url, params, config)
      .then(response => response)
      .catch(error => error);
  };

  //delete
  public delete = async (url: string, params?: any, config?: AxiosRequestConfig): Promise<any> => {
    return this.instance
      .delete(url, config)
      .then(response => response)
      .catch(error => error);
  };
}