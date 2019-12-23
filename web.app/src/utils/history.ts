import { createBrowserHistory, History, LocationState } from 'history';

function CreateHistory(): History<LocationState> {
  return createBrowserHistory<LocationState>();
}

export const history = CreateHistory();
