import React from "react";
import PostsItems from './post-items'
import postArray from "./posts.json";

const PostsItemsList = () => {
    return(
        <div className="list-group"> {
            postArray.map(post =>
            <PostsItems
                key={post.logo}
                post={post}/>
            )
        }
        </div>
    );
};

export default PostsItemsList;