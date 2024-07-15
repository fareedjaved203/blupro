"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { PiUsersThree } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { LiaHandshake } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink(pathname);
  }, []);

  return (
    <nav className="xl:flex-1 bg-white">
      <Link
        href="/"
        className={`flex items-center px-4 py-4 mt-4 justify-start font-bold rounded-md hover:bg-[#38B6FF] hover:text-white ${
          activeLink === "dashboard" ? "bg-[#38B6FF] text-white" : ""
        }`}
        onClick={() => handleLinkClick("")}
        style={{ fontSize: "16px" }}
      >
        <RiHome5Line className="text-2xl mr-3" />
        Dashboard
      </Link>

      <Link
        href="/user"
        className={`flex items-center px-4 py-4 mt-4 justify-start font-bold rounded-md hover:bg-[#38B6FF] hover:text-white ${
          activeLink === "user" ? "bg-[#38B6FF] text-white" : ""
        }`}
        onClick={() => handleLinkClick("user")}
        style={{ fontSize: "16px" }}
      >
        <PiUsersThree className="text-2xl mr-3" />
        User Management
      </Link>

      <Link
        href="/inventory"
        className={`flex items-center px-4 py-4 mt-4 justify-start font-bold rounded-md hover:bg-[#38B6FF] hover:text-white ${
          activeLink === "inventory" ? "bg-[#38B6FF] text-white" : ""
        }`}
        onClick={() => handleLinkClick("inventory")}
        style={{ fontSize: "16px" }}
      >
        <MdOutlineInventory2 className="text-2xl mr-3" />
        Inventory Management
      </Link>

      <Link
        href="/live"
        className={`flex items-center px-4 py-4 mt-4 justify-start font-bold rounded-md hover:bg-[#38B6FF] hover:text-white ${
          activeLink === "live" ? "bg-[#38B6FF] text-white" : ""
        }`}
        onClick={() => handleLinkClick("live")}
        style={{ fontSize: "16px" }}
      >
        <MdOutlineLiveTv className="text-2xl mr-3" />
        Go Live
      </Link>

      <Link
        href="/connect"
        className={`flex items-center px-4 py-4 mt-4 justify-start font-bold rounded-md hover:bg-[#38B6FF] hover:text-white ${
          activeLink === "connect" ? "bg-[#38B6FF] text-white" : ""
        }`}
        onClick={() => handleLinkClick("connect")}
        style={{ fontSize: "16px" }}
      >
        <LiaHandshake className="text-2xl mr-3" />
        Connect Management
      </Link>

      <Link
        href="/activity"
        className={`flex items-center px-4 py-4 mt-4 justify-start font-bold rounded-md hover:bg-[#38B6FF] hover:text-white ${
          activeLink === "activity" ? "bg-[#38B6FF] text-white" : ""
        }`}
        onClick={() => handleLinkClick("activity")}
        style={{ fontSize: "16px" }}
      >
        <IoSettingsOutline className="text-2xl mr-3" />
        Activity Management
      </Link>
    </nav>
  );
};

export default Sidebar;
