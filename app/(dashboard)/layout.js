import Search from "@/components/shared/Search";
import React from "react";
import Image from "next/image";
import Sidebar from "@/components/shared/Sidebar";
import LogoutBtn from "@/components/shared/LogoutBtn";
import HamBurgerMenu from "@/components/shared/HamBurgerMenu";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-[100vh] font-mulish ">
        {/* <!-- sidebar --> */}
        <div className="hidden md:flex flex-col space-y-2 xl:w-78 bg-white text-sm md:fixed z-10 h-full px-6">
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
            className="flex flex-col flex-1 overflow-y-auto justify-between h-full"
            style={{ fontSize: "15px" }}
          >
            <Sidebar />
            <LogoutBtn />
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div className="flex flex-col flex-1 max-w-full ">
          <div className="flex items-center justify-between h-16 bg-white">
            <div className="flex items-center px-4">
              <HamBurgerMenu />
              {/* <span className="hidden md:block md:ml-64">
                <CurrentDate />
              </span> */}
            </div>
            <div className="flex items-center pr-4 text-black">
              <span
                className="mr-4"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  paddingRight: "5px",
                }}
              >
                Admin
              </span>
              {/* <Image
                src={"/Rectangle 338.svg"}
                width={65}
                height={65}
                alt="logo icon"
                className="w-12 h-12 rounded-lg p-1"
                priority={false}
              /> */}
            </div>
          </div>
          <div className="p-4 pb-0 content-body md:ml-80">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
