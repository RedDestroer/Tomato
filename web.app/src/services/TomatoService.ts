import TomatoApi from '../api/TomatoApi';

export interface ITomatoService {
  getApiProperties(): Promise<object>;
}

class TomatoService implements ITomatoService {
  private static _instance: TomatoService;
  private _api: TomatoApi;

  private constructor(api: TomatoApi) {
    this._api = api;
  }

  static getInstance(): TomatoService {
    if (!TomatoService._instance) {
      const origin = window.location.origin;
      const apiOrigin = origin === 'http://localhost:3000' ? 'https://localhost:5051' : origin;
      const api = TomatoApi.create(`${apiOrigin}/api`);

      TomatoService._instance = new TomatoService(api);
    }

    return TomatoService._instance;
  }

  async getApiProperties(): Promise<object> {
    return this._api.getProperties().then(obj => {
      return obj;
    });
  }
}

export function getTomatoService(): ITomatoService {
  return TomatoService.getInstance();
}
