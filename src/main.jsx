import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import PostList from './component/PostList.jsx'
import CreatePost from './component/CreatePost.jsx'

import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/", element: <PostList />
  },
  {
    path: "/createPost", element: <CreatePost />
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)