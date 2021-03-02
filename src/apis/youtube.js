import axios from 'axios';

const KEY = 'AIzaSyBQdo743H0T3uL7LKKKPl7f1S589XeRf8o';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

//youtube.get('/Search')