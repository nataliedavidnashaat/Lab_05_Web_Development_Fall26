import { useState } from 'react'
import CommentInput from './CommentInput.jsx'
import CommentsList from './CommentsList.jsx'
import './App.css' // loads our styles


function App() {
  //usestate 3ashn lma el variable el ana ba3tholo yet8yar a2olo ya-rerender
  //comments fyha el intial values
  //setComments fyha el cahnged 
  const [comments, setComments] = useState([
    { name: "Natalie", text: "Hi I am Natalie", likes: 5 },
    { name: "David", text: "Hi I am David", likes: 2 },
    { name: "Philo", text: "Hi I am Philo", likes: 7 },
  ])

  // <> </> is a fragment: it lets us return several components
  return <>
    <div className="comments-app">
      {/* comments.length gives the number of comments */}
      <h2>Comments ({comments.length})</h2>

      {/* We pass the data and the setComments down as props so the child can add a comment */}
      <CommentInput comments={comments} setComments={setComments} />

      <CommentsList comments={comments} />
    </div>
  </>
}

export default App
