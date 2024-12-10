import React from "react";
import { NavLink } from "react-router-dom";

const Error: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-contain relative"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dbpcptmco/image/upload/v1720190973/peakpx_yzpecm.jpg)",
      }}
    >
      <div className="z-10 text-[white] flex item-center flex-col justify-center text-center">
        <h2>Ouch you are out of reach 🥺💔</h2>

        <div className="text-[25px] font-bold mt-[10px]">
          404 - Page Not Found
        </div>
        <p className="my-4 text-center w-[98%]">
          Sorry, the page you are looking for does not exist.Let get you back on
          track 🙂
        </p>
        <div className="flex space-x-4 items-center justify-center">
          <NavLink to="/">
            <button className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--prime)]">
              Home
            </button>
          </NavLink>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[black] opacity-80 z-0"></div>
    </div>
  );
};

export default Error;
