import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'swiper/css'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// fonts and icons
import '././assets/css/icofont.min.css'
import '././assets/css/animate.css'
import '././assets/css/style.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home'
import Blog from './blog/Blog'
import Shop from './shop/Shop'
import SingleProduct from './shop/SingleProduct'
import CartPage from './shop/CartPage'
import SingleBlog from './blog/SingleBlog'
import About from './about/About'
import Contact from './contact/Contact'
import AuthProvider from './contexts/AuthProvider'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Login from './components/Login'
import Signup from './components/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:id', element: <SingleBlog /> },
      { path: '/shop', element: <Shop /> },
      { path: '/shop/:id', element: <SingleProduct /> },
      {
        path: '/cart-page',
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <Signup />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
