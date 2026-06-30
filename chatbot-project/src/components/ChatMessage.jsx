
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
export function ChatMessage({message,sender}){
            //const message = props.message;
            //const sender = props.sender;
            //short cuts
            //const {message,sender}=props;
          
            return(
                <div className={sender==='user'?'chat-message-user':'chat-message-robot'}>
                    {sender ==="robot" && <img src={RobotProfileImage} width="50"></img>}
                    <div className="chat-message-text">{message}</div>
                    {sender ==="user" &&<img src={UserProfileImage} width="50"></img>}
                </div>
            );
        }