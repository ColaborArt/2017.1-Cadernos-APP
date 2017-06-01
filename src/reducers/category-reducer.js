import initialState from '../config/initial-state';

import {
  CATEGORY_SET,
  CATEGORY_SET_SENDING_DATA,
 } from '../config/actions-types';

 const categoryReducer = (state=initialState.category, action) => {
  switch (action.type) {
    case CATEGORY_SET:
    return {
      ...action.category
    };
    case CATEGORY_SET_SENDING_DATA:
    return {
      ...state
    }
    default:
      return state;
  }
 }

 export default categoryReducer;