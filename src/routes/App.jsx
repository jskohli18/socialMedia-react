import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from '../component/header.jsx'
import Footer from '../component/footer.jsx'
import Sidebar from '../component/sidebar.jsx'
import PostList from '../component/PostList.jsx'
import CreatePost from '../component/CreatePost.jsx'
import PostListProvider from '../store/post-store.jsx'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {

  // const [currTab, setTab] = useState('Home')

  return (
    <>
      <PostListProvider>
        <div className="contentbox">
          <Sidebar />
          <div className="head-foot">
            <Header></Header>

            {/* {currTab === 'Home' ? <PostList></PostList> : <CreatePost></CreatePost>} */}
            <Outlet />

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App
