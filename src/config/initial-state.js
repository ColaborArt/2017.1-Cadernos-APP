const initialState = {
  login: {
    remember: true
  },

   // current logged user
  user: {
    id: 0,
    name: '',
    email: '',
    password: '',
    sendingData: false,
    isRegistered: false,
    authenticated: false,
    isUpdated: false,
    isVisitor: false,
    errors: {}
  },

  // selected or created book
  book: {
    id: 0,
    title: '',
    userId: 0,
    sendingData: false,
    errors: {},
    created: false,
    coverOriginal: "",
    coverMedium: "",
    coverThumb: "",
    edited: false
  },

  // Book list from screen after loggin or logged user books
  bookList: {
    sendingData: false,
    books: []
  },

  //create category
  category: {
    id: 0,
    name: "",
    description: ""
  }
};



export default initialState;
