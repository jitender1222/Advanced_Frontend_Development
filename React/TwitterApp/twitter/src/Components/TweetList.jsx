import Tweet from "./Tweet"

const TweetList=({tweets})=>{

    return (
        <>
       <ul>
        {
            tweets.map((tweet)=>(
                <li>
                    <Tweet content ={tweet.content} likeCount={tweet.likeCount}  /> 
                </li>
            ))
        }
       </ul>
        </>
    )
}

export default TweetList