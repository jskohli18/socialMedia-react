import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-store";
import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"

const Post = ({ post }) => {
    
    const {deletePost} = useContext(PostList)

    return (
        <>
            <div className="card myCard">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map(tag => (
                        <span key={tag} className="badge text-bg-primary my-tag">{tag}</span>
                    ))}
                    <div className="alert alert-success my-reaction" role="alert">
                        <BiLike /> <span className="badge text-bg-secondary my-likes">{post.reactions.likes}</span>
                        <BiDislike /> <span className="badge text-bg-secondary">{post.reactions.dislikes}</span>
                    </div>
                </div>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                    <MdDelete />
                </span>
            </div>
        </>
    )
}

export default Post;