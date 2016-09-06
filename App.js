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

  render(){
    const comments = this._getComments();
    return (
      <div className="comment-box">
        <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
        <div className="comment-list">
          {comments}
        </div>
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

export default CommentBox

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
)
