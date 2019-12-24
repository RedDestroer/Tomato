import { createBrowserHistory, History, LocationState } from 'history';

function CreateHistory(): History<LocationState> {
  console.log('HISTORY CREATED');
  return createBrowserHistory<LocationState>();
}

export const history = CreateHistory();
