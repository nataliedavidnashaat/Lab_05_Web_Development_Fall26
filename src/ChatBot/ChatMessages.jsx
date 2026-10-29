import ChatMessage from './ChatMessage.jsx'

function ChatMessages(props) {
    const chatMessages = props.chatMessages;

    const chatMessageComponents = chatMessages.map((chatMessage) => {
        return (<ChatMessage message={chatMessage.message} sender={chatMessage.sender} />);
    });

    return (
        <div className="chat-messages">
            {chatMessageComponents}
        </div>
        /* must be in a fragment because we are returning multiple components */
    );
}

export default ChatMessages