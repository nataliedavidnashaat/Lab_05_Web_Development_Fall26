import { useState } from 'react'

//reusing a component because they are all comments
function Comment(props) {
    const name = props.name;
    const text = props.text;

    // props.likes is intial value
    const [likes, setLikes] = useState(props.likes);

    // Add 1 to the likes when the heart button is clicked
    function addLike() {
        setLikes(likes + 1);
    }

    return (
        <div className="comment">
            {/* the first letter of the name*/}
            <div className="avatar">{name[0]}</div>

            <div className="bubble">
                <div className="comment-name">{name}</div>
                <div className="comment-text">{text}</div>
                {/* {likes} shows the current number and it updates when state changes */}
                <button className="like-button" onClick={addLike}>♥ {likes}</button>
            </div>
        </div>
    );
}

export default Comment
