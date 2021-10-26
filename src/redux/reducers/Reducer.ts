import {ActionTypes} from '../types/Actions';
import {Item} from '../types/Item';

export interface State {
  itemList: Item[];
  detail: any;
  error: Boolean;
}

const initialState = {
  itemList: [],
  detail: {},
  error: false,
};

const Reducer = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case 'ADD_LIST':
      return {...state, itemList: [...action.payload]};

    case 'ADD_DETAIL':
      return {
        ...state,
        detail: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
