import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './AppComment.jsx'

// render function display the elements on the screen.
// It takes two arguments: the first argument is the element to be rendered,
// and the second argument is the container where the element will be rendered. 
// In this case, we are rendering the App component inside the root div in index.html file.
// (App now contains the comments section instead of the chatbot)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

