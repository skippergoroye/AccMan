import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/PNG/logo.png";
import { Button } from "./ui/button";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };



  return (
    <nav className="fixed w-full z-10">
      <div className="items-center justify-between bg-white md:flex md:px-10 px-7 py-4">
        <div className="cursor-pointer w-28">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div
          onClick={toggleMenu}
          className="md:hidden cursor-pointer absolute right-8 top-6"
        >
          {open ? <X /> : <AlignJustify />}
        </div>

      
        <ul
          className={`gap-2 md:flex md:items-center md:static absolute left-0 md:pl-0 pl-9 bg-white md:z-auto z-[-1] w-full md:w-auto transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-90px]"
          } `}
        >
          <li className="mb-3 md:mb-0 md:my-0 my-7">
            <NavLink to="/login">
              <Button
                variant="ghost"
                className="p-0 hover:bg-transparent text-md text-violet-500"
              >
                Login{" "}
              </Button>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/create-account">
              <Button className="hover:bg-violet-900 text-white bg-violet-500">
                Create Account
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
