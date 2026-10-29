import { useState } from 'react'

function CommentInput(props) {
  // Props are the values the parent (App) sent to us
  const comments = props.comments;
  const setComments = props.setComments;

  // "input" stores what the user is typing right now
  const [input, setInput] = useState("");

  // Runs every time the user types a letter.
  // event.target.value = the current text inside the input box
  function saveInputText(event) {
    setInput(event.target.value);
  }

  // Runs when the user clicks "Post"
  function addComment() {
    //nothing box is empty or only spaces
    if (input.trim() === "") {
      return;
    }

    // Add the new comment to the end of the list
    setComments([...comments, { name: "You", text: input, likes: 0, },]);

    setInput("");
  }

  return (
    <>
      <div className="comment-input">
        <input type="text" placeholder="Write a comment..." onChange={saveInputText} />
        <button onClick={addComment}>Post</button>
      </div>
    </>
    // fragments
  );
}

export default CommentInput;
