import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import Root from './layout/Root';
function App() {
  const router = createBrowserRouter([{
     path: "/",
     element: <Root />,
     children: [
      {
        index: true,
        element: <HomePage/>
      }
     ]
  }])

   return (
    <ChakraProvider>
        <RouterProvider router={router}/>
    </ChakraProvider>
  
  )
}

export default App
