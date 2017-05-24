import update from 'immutability-helper';

import initialState from '../config/initial-state';
import { TASK_LIST_SET, TASK_LIST_SET_SENDING_DATA, TASK_LIST_ADD_TASK } from '../config/actions-types';

const taskListReducer = (state = initialState.taskList, action) => {
  switch (action.type) {
    case TASK_LIST_SET:
      return {
        ...action.taskList
      };

    case TASK_LIST_SET_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData,
      };

    case TASK_LIST_ADD_TASK:
      return update(state, {
        tasks: {$push: [action.task]}
      });

    default:
      return state;
  }
}

export default taskListReducer;
