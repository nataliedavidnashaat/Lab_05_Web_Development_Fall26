import Comment from './Comment.jsx'

function CommentsList(props) {
    const comments = props.comments;

    // .map() loops over the array and turns each comment object into a <Comment /> component
    const commentComponents = comments.map((comment) => {
        return (
            <Comment name={comment.name} text={comment.text} likes={comment.likes} />
        );
    });

    return (
        <div className="comments-list">
            {commentComponents}
        </div>
    );
}

export default CommentsList
