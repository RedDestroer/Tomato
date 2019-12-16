import { compose } from 'redux';

export const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export function inferLiteral<U, T extends U>(arg: T): T {
  return arg;
}

export function inferLiteralFromString<T extends string>(arg: T): T {
  return inferLiteral<string, T>(arg);
}
