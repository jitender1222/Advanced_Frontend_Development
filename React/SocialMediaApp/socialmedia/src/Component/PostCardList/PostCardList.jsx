import { useContext } from 'react';
import PostCard from '../PostCard';
import PostContext from '../../Provider/PostsProvider';

const PostCardList=()=>{

    const {post,setPost}=useContext(PostContext);

      return (
        post.map((post)=> <PostCard 
        text={post.text} 
        image={post.image} 
        key={post.id} 
        authorFirstName={post.owner.firstName} />)
      )

}

export default PostCardList;

