const Footer = () => {
  return (
    <div className="bg-orange-500 flex items-center justify-center py-8">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl animate-pulse text-white tracking-tight font-bold ">
          ValerianEats.Com
        </span>

        <div className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
