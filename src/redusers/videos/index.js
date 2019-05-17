const initialState = {
    videos: [],
    searchVideos: '',
    videosLoading: true,
    selectVideo: null,
    errorVideosLoading: false
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOADED_VIDEOS': 
            return {
                ...state,
                videos: action.payload,
                videosLoading: false,
                errorVideosLoading: false
            }
        case 'SEARCH_VIDEOS':
            return {
                ...state,
                searchVideos: action.payload,
                errorVideosLoading: false,
                videosLoading: true
            }
        case 'SELECTED_VIDEO':
            return {
                ...state,
                selectVideo: action.payload,
                errorVideosLoading: false
            }
        case 'LOADED_VIDEOS_FAILED':
            return {
                ...state,
                videosLoading: false,
                errorVideosLoading: true
            }
        default:
            return state;
    }
}