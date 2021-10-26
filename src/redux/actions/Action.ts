import {Action, Store} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppActions} from '../types/Actions';
import {Item} from '../types/Item';

export const setList = (itemList: Item[]): AppActions => ({
  type: 'ADD_LIST',
  payload: itemList,
});

export const setDetail = (item: any): AppActions => ({
  type: 'ADD_DETAIL',
  payload: item,
});

export const setError = (error: Boolean): AppActions => ({
  type: 'SET_ERROR',
  payload: error,
});

export const fetchList =
  (): ThunkAction<void, Store, unknown, Action<string>> => async dispatch => {
    dispatch(setError(false));

    const resp = await fetch('https://fakestoreapi.com/products');

    try {
      const list: Item[] = await resp.json();
      dispatch(setList(list));
    } catch (error) {
      dispatch(setError(true));
      console.log('dispatch error handling action', error);
    }
  };

export const fetchDetail =
  (id: number): ThunkAction<void, Store, unknown, Action<string>> =>
  async dispatch => {
    dispatch(setError(false));

    if (id == 0) {
      dispatch(setDetail({}));
      return;
    }

    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);

    try {
      const detail: Item = await resp.json();
      dispatch(setDetail(detail));
    } catch (error) {
      dispatch(setError(true));
      console.log('dispatch error handling action', error);
    }
  };
