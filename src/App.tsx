import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./views/Error";

import Home from "./views/Home";
import Main from "./components/home/Main";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

import Auth from "./views/Auth";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import ProtectedRoutes from "./components/commons/Protected";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Main />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    },
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path: '/auth/login',
          element: <Login />
        },
        {
          path: '/auth/signup',
          element: <Signup />
        }
      ]
    },
    {
      element: <ProtectedRoutes />,
      children: [
        /*
        RUTAS PROTEGIDAS
        */
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
