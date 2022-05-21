import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage.tsx';
import MessageForm from './MessageForm';

const Chatbox = (props) => {//include what we will be structuring
  const { chats, activeChat, userName, messages } = props;
  //find our current chat: if chat exists then find chats/active chat
  const chat = chats && chats[activeChat];

  //console.log(chat, activechat, userName, messages) to see if they are working

  //component which fetches all our messages
  const renderReadReceipts = (message, isMyMessage) => 
    chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));
      //component which generates msgs.
  const renderMessages = () => { //keys are ids of msgs.
    const keys = Object.keys(messages);

    //render msgs. 
    return keys.map((key, index) => {
      //loop over messages
      const message = messages[key];
      //we need to know if  this was the last message sent
      //if there are msgs then find the last one
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      //if the username = message from me
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
                /*Pass message as prop into message to allow access to the message
                  this is called from const message above*/
              ? <MyMessage message={message} />
               /*Pass msg into their msg also and the last msg (so two msgs in theirs and one in ours)
                 NOTE: last msg is dynamically added*/
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />} 
          </div>
              {/*renders read receipts differently based on myMsgs and theirMsgs */}
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };
    {/*if there is no chat */}
  if (!chat) return <div />;

  return (
    <div className="chat-box">
      <div className="chat-title-container"> {/*to be refactored */}
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {/*map the people to get specific person which returns template string for the person*/}
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">

        {/*Chatbox Struture: Message form we spread the props and pass in the ChatId= activeChat*/}
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
