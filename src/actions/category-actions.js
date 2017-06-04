import {
  CATEGORY_SET,
  CATEGORY_SET_SENDING_DATA,
  CATEGORY_SET_ERRORS
} from '../config/actions-types';

import axios, { getBaseUrl } from '../config/axios';

import initialState from '../config/initial-state';


export const categorySet = ({
  id, name,
  description = initialState.category.description,
  sendingData = initialState.category.sendingData,
  errors = initialState.errors
}) => {
  return {
    type: CATEGORY_SET,
    category: {
      id,
      name,
      description,
      sendingData,
      errors
    }
  }
}

export const categorySetSendingData = (sendingData) => {
  return {
    type: CATEGORY_SET_SENDING_DATA,
    sendingData
  }
}

export const categorySetErrors = (errors) => {
  return {
    type: CATEGORY_SET_ERRORS,
    errors
  }
}

export const asyncCategorySet = (categoryData, callback) => {
  return(dispatch) => {
    dispatch(categorySetSendingData(true));

    axios.post('/categories', {
      name: categoryData.name,
      description: categoryData.description
    })
    .then(response => {
      if(response.data && response.data.id) {
        const category = {
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          sendingData: false
        }
        dispatch(categorySet(category));

        callback(category);
      }
    })
    .catch(err => {
      if(err.response && err.response.status === 422) {
        dispatch(categorySetErrors(err.response.data));
      }

      console.log('ERROR while creating category');
      console.log(err);
    });
    dispatch(categorySetSendingData(false));
  }
}