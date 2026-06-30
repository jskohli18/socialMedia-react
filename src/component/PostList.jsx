import Post from "./Post";
import { useContext, useState, useEffect } from "react";
import { PostList as postListdata } from "../store/post-store";
import Welcome from "./WelcomeMssg";
import Loading from "./loading";

const PostList = () => {

    let { postList, fetching } = useContext(postListdata)

    // let [dataFetched, setFetched] = useState(false)

    // if (!dataFetched) {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then(data => { fetchPosts(data.posts) });

    //     dataFetched = true
    // }

    return (
        <>
            {fetching && <Loading></Loading>}
            {!fetching && postList.length === 0 && <Welcome></Welcome>}
            {!fetching && postList.map(post => (
                <Post key={post.id} post={post}></Post>
            ))}
        </>
    )
}

export default PostList