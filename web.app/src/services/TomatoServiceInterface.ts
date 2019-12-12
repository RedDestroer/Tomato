import { Property } from '../dom/Property';

export interface TomatoServiceInterface {
  getApiProperties(): Promise<object>
}

