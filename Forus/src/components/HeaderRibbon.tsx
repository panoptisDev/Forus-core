import { Link } from 'react-router-dom';
import React from "react";
import { GoChevronRight } from "react-icons/go";
import {AiOutlineInfoCircle} from "react-icons/ai";

const HeaderRibbon = () => {
  return (
    <main
      className="p-2 flex justify-center items-center ribbon-animation
      bg-gradient-to-r from-blue-400 to-green-600 hover:bg-blue-500
      hover:text-black transition duration-1000 ease-in-out"
    >
      <div className="flex space-x-7">
        {/* <span
          className="text-[0.9rem] bg-highlight py-1 text-center px-4 
              font-semibold rounded-full"
        > */}
        
        {/* </span> */}
        <Link to="/forus" >

          <div className="cursor-pointer montserrat-small font-semibold flex justify-center hover:text-white text-gray-100 items-center">
          <AiOutlineInfoCircle className="text-[1.2rem]"    size={24}/>
            <h4 className="text-[.7rem] ml-2 xl:text-[.9rem] text-inherit">
              Welcome To Forus ( Live on Testnets )
            </h4>
            <span>
              <GoChevronRight className="ml-2 text-[1.4rem] text-inherit" />
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HeaderRibbon;