import { useState } from "react"
import "../Css/Tweet.css"
import "../Css/TweetList.css"

const Tweet=({content,likeCount,onEdit,tweetId})=>{

    console.log("tweetId",tweetId)

    const [isEdit,setIsEdit] = useState(false);

    return (
        <div className="tweet-wrapper">
            <div className="tweetEditWrapper">
                {
                    (isEdit) ? <input type="text" value={content}  
                    onChange={(e)=> onEdit({
                        id:tweetId,
                        content:e.target.value,
                        likeCount:likeCount
                    }) }

                    /> : content
                }
            <button className="editBtn" onClick={() => setIsEdit(!isEdit) } >{ (isEdit) ? "Save" : "Edit" }</button>
        </div>
        <div className="likeCount">{likeCount} Likes</div>
        </div>
    )
}

export default Tweet