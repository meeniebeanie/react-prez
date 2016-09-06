import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component {
  constructor(){
    super();

    this.state = {
      showComments: false
    };
  }

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

  _handleClick(){
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _addComment(author, body){
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  }

  render(){
    const comments = this._getComments();
    let buttonText = 'Show Comments';
    let commentNodes;

    if(this.state.showComments) { //add this code if the state is true
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)}/>
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
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the Discussion</label>
        <div className="comment-form-fields">
          <input placeholder="Name: " ref={(input) => this._author = input}/>
          <textarea placeholder="Comment: " ref={(textarea) => this._body = textarea }></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    )
  }

  _handleSubmit(event) {
    event.preventDefault();

    let author = this._author;
    let body = this._body;

    this.props.addComment(author.value, body.value);
  }

}//end of CommentForm component

export default CommentBox

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
)
