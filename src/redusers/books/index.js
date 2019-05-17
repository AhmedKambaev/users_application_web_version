const initialState = {
    books: [],
    booksLoader: true,
    movie: '',
    errorBooksLoaded: false
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOADED_BOOKS':
            return {
                ...state,
                books: action.payload,
                booksLoader: false,
                errorBooksLoaded: false
            }
        case 'SEARCH_CHANGE':
            return {
                ...state,
                movie: action.payload,
                booksLoader: true,
                errorBooksLoaded: false
            }
        case 'MOVIES_FETCHED':
        console.log(action.payload)
            return {
                ...state,
                books: action.payload,
                booksLoader: false,
                errorBooksLoaded: false
            }
        case 'MOVIES_FAILED':
            return {
                ...state,
                booksLoader: false,
                errorBooksLoaded: true
            }
        default:
            return state;
    }
}