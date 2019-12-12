import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class TomatoApi {

  private _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  static create(baseUrl: string): TomatoApi {
    const config: AxiosRequestConfig = {
      baseURL: baseUrl,
      responseType: 'json'
    };
    const axiosInstance: AxiosInstance = axios.create(config);

    return new TomatoApi(axiosInstance);
  }

  async getProperties(): Promise<object> {
    return this._axios.get('/').then(r => r.data);
  }
}