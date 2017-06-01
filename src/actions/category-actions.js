import {
  CATEGORY_SET,
  CATEGORY_SET_SENDING_DATA,
} from '../config/actions-types';

import axios, { getBaseUrl } from '../config/axios';

import initialState from '../config/initial-state';


export const categorySet = ({
  id, name,
  description = initialState.category.description,
  sendingData = initialState.category.sendingData,
}) => {
  return {
    type: CATEGORY_SET,
    category: {
      id,
      name,
      description,
      sendingData,
    }
  }
}

export const categorySetSendingData = (sendingData) => {
  return {
    type: CATEGORY_SET_SENDING_DATA,
    sendingData
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
      console.log('ERROR while creating category');
      console.log(err);
    });
    dispatch(categorySetSendingData(false));
  }
}