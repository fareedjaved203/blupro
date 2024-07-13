"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BlueBtn from "@/components/shared/auth/BlueBtn";
import { GoogleBtn } from "@/components/shared/GoogleBtn";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="mb-4">
        <div className="text-2xl mb-4 flex items-center flex-col space-y-1">
          <Image
            src="/hands.svg"
            width={100}
            height={100}
            alt="logo icon"
            className="mr-2"
            priority={false}
          />
          <div
            style={{
              fontWeight: 800,
              fontSize: "32.36px",
              lineHeight: "35.6px",
              color: "#333333",
            }}
          >
            Sign in
          </div>
          <div
            className="pt-2"
            style={{
              color: "##828282",
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: "3%",
            }}
          >
            Enter your credential to access your account.{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-8">
        <label
          htmlFor="email"
          className="mb-2"
          style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: "16px" }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full pl-2 rounded login-input"
          style={{
            backgroundColor: "rgba(76, 73, 237, 0.1)",
            height: "46px",
          }}
        />

        <label
          htmlFor="password"
          className="mt-4 mb-2 flex justify-between items-center w-full"
          style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: "16px" }}
        >
          Password
          <Link
            href="/forget-password"
            className="hover:underline"
            style={{
              color: "rgba(0, 0, 0, 1)",
              opacity: "50%",
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            Forgot Password?
          </Link>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-2 rounded login-input"
          style={{
            backgroundColor: "rgba(76, 73, 237, 0.1)",
            height: "46px",
          }}
        />

        <div className="w-full mt-4">
          <BlueBtn title={"Login"} />
          <div className="text-center mt-4">
            Don&#39;t have an account?{" "}
            <b>
              <Link href={"/signup"}>Register here!</Link>
            </b>
          </div>

          <div class="my-6 text-center">
            <div class=" text-gray-600 flex items-center justify-center">
              <span class="flex-grow border-t border-gray-300"></span>
              <span class="leading-none px-2 text-sm font-medium bg-white">
                Or
              </span>
              <span class="flex-grow border-t border-gray-300"></span>
            </div>
          </div>

          <GoogleBtn />
          <div className="text-sm my-6 text-[#333333] text-center">
            Ultra Healer Pvt. Ltd 2023©, All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
