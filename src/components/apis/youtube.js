import axios from 'axios';


const KEYvideos = 'AIzaSyBCBw5X6n5GfryvThvfcGmYWKvqE5fM1PE';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEYvideos
    }
});