import TomatoApi from '../api/TomatoApi';

const localhostUrl: string | null = process.env.REACT_APP_LOCAL_HOST_URL ?? null;
const backendUrl: string | null = process.env.REACT_APP_LOCAL_BACKEND_URL ?? null;

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
      const apiOrigin = (origin === localhostUrl ? backendUrl : origin) ?? origin;
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
