import React, { useState } from "react";
import { Navbar as MaterialNavbar, MobileNav, Typography, Button, IconButton, Card } from "@material-tailwind/react";
import CarsList from "./CarsList";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mt-4 mb-0 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" color="#F9F4F5" className="p-1 font-normal hover:bg-gradient-to-r from-[#1D976C] to-[#93F9B9] hover:text-transparent inline-block bg-clip-text">
        <a href="#" className="flex items-center font-mukta font-bold text-2xl">Pages</a>
      </Typography>
      <Typography as="li" variant="medium" color="#F9F4F5" className="p-1 font-normal hover:bg-gradient-to-r from-[#1D976C] to-[#93F9B9] hover:text-transparent inline-block bg-clip-text">
        <a href="#" className="flex items-center font-mukta font-bold text-2xl">Account</a>
      </Typography>
      <Typography as="li" variant="medium" color="#F9F4F5" className="p-1 font-normal hover:bg-gradient-to-r from-[#1D976C] to-[#93F9B9] hover:text-transparent inline-block bg-clip-text">
        <a href="#" className="flex items-center font-mukta font-bold text-2xl">Blocks</a>
      </Typography>
      <Typography as="li" variant="medium" color="#F9F4F5" className="p-1 font-normal hover:bg-gradient-to-r from-[#1D976C] to-[#93F9B9] hover:text-transparent inline-block bg-clip-text">
        <a href="#" className="flex items-center font-mukta font-bold text-2xl">Docs</a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <MaterialNavbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-4 mb-2 lg:px-8 lg:py-6 bg-transparent border-none shadow-none">
        <div className="flex items-center justify-between text-[#F9F4F5]">
            <img src="./stancespot.png" className="h-9" alt="" />
            <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-10 w-10" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth={5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h29M4 17h29M4 28h29" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </MaterialNavbar>
      <CarsList/>
    </div>
  );
}

export default Navbar;
