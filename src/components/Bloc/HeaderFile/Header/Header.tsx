import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";
import MainNav from "../MainNav/MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 ">
      <div className="container mx-auto py-6 px-5 flex justify-between items-center">
        <Link
          className="text-3xl animate-pulse font-bold tracking-tight text-orange-500"
          to="/"
        >
          ValerianEats.Com
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block bg-[red]  gap-3">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
