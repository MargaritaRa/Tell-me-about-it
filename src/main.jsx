import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Home from './components/Home'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Bio from './components/Bio'
import PortfolioItem from "./components/PortfolioItem"

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
        path: "about",
        element: <About />,
        children: [
          {
            path: 'portfolio',
            element: <Portfolio />
          },
          {
            path: 'portfolio/:id',
            element: <PortfolioItem />
          },
          {
            path: 'bio',
            element: <Bio />
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

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>
)
