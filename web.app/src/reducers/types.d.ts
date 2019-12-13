import { StateType, ActionType } from 'typesafe-actions';

declare module 'AppTypes' {
  export type Store = StateType<typeof import('../store/store').default>;
  export type RootState = StateType<ReturnType<typeof import('./rootReducer').default>>;
}