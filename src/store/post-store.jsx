import { createContext, useState, useEffect } from "react";
import { useReducer } from "react";

export const PostList = createContext({
    postList: [],
    fetching: false,
    addPost: () => {},
    deletePost: () => {}
})

const postListReducer = (currList, action) => {
    switch(action.type){
        case 'Delete Post':
            return currList.filter(post => post.id != action.payload.id)
        case 'Add_Post':
            return [action.payload, ...currList]
        case 'Fetch Initial':
            return action.payload.posts
        default:
            return currList
    }
}

const PostListProvider = ({children}) => {
    
    let [postList, dispatch] = useReducer(postListReducer, [])
    let [fetching, setFetching] = useState(false)

    useEffect(() => {
        
        const controller = new AbortController()
        const signal = controller.signal

        setFetching(true)
        fetch('https://dummyjson.com/posts', {signal})
            .then(res => res.json())
            .then(data => {
                fetchPosts(data.posts)
                setFetching(false)
            });

            return () => {
                controller.abort
            }
    }, [])

    const addPost = (post) => {
        dispatch({
            type: 'Add_Post',
            payload: post
        })
    }

    const deletePost = (id) => {
        dispatch({
            type: 'Delete Post',
            payload: {id}
        })
    }

    const fetchPosts = (posts) => {
        dispatch({
            type: 'Fetch Initial',
            payload: {posts}
        })
    }

    return <PostList.Provider value={{postList, fetching, addPost, deletePost}}>
        {children}
    </PostList.Provider>
}

// let defaultPostList = [
//     {
//         id: '1',
//         title: 'Manali Trip',
//         body: 'kya re public! bole to manali ja re la hai, maja karinga',
//         reactions: 9,
//         tags: ['trip', 'manali'],
//         user_id: 'user18'
//     },

//     {
//         id: '2',
//         title: 'Half-Graduation',
//         body: 'kya re public! bole to 2nd yr khatam half graduation hi bolde. khel khatam hai ab to',
//         reactions: 2,
//         tags: ['2nd yr', 'over'],
//         user_id: 'user0'
//     }
// ]

export default PostListProvider;