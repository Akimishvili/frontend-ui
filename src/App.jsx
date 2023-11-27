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
import AdminTeachersPage from "./pages/admin/TeachersPage.jsx";
import AdminStudentsPage from "./pages/admin/StudentsPage.jsx";
import AdminGroupsPage from "./pages/admin/GroupsPage.jsx";
import AdminProfessionsPage from "./pages/admin/ProfessionsPage.jsx";
import AdminCollegesPage from "./pages/admin/CollegesPage.jsx";
import StudentPage from "./pages/StudentsPage.jsx";
import Dashboard from "./layout/Dashboard.jsx";
import Desk from "./partials/Desk.jsx";
import CreateTeacher from "./pages/admin/CreateTeacher.jsx";
import CreateStudent from "./pages/admin/CreateStudent.jsx";
import SingleTeacherPage from "./pages/SingleTeacherPage.jsx";
import SingleStudentPage from "./pages/SingleStudentPage.jsx";
import EditTeacher from "./pages/admin/EditTeacher.jsx";
import GroupsPage from "./pages/GroupsPage.jsx";
import ProfessionsPage from "./pages/ProfessionsPage.jsx";
import SingleGroupPage from "./pages/SingleGroupPage.jsx";
import CreateGroup from "./pages/admin/CreateGroup.jsx";
import CreateTeacherGroupRelation from "./pages/admin/CreateTeacherGroupRelation.jsx";
import CreateProfession from "./pages/admin/CreateProfession.jsx";
import CreateCollege from "./pages/admin/CreateCollege.jsx";
import CreateTeacherCollegeRelation from "./pages/admin/CreateTeacherCollegeRelation.jsx";
import CreateGroupStudentRelation from "./pages/admin/CreateGroupStudentRelation.jsx";
import CreateCollegeProfessionRelation from "./pages/admin/CreateCollegeProfessionRelation.jsx";
import CollegesPage from "./pages/CollegesPage.jsx";
import SingleCollegePage from "./pages/SingleCollegePage.jsx";
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
         path: "/teachers/:id",
         element: <SingleTeacherPage />
      },
      {
          path: "/students",
          element: <StudentPage />
      },
      {
          path: "/students/:id",
          element: <SingleStudentPage />
      },
      {
          path: "/groups",
          element: <GroupsPage />
      },
      {
          path: "/groups/:id",
          element: <SingleGroupPage />
      },
      {
          path: "/professions",
          element: <ProfessionsPage />
      },
      {
          path: "/colleges",
          element: <CollegesPage />
      },
      {
          path: "/colleges/:id",
          element: <SingleCollegePage />
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
              path: "teachers/:id/edit",
              element: <EditTeacher />
          },
          {
              path: "students",
              element: <AdminStudentsPage />
          },
          {
              path: "students/create",
              element: <CreateStudent />
          },
          {
              path: "groups",
              element: <AdminGroupsPage />
          },
          {
              path: "groups/create",
              element: <CreateGroup />
          },
          {
              path: "student-group/create",
              element: <CreateGroupStudentRelation />
          },
          {
              path: "professions",
              element: <AdminProfessionsPage />
          },
          {
              path: "professions/create",
              element: <CreateProfession />
          },
          {
              path: "colleges",
              element: <AdminCollegesPage />
          },
          {
              path: "colleges/create",
              element: <CreateCollege />
          },
          {
              path: "college-profession/create",
              element: <CreateCollegeProfessionRelation />
          },
          {
              path: "teacher-group/create",
              element: <CreateTeacherGroupRelation />
          },
          {
              path: "teacher-college/create",
              element: <CreateTeacherCollegeRelation />
          }
      ]
  }
  ])

   return (
    <RouterProvider router={router}/>
  )
}

export default App
