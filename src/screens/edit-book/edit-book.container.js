import { connect } from 'react-redux';
import EditBookComponent from './edit-book.component';

import { bookListUpdateBook } from '../../actions/book-list-actions';

import {
  bookSet,
  asyncEditBookSet,
  bookSetErrors,
  bookSetEdited,
  asyncUpdateBookCover
} from '../../actions/book-actions';

import { Actions } from 'react-native-router-flux';

import {
  Toast
} from 'native-base';

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    editBook(bookData) {
      const callback = (editedBook) => {
        dispatch(bookListUpdateBook(editedBook));
        dispatch(bookSet({
          ...editedBook,
          userId: editedBook.user_id
        }));

        Actions.pop(); // Go back to ViewBook
      }

      // Callback is called after the book is successful updated on the API
      dispatch(asyncEditBookSet(bookData, callback));
    },

    clearErrors() {
      dispatch(bookSetErrors({}));
      dispatch(bookSetEdited(false));
    },

    setSelectedBook(book) {
      dispatch(bookSet(book));
    },

    uploadCover(book, imageSource, imageBase64) {
      imageBase64 = `data:image/png;base64,${imageBase64}`;

      const callback = (updatedBook) => {
        dispatch(bookListUpdateBook(updatedBook));

        Toast.show({
          text: 'Nova capa enviada',
          buttonText: 'OK',
          position: 'bottom',
          type: 'success'
        });
      }

      dispatch(asyncUpdateBookCover({
        id: book.id,
        imageBase64
      }, callback));
    }
  }
}

const EditBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (EditBookComponent);

export default EditBookContainer;