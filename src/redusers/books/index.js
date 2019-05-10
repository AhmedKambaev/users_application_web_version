const initialState = {
    books: [],
    booksLoader: true,
    movie: ''
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOADED_BOOKS':
            return {
                ...state,
                books: action.payload,
                booksLoader: false
            }
        case 'SEARCH_CHANGE':
            return {
                ...state,
                movie: action.payload,
                booksLoader: true
            }
        case 'MOVIES_FETCHED':
        console.log(action.payload)
            return {
                ...state,
                books: action.payload,
                booksLoader: false
            }
        case 'MOVIES_FAILED':
            return {
                ...state
            }
        default:
            return state;
    }
}