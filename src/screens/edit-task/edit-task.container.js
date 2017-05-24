import { connect } from 'react-redux';
import EditTaskComponent from './edit-task.component';

import { taskSet } from '../../actions/task-actions';

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTask(task) {
      dispatch(taskSet(task));
    }
  }
}

const EditTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (EditTaskComponent);

export default EditTaskContainer;
