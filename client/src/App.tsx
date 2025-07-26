import { createBrowserRouter, RouterProvider } from 'react-router';

import Login from './pages/auth/Login';
import AuthLayout from './layouts/AuthLayout';
import Signup from './pages/auth/Signup';

function App() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      path: '/auth',
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
