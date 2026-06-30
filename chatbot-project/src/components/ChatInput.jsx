   
   import { useState,} from 'react'
   import {Chatbot} from 'supersimpledev';
  export function ChatInput({chatMessages,setChatMessages}){
           const [inputText, setInputText]= useState('');
            function saveInput(event){
                setInputText(event.target.value);
            }
            function sendMessage(){
                const newChatmessages =[
                ...chatMessages,
                {
                    message:inputText,
                    sender:'user',
                    id:crypto.randomUUID()
                }
               ]
                  setChatMessages(newChatmessages);

                const response =Chatbot.getResponse(inputText);
                setChatMessages([
                ...newChatmessages,
                {
                    message:response,
                    sender:'robot',
                    id:crypto.randomUUID()
                }
               ]);


               setInputText('');
            }
            return (
                <div className="chat-input-container">
                    <input className="chat-input" placeholder="Send a Message To ChartBot" size="34" onChange={saveInput} value={inputText}></input>
                    <button  className ="send-button" onClick={sendMessage}>Send</button>
                </div>
            );
        }