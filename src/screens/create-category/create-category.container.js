import { connect } from 'react-redux';
import CreateCategoryComponent from './create-category.component'


const mapStateToProps = () => {
  return {
    name: 'abc',
  }
}

const CreateCategoryContainer = connect(
  mapStateToProps,
)(CreateCategoryComponent);

export default (CreateCategoryContainer);