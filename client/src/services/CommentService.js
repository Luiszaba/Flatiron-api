
const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL);

const CommentService = {
    fetchComments() {
        return fetch(`${API_URL}/api/v1/comments`)
        .then(response => response.json())
    },

    createComment(comment) {
        const fetchilizer = {
        method: 'POST',
        body: JSON.stringify({
            comment: comment
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    }
    return fetch(`${API_URL}/api/vi`, fetchilizer) 
    .then(response  => response.json())
    }   
}


export default CommentService;