import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
/* Tweet ({tweet}){
  const {user, timestamp, message} = tweet
  const {name, image, handle} = user
} 
<span className="name"> {name} </span> 
<span className="handle"> @{handle} </span> 
<span className="timestamp"> {timestamp} </span> 

*/
