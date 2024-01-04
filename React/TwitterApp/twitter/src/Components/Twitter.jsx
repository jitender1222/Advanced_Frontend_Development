import AddTweet from "./AddTweet"
import TweetList from "./TweetList"

const initialDummyArray=[

    {content:"How are you ??" , likeCount: 20 },
    {content:"Hey WhatsUpp" , likeCount: 2 },
    {content:"What are you doing today ??" , likeCount: 10 },
  ]



const Twitter=()=>{

    return (
        <>
        <AddTweet />
        <TweetList tweets={initialDummyArray}  />
        </>
    )
}

export default Twitter