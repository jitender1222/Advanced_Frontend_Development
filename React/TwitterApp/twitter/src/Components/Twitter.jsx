import { useState } from "react"
import AddTweet from "./AddTweet"
import TweetList from "./TweetList"

const initialDummyArray=[

    {content:"How are you ??" , likeCount: 20 },
    {content:"Hey WhatsUpp" , likeCount: 2 },
    {content:"What are you doing today ??" , likeCount: 10 },
  ]



const Twitter=()=>{

    const [tweet , setTweet] = useState(initialDummyArray);

    const handleTweet=(text)=>{

        const nextId= tweet.length > 0 ? tweet[tweet.length-1].id+1 : 0 ; 
        setTweet([...tweet,{
            content: text,
            likeCount: Math.floor(Math.random()*10),
            id: nextId
        }])
    }

    return (
        <>
        <AddTweet onHandle={handleTweet} />
        <TweetList tweets={tweet}  />
        </>
    )
}

export default Twitter