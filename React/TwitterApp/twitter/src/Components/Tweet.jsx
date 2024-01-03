import "../Css/Tweet.css"
import "../Css/TweetList.css"

const Tweet=({content,likeCount})=>{

    return (
        <div className="tweet-wrapper">
        <div className="tweet-content">
            {content}
        </div>
        <div className="likeCount">{likeCount} Likes</div>
        </div>
    )
}

export default Tweet