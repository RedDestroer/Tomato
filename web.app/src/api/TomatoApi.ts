import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class TomatoApi {
  private _axiosApi: AxiosInstance;

  constructor(axiosApi: AxiosInstance) {
    this._axiosApi = axiosApi;
  }

  static create(baseUrl: string): TomatoApi {
    const config: AxiosRequestConfig = {
      baseURL: baseUrl,
      responseType: 'json',
    };
    const axiosInstance: AxiosInstance = axios.create(config);

    return new TomatoApi(axiosInstance);
  }

  async getProperties(): Promise<object> {
    return this._axiosApi.get('/').then(r => r.data);
  }
}
