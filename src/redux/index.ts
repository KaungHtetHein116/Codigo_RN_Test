import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import Reducer from './reducers/Reducer';
import {AppActions} from './types/Actions';

export const rootReducer = combineReducers({
  data: Reducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
);

export type AppState = ReturnType<typeof rootReducer>;
