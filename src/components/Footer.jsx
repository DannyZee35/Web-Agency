import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>  
 <div className="h-auto sm:h-[1000px] py-0 sm:py-[500px]  relative overflow-hidden">

<div className=" ">
 
        <div className="footer h-[1700px] w-[2600px] sm:block hidden   " > </div>
 
  <div className="mb-[100px]  flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10 mt-20 bg-white rounded-xl max-w-[1200px] m-auto px-20 p-10">
    <div className="w-full sm:w-[400px]">
      <h1 className="text-md font-bold mb-10">Zee</h1>
      <p className="text-sm text-gray mb-5"> 
        Ready to elevate your online presence? Contact us today to discuss
        your project and discover how we can bring your vision to life.
      </p>
      <p className="text-sm text-gray mb-5">Copyright © 2024</p>
    </div>

    <div className=" ">
      <ul className="flex items-center flex-wrap sm:flex-row justify-between gap-10">
        <li className="transition duration-300 ease-in-out transform hover:scale-105">
          <Link href={'#home'} className="hover:font-bold hover:text-custom-purple">Home</Link>
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105">
          <Link href={'#about'} className="hover:font-bold hover:text-custom-purple">About</Link>
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105">
          <Link href={'#projects'} className="hover:font-bold hover:text-custom-purple">Projects</Link>
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105">
          <Link href={'#service'} className="hover:font-bold hover:text-custom-purple">Services</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
    
</div>
    </>
  );
};

export default Footer;
