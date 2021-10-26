import {Item} from './Item';

export const ADD_LIST = 'ADD_LIST';
export const ADD_DETAIL = 'ADD_DETAIL';
export const SET_ERROR = 'SET_ERROR';

export interface AddList {
  type: typeof ADD_LIST;
  payload: Item[];
}

export interface AddDetail {
  type: typeof ADD_DETAIL;
  payload: Item;
}

export interface SetError {
  type: typeof SET_ERROR;
  payload: Boolean;
}

export type ActionTypes = AddList | AddDetail | SetError;

export type AppActions = ActionTypes;
