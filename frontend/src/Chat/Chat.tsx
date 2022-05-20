
/* REFERENCE: Cha Appl using React JS  https://www.youtube.com/watch?v=jcOKU9f86XE

//3 components we need to import from tocreate chatfeed
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage"

//Props
const ChatFeed = ({chats, activeChat, username, messages}) => {
    //structure the following variables
    const { chats, activeChat, username, messages } = props;

    //find chat (if chat exists and its an active chat)
    const chat = chats && chats[activeChat];
//upon db connection, console.log(chat, username, messages); to see if it comes up  as expected

    //Method
    // if (chat is true) {renderMessages}
    const renderMessages = () => {
        //this is a component which fetches all messages
       
        //keys are id's of specific messages  
        const keys = Object.keys(messages); //gets keys from messages

        //render messages with a call back function includes 2 params(key, index)
        return keys.map((key, index )) =>
            //loop over keys
            const message = messages [key];
            //if the last message is 0 return null, else return the last message
            const lastMessageKey = index ===0 ? null : keys [index - 1];
            //how we identify our own messages
            const isMyMessage = username === message.sender.username;

            //create inside a nested return a div as the message
            return (
                <div key={`msg_${index}` style={{width = '100%'}} }>
                    <div className="message-block"> //render the message
                        {
                            //if it is one of the components we created to put in our message block
                            isMyMessage
                            ? <MyMessage />
                            : <TheirMessage />

                        }
                    </div>

                    //This allows us to render the read receipts
                    <div classname="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', 
                        marginLeft: isMyMessage ? '0px' : '68px'}}>
                        read-receipts//copied to be implemented when we get the chat bubbles
                    </div>  
               </div>     

            );
    })
    }
    if(!chat) return 'Loading...'; //ensures we will have a chat in the return below

//Return the structure of the chatfeed
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className= "chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
            </div>
        </div>
    );
}

export default ChatFeed;


*/