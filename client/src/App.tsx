import './App.css'
import Login from './auth/Login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from './layout/MainLayout'
import Signup from './auth/Signup'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    // children:[
    //   {
    //     path:"/login"
    //   }
    // ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
])

function App() {

  return (
    <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </main>
  )
}

export default App