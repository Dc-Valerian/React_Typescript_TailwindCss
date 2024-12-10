import { Suspense, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/Bloc/Loader/Loader";
import { mainRoute } from "./AppRoutes";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Suspense>
      <RouterProvider router={mainRoute} />
    </Suspense>
  );
}
