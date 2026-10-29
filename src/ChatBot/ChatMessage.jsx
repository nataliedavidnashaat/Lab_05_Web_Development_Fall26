import userImg from './user.png'
import botImg from './robot.jpg'

//reusing a component
function ChatMessage(props) {
    const message = props.message;
    const sender = props.sender;

    if (sender === "User") {
        return (
            <div>
                {message}
                <img src={userImg} width="35" />
            </div>
        );
    }
    else {
        return (
            <div>
                <img src={botImg} width="50"  />
                {message}
            </div>
        );
    }
}

export default ChatMessage