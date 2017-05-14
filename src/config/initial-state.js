const initialState = {
  user: { // current logged user
    id: 0,
    name: '',
    email: '',
    password: '',
    sendingData: false,
    authenticated: false,
    errors: []
  },

  book: { // selected book
    id: 0,
    title: '',
    userId: 0,
    sendingData: false,
    errors: {}
  }
};

export default initialState;