
import youtube from '../components/apis/youtube'; 

const getMovies = (text) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({ type: 'MOVIES_FETCHED', payload: success })
    return success
  }
  function onError(error) {
    dispatch({ type: 'MOVIES_FAILED', error })
    return error
  }
  try {
    const URL = `https://api.tvmaze.com/search/shows?q=${text}`
    const res = await fetch(URL, {
      method: 'GET'
    })
    const success = await res.json()
    const data = success.map(item => item.show);
    return onSuccess(data)
  } catch (error) {
    return onError(error)
  }
}


const searchChanged = (text) => {
  return {
    type: 'SEARCH_CHANGE',
    payload: text
  }
}

const loadedBooks = (books) => {
  return {
      type: 'LOADED_BOOKS',
      payload: books
  };
}

const userAuthor = (user) => {
  return {
      type: 'ADD_USER',
      payload: user
  };
}

const userLogout = (navigator) => {
  return {
      type: 'USER_LOGOUT',
      payload: navigator
  }
}

const loadedVideos = (text) => async (dispatch) => {
    function onSuccess(success) {
        dispatch({ type: 'LOADED_VIDEOS', payload: success })
        return success
      }
      function onError(error) {
        dispatch({ type: 'LOADED_VIDEOS_FAILED', error })
        return error
      }
      try {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        })
        console.log(response.data.items)
        return onSuccess(response.data.items)
      } catch (error) {
        return onError(error)
      }
}

const changeSearchVideos = (text) => {
    return {
        type: 'SEARCH_VIDEOS',
        payload: text
    }
}

const selectedVideo = (video) => {
  return {
    type: 'SELECTED_VIDEO',
    payload: video
  }
}



const loadedMusics = (musics) => {
  return {
      type: 'LOADED_MUSICS',
      payload: musics
  };
}

const loadedImages = (images) => {
  return {
      type: 'LOADED_IMAGES',
      payload: images
  };
}

export {
    loadedVideos,
    loadedBooks,
    loadedMusics,
    userAuthor,
    userLogout,
    getMovies,
    searchChanged,
    changeSearchVideos,
    selectedVideo,
    loadedImages
};