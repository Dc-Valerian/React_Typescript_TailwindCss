import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Bloc/ErrorPage/Error";
import Layout from "./layouts/Layout";
import HomeScreen from "./components/Pages/HomeScreen/HomeScreen";

export const mainRoute = createBrowserRouter([
  //  404 PAGE
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
