import Footer from "@/components/Bloc/Footer/Footer";
import Header from "@/components/Bloc/HeaderFile/Header/Header";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
