import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "./pages/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import FeedbackDetail from "./pages/feedback-detail/FeedbackDetail";
import CreateNewFeedback from "./pages/edit-feedback/CreateNewFeedback";

function App() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      path: "/auth",
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/feedback-detail/:id",
      element: <FeedbackDetail />,
    },
    {
      path: "create-feedback",
      element: <CreateNewFeedback />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
