
const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL);

 
const SongService = {
    fetchSongs() {
        return fetch(`${API_URL}/api/v1/songs`)
        .then(response => response.json())
    },

    createSong(song) {
        const fetchilizer = {
        method: 'POST',
        body: JSON.stringify({
            song: song
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    }
    return fetch(`${API_URL}/api/vi`, fetchilizer) 
    .then(response  => response.json())
    }   
}


export default SongService;