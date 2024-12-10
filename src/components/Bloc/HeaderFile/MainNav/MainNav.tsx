import { Button } from "../../../ui/button";

const MainNav = () => {
  return (
    <span className="flex space-x-2 items-center">
      <div>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
      </div>
      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Log In
      </Button>
    </span>
  );
};

export default MainNav;
