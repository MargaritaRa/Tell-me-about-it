// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENTS
import App from './components/App.jsx'
import Home from './components/Home'
import Create from './components/Create.jsx'
import Contact from './components/Contact'
import Post from './components/Post'
import PostItem from './components/PostItem'
import BookList from './components/BookList.jsx'

// CSS
import './index.css'


// REACT-ROUTER-DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// ROUTES
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "create",
        element: <Create />,
        children: [
          {
            path: 'post',
            element: <Post />
          },
          {
            path: 'post/:id',
            element: <PostItem />
          },
          {
            path: 'bookList',
            element: <BookList />
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]

// ROUTER
const router = createBrowserRouter(routes)

// RENDER
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)