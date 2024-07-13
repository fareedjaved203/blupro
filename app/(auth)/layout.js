import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }) => {
  return (
    <div className=" h-screen w-full flex flex-col md:flex-row items-center justify-center font-mulish">
      <div className="w-full h-full relative hidden md:block">
        <Image
          src="/auth-img.svg"
          alt="logo icon"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      <div className="bg-white w-full p-4 flex items-center justify-center mt-4">
        <div className="p-4 md:w-3/4 w-full">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
