import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
            <Link to='/' className="flex items-center hover:text-blue-500 transition-colors">Home</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            Contact Us
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            Dashboard
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <Link to='menu' className="flex items-center hover:text-blue-500 transition-colors">Our Menu</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <Link to='order' className="flex items-center hover:text-blue-500 transition-colors">Order Now</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <Link to='login' className="flex items-center hover:text-blue-500 transition-colors">Login</Link>
        </Typography>
      </ul>
    );
  }
const Nav = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
   
    return (
      <Navbar className=" max-w-screen-xl fixed z-10 px-6 py-3 shadow-none bg-black opacity-40 text-white rounded-none">
        <div className="flex items-center justify-between ">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            BISTRO BOSS <br />
            Restaurant
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    );
};

export default Nav;