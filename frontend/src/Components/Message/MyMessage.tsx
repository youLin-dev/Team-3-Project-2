const TheirMessage = ({ lastMessage, message }) => {
  
    //In their message we recieve their last message and the active message itself
    //We want to know if the message is the first by that user
    //if the first msg !lastmsg or username of the last msg is not the username of the current msg THEN
    //it is the first msg by that user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  
    return (
      <div className="message-row">
        {isFirstMessageByUser && (
          <div
            //This block of code checks and adds an image if it exists, only if the first msg by the user
            className="message-avatar"
            style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
          />
        )}
        {message.attachments && message.attachments.length > 0
        //Here we just need to know if their is an image
        //we are already returning it so we use ? and don't need an if statement
          ? (
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />
          )
          : (
            <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                 {message.text}
            </div>
          )}
      </div>
    );
  };
  
  export default TheirMessage;
  