const Tweet=({content,likeCount})=>{

    return (
        <>
        <div className="tweet-content">
            {content}
        </div>
        <div className="likeCount">{likeCount} Likes</div>
        </>
    )
}

export default Tweet