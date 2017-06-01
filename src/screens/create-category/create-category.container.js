import { connect } from 'react-redux';
import CreateCategoryComponent from './create-category.component'

import { asyncCategorySet, categorySet, categorySetSendingData } from '../../actions/category-actions';

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
      const callback = (category) => {

        Actions.Main();
      }
      dispatch(asyncCategorySet(categoryData, callback));
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