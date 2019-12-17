import { StateType, ActionType } from 'typesafe-actions';

declare module 'AppTypes' {
  export type Store = StateType<typeof import('./configureStore').default>;
  export type RootAction = ActionType<typeof import('./rootAction').default>;
  export type RootState = StateType<ReturnType<typeof import('./rootReducer').default>>;
}
