import { TomatoServiceInterface } from './TomatoServiceInterface';
import { TomatoApi } from '../apis/TomatoApi';

class TomatoService implements TomatoServiceInterface {
  private static _instance: TomatoService
  private _api: TomatoApi;

  private constructor(api: TomatoApi) {
    this._api = api;
  }

  static getInstance(): TomatoService {
    if (!TomatoService._instance) {
      let api = TomatoApi.create('https://localhost:5051/api');

      TomatoService._instance = new TomatoService(api);
    }

    return TomatoService._instance;
  }

  async getApiProperties(): Promise<object> {
    return this._api.getProperties()
      .then(obj => {
        return obj;
      });
  }
}

export function getTomatoService() {
  return TomatoService.getInstance();
}