import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Root from './layout/Root';
import HomePage from './pages/HomePage';
import TeachersPage from "./pages/TeachersPage.jsx";

function App() {
  const router = createBrowserRouter([{
     path: "/",
     element: <Root />,
     children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
         path: "/teachers",
         element: <TeachersPage />
      }
     ]
  }])

   return (
    <RouterProvider router={router}/>
  )
}

export default App
