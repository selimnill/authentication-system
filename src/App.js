import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';
import RegisterReactbootstrap from './components/RegisterReactbootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactbootstrap></RegisterReactbootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactbootstrap></RegisterReactbootstrap>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  }

]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      {/* <RegisterReactbootstrap></RegisterReactbootstrap> */}
    </div>
  );
}

export default App;
