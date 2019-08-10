import React, { Component } from 'react';


class Song extends Component {
    constructor() {
      super()
      this.state = {
      
      comments: [],
      flip: false,
      show:true
    }
  }

IncrementVote = () => {
  this.setState((prevState) => {
    return {click: prevState.click + 1}
  })
}

handleOnClick = () => {
  let flipIt = document.getElementsByClassName('.flipCard')
  return (
    <div>
    <p>{flipIt ? '.flipIt' : '.alsoFlip' }</p>
    </div>
  )
}

/*add like count + conditional render ternary*/

  
CreateComment = (event) => {
  event.preventDefault()
  let comment = document.getElementById("commentInput")
  this.setState(( prevState) => {
    return {comments: [...prevState.comments, comment.value] }
  })

}
  render() {
    
    return (
      
      
          <div className=".flipCard">
            <li>Title: {this.props.song.title} </li>
            <li>Artist: {this.props.song.artist} </li>
            <li>Genre: {this.props.song.genre} </li>
            
           
          <br ></br>
          
          <form onSubmit={this.CreateComment} className="commentForm">
          <input type="text" id="commentInput" placeholder="comment"/>
          <input type="submit"></input>
          </form>

          
          <button onClick = {this.IncrementVote}>Vote</button>{this.state.click}
          <li>Comment: {this.props.song.comments}</li>
          <button handleClick={this.handleClick}>Flip</button>
          </div> 
    );
  }
};

export default Song;