export const NavBar = () => {
  return (
    <nav className="w-full flex justify-center items-center bg-navbar fixed top-0 z-50">
      {/* max-w-7xl esta podia estar en el futuro */}
      <div className="w-full  flex items-center justify-between h-[80px] px-8 text-white">
        <h1 className="font-bold text-3xl">DesingHome</h1>

        <ul className="flex gap-5 font-medium text-lg">
          <li>Services</li>
          <li>Contact</li>
          <li>Clients</li>
        </ul>
      </div>
    </nav>
  );
};
