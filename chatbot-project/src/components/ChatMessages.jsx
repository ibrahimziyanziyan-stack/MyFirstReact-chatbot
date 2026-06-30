import { useRef,useEffect} from 'react'
import {ChatMessage}from './ChatMessage';
 function ChatMessages({chatMessages}){
            //automatically save html elemnt from the component.
            const chatMessagesRef=useRef(null);
            //to  scroll automaticallt
            useEffect(()=>{
              const containerElem =chatMessagesRef.current
              if(containerElem){containerElem.scrollTop = containerElem.scrollHeight;}
            },[chatMessages]); 
        return (
            <div className='chat-message-container' ref ={chatMessagesRef}>
             
                {chatMessages.map((chatMessages)=>{
                    return(
                    <ChatMessage message={chatMessages.message} 
                    sender ={chatMessages.sender} 
                    key={chatMessages.id}/>
                    );
                })}
            </div>
            );
        }
        export default ChatMessages;