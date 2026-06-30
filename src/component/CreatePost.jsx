import { useContext, useRef } from "react";
import { PostList } from "../store/post-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const useridEl = useRef()
    const titleEl = useRef()
    const bodyEl = useRef()
    const likesEl = useRef()
    const dislikesEl = useRef()
    const tagsEl = useRef()

    const { addPost } = useContext(PostList)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const userId = useridEl.current.value
        const title = titleEl.current.value
        const body = bodyEl.current.value
        const likes = likesEl.current.value
        const dislikes = dislikesEl.current.value
        const tags = tagsEl.current.value.split(' ')

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                userId: Number(userId),
                body: body,
                reactions: { likes: Number(likes), dislikes: Number(dislikes) },
                tags: tags
            })
        })
            .then(res => res.json())
            .then(post => addPost(post));
            navigate("/")


        useridEl.current.value = ""
        titleEl.current.value = ""
        bodyEl.current.value = ""
        likesEl.current.value = ""
        dislikesEl.current.value = ""
        tagsEl.current.value = ""
    }

    return (
        <>
            <form className="my-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Enter User Id:</label>
                    <input type="text" className="form-control" id="userID" ref={useridEl} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" className="form-control" id="postTitle" placeholder="What's your thought today?" ref={titleEl} />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Body</label>
                    <textarea rows='4' type="text" className="form-control" id="postBody" placeholder="Express your views" ref={bodyEl} />
                </div>
                <div className="reactions">
                    <div className="mb-3">
                        <label htmlFor="likes" className="form-label">No of Likes</label>
                        <input type="text" className="form-control" id="postLikes" placeholder="How many Likes?" ref={likesEl} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dislikess" className="form-label">No of Dislikes</label>
                        <input type="text" className="form-control" id="postDislikes" placeholder="How many Dislikes?" ref={dislikesEl} />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="postTags" placeholder="Enter tags separated by space" ref={tagsEl} />
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    )
}

export default CreatePost;