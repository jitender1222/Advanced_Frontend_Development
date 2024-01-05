import Tweet from "./Tweet"

const TweetList=({tweets,onHandleTweet})=>{

    return (
        <>
       <ul className="tweet-list">
        {
            tweets.map((tweet)=>(
                console.log(tweet),
                <li className="twitter-wrapper" key={tweet.id}>
                    <Tweet onEdit={onHandleTweet} tweetId={tweet.id} content ={tweet.content} likeCount={tweet.likeCount}  /> 
                </li>
            ))
        }
       </ul>
        </>
    )
}

export default TweetList