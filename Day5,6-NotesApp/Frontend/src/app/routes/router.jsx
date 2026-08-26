import { createBrowserRouter } from "react-router";

import MainLayout from "../../layouts/MainLayout";
import AuthLayout from "../../layouts/AuthLayout";
import LoginPage from "../../features/auth/UI/pages/LoginPage";
import RegisterPage from "../../features/auth/UI/pages/RegisterPage";
import NotesPage from "../../features/notes/UI/pages/NotesPage";
import AboutPage from "../../features/about/UI/AboutPage";
import HomePage from "../../features/home/UI/Pages/HomePage";
import AddNotePage from "../../features/notes/UI/pages/AddNotePage";
import EditNotePage from "../../features/notes/UI/pages/EditNotePage";



const router = createBrowserRouter([
  

  // Auth
  {
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },

  // Main application
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/notes",
        element: <NotesPage />
      },
      {
        path: "/notes/add",
        element: <AddNotePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,

      },
      {
  path: "/notes/edit/:id",
  element: <EditNotePage />,
},
    ],
  },
]);

export default router;