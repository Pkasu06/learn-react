import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Login, EditPost, AddPost, AllPosts, Post, Signup } from './pages/index.js'
import { Protected } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protected authentication={true}>
            <Home />
          </Protected>
        )
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: "/all-posts",
        element: (
          <Protected authentication = {true}>
            <AllPosts />
          </Protected>
        )
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication = {true}>
            <AddPost />
          </Protected>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication>
            <EditPost />
          </Protected>
        )
      },
      {
        path: "/post/:slug",
        element: (
          <Protected authentication = {true}>
            <Post />
          </Protected>
        )
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </React.StrictMode>
)