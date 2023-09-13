import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Error.jsx'
import Aparelhos from './routes/Aparelhos/Aparelhos.jsx'
import Visualizar from './routes/Visualizar/Visualizar.jsx'

const router = createBrowserRouter ([
  {
    path : "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },

      {
        path: "/Aparelhos",
        element:<Aparelhos/>,
      },

      {
        path: "/Aparelhos/Visualizar",
        element:<Visualizar/>,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
