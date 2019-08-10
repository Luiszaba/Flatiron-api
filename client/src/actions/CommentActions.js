export const fetchComments = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_SONGS' });
      return fetch('http://localhost:3000/api/v1/comments')
        .then(response => response.json())
        .then(responseJSON => {
          dispatch({
            type: 'FETCH_COMMENTS',
            payload: responseJSON
          });
       });
    };
  };

export const loadingComments = () => {
    return {
        type: 'LOADING_COMMENTS'
    };
};

export const createComment = (comment) => {
  return (dispatch) => {
      return fetch('http://localhost:3000/api/v1/comments',
  {method: 'POST',
  body: JSON.stringify({
      comment: comment
  }),
  headers: {
  'Content-Type': 'application/json'
  }})
  .then(response => response.json())
  .then( responseJSON => {
      dispatch({
          type: 'ADD_COMMENT',
          payload: responseJSON
      });
  });
}};