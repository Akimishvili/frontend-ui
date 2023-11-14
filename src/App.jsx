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
import AdminStudentsPage from "./pages/admin/StudentsPage.jsx";
import AdminTeachersPage from "./pages/admin/TeachersPage.jsx";
import StudentPage from "./pages/StudentsPage.jsx";
import Dashboard from "./layout/Dashboard.jsx";
import Desk from "./partials/Desk.jsx";
import CreateTeacher from "./pages/admin/CreateTeacher.jsx";
import CreateStudent from "./pages/admin/CreateStudent.jsx";

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
      },
      {
          path: "/students",
          element: <StudentPage />
      }
     ]
  },{
      path: "/admin",
      element: <Dashboard />,
      children: [
          {
              index: true,
              element: <Desk />
          },
          {
              path: "teachers",
              element: <AdminTeachersPage/>
          },
          {
              path: "teachers/create",
              element: <CreateTeacher />
          },
          {
              path: "students",
              element: <AdminStudentsPage />
          },
          {
              path: "students/create",
              element: <CreateStudent />
          }
      ]
  }
  ])

   return (
    <RouterProvider router={router}/>
  )
}

export default App
