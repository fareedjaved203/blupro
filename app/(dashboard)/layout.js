import Search from "@/components/shared/Search";
import React from "react";
import Image from "next/image";
import Sidebar from "@/components/shared/Sidebar";
import LogoutBtn from "@/components/shared/LogoutBtn";
import HamBurgerMenu from "@/components/shared/HamBurgerMenu";
import NotificationBadge from "@/components/shared/navbar/NotificationBadge";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-[100vh] font-mulish ">
        {/* <!-- sidebar --> */}
        <div className="hidden md:flex flex-col space-y-1 xl:w-78 bg-white text-sm md:fixed z-10 h-full px-6 overflow-y-auto">
          <div className="w-full flex justify-center items-center">
            <Image
              src={`/logo.svg`}
              width={150}
              height={150}
              alt="logo"
              className="object-contain	"
            />
          </div>
          <Search />
          <div
            className="flex flex-col flex-1 justify-between md:min-h-[120vh]"
            style={{ fontSize: "15px" }}
          >
            <Sidebar />
            <LogoutBtn />
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div className="flex flex-col flex-1 max-w-full">
          <div className="flex items-center justify-between h-16 bg-white md:px-10 py-2">
            <div className="flex items-center px-4">
              <HamBurgerMenu />
            </div>
            <div className="flex items-center pr-4 text-black space-x-8">
              <NotificationBadge />
              <div className="flex space-x-1 items-center">
                <MdLanguage size={32} />
                <div>EN</div>
                <div>|</div>
                <div>USD</div>
              </div>
              <div className="flex border border-4 border-black rounded-full p-1 justify-center items-center space-x-1">
                <Image
                  src={"/profile.svg"}
                  width={32}
                  height={32}
                  alt="profile"
                />
                <IoIosArrowDown size={20} />
              </div>
            </div>
          </div>
          <div className="p-4 pb-0 min-h-screen md:ml-80 bg-[#FAFCFF] border-l border-t">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
