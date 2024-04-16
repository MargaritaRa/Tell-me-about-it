// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENTS
import App from './components/App.jsx'
import Home from './components/Home'
import Posts from './components/Posts.jsx'
import PostsItem from './components/PostsItem.jsx'
import BookList from './components/BookList.jsx'
import ErrorPage from './components/ErrorPage.jsx'


// CSS
import './index.css'


// REACT-ROUTER-DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostForm from './components/PostForm.jsx'

// ROUTES
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path:"postForm",
        element: <PostForm />,
        errorElement: <ErrorPage />
      },
      {
        path: 'bookList',
        element: <BookList />,
        errorElement: <ErrorPage />
      },
      {
        path: "posts",
        element: <Posts />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'posts/:id',
            element: <PostsItem />,
            errorElement: <ErrorPage />
          },
        ]
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