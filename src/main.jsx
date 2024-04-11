// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENTS
import App from './components/App.jsx'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import PortfolioItem from './components/PortfolioItem'
import Bio from './components/Bio'

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

// ROUTER
const router = createBrowserRouter(routes)

// RENDER
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)