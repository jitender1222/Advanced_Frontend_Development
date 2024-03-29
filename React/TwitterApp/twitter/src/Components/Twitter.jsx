import { memo, useCallback, useState } from "react"
import AddTweet from "./AddTweet"
import TweetList from "./TweetList"

const initialDummyArray=[

    {id:1,content:"How are you ??" , likeCount: 20 },
    {id:2,content:"Hey WhatsUpp" , likeCount: 2 },
    {id:3,content:"What are you doing today ??" , likeCount: 10 },
  ]

const MemoisedTweet=memo(AddTweet)

const Twitter=()=>{

    const [tweet , setTweet] = useState(initialDummyArray);

    const handleTweet=useCallback((text)=>{

        let nextId= (tweet.length > 0) ? tweet[tweet.length-1].id+1 : 0 ; 
        setTweet([...tweet,{
            content: text,
            likeCount: Math.floor(Math.random()*10),
            id: nextId
        }])
    },[tweet])

    console.log(tweet);

    const editHandle=useCallback((tweets)=>{ // this is an updated tweet

        setTweet(
            tweet.map((currentTweet)=>{

                if(currentTweet.id === tweets.id){
                    return tweets;
                }
                else{
                    return currentTweet;
                }
            })
        )
    },[tweet])

    return (
        <>
        <MemoisedTweet onHandle={handleTweet} />
        <TweetList onHandleTweet={editHandle} tweets={tweet}  />
        </>
    )
}

export default Twitter