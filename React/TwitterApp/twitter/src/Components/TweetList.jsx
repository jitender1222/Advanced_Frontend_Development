import Tweet from "./Tweet"

const TweetList=({tweets})=>{

    return (
        <>
       <ul className="tweet-list">
        {
            tweets.map((tweet)=>(
                <li className="twitter-wrapper">
                    <Tweet content ={tweet.content} likeCount={tweet.likeCount}  /> 
                </li>
            ))
        }
       </ul>
        </>
    )
}

export default TweetList