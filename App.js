import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component {

  _getComments(){
    const commentList = [
      { id:1, author:'Author 1', body: 'Great Body 1'},
      { id:2, author:'Author 2', body: 'Great Body 2'}
    ];

    return commentList.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id}/>
      );
    });
  }

  _getCommentsTitle(commentCount){
    if (commentCount === 0){
      return 'No comments yet';
    } else if (commentCount === 1){
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }

  constructor(){
    super();

    this.state = {
      showComments: false
    };
  }

  _handleClick(){
    this.setState({
      showComments: !this.state.showComments
    });
  }

  render(){
    const comments = this._getComments();

    let buttonText = 'Show Comments';

    if(this.state.showComments) {
      buttonText = 'Hide Comments';
    }

    let commentNodes;
    if (this.state.showComments) { //add this code if the state is true
      commentNodes = <div className="comment-list">{comments}</div>
    }
    return (
      <div className="comment-box">
        <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {commentNodes}
      </div>
    )
  }
}

class Comment extends React.Component {
  render(){
    return(
      <div className="comment">
        <p className="comment-header"></p>
        <p className="comment-body">{this.props.body}</p>
        <p className="comment-body">{this.props.author}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">
            Delete Comment
          </a>
        </div>
      </div>
    );
  }
}

class CommentForm extends React.Component {
  render(){
    return (
      <form className="comment-form">
        <label>Join the Discussion</label>
        <div classNAME="comment-form-fields">
          <input placeholder="Name: "/>
          <textarea placeholder="Comment: "></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    )
  }
}

export default CommentBox

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
)
