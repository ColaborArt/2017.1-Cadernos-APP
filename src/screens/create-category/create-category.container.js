import { connect } from 'react-redux';
import CreateCategoryComponent from './create-category.component'

import { asyncCategorySet, categorySet, categorySetSendingData,categorySetErrors } from '../../actions/category-actions';

import initialState from '../../config/initial-state';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    category: state.category,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory(categoryData) {

      dispatch(asyncCategorySet(categoryData, callback));
      const callback = (category) => {
        Actions.Home();
      }


    },

    clearErrors() {
      dispatch(categorySetErrors({}));
    },

    clearSelectedBook() {
      dispatch(categorySet(initialState.category));
    }
  }
}

const CreateCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (CreateCategoryComponent);

export default CreateCategoryContainer;