"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import toast from "react-hot-toast";

const LogoutBtn = () => {
  const router = useRouter();
  //   const logout = async () => {
  //     await doSignOut();
  //     await deleteUser();
  //     toast.success("Logged Out Successfully");
  //     router.push("/auth/login");
  //   };
  return (
    <div style={{ fontSize: "16px" }} className="pb-10">
      <div className="flex items-center justify-start cursor-pointer font-bold text-pinkColor rounded-md px-4 mt-4">
        <IoArrowBack className="mr-3 " />
        Privacy Policy
      </div>
      <div
        //   onClick={logout}
        className="text-[#E40000] flex items-center justify-start cursor-pointer font-bold rounded-md px-4 mt-4"
      >
        <IoArrowBack className="mr-3 " />
        Logout
      </div>
    </div>
  );
};

export default LogoutBtn;
