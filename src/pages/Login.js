import React, { useState } from 'react';
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { LuKeyRound } from "react-icons/lu";
import img1 from '../assets/codeantai pic.jpg';

function Login() {
  const [options, setOptions] = useState("four");

  return (
    <div className="flex w-full">

      <div className="hidden lg:flex justify-center items-center w-1/2 bg-transparent p-6 relative group">
        <div className="relative bg-white shadow-lg rounded-xl p-6 mb-4 border border-gray-200">
          {/* Main Content */}
          <div className="flex items-center mb-4">
            <img className="h-9 mr-4 mt-[-8px]" src={img1} alt="Logo" />
            <h3 className="text-xl font-bold">AI to Detect & Autofix Bad Code</h3>
          </div>
          <p className="border-b border-gray-300 mb-4"></p>

          <div className="flex justify-between mt-8 space-x-6">
            <div className="text-center">
              <b className="text-xl">30+</b><br />
              Language support
            </div>
            <div className="text-center">
              <b className="text-xl">10K+</b><br />
              Language support
            </div>
            <div className="text-center">
              <b className="text-xl">100K+</b><br />
              Language support
            </div>
          </div>

          {/* Hover div */}
          <div className="absolute hidden group-hover:flex bg-white text-black text-sm rounded-md p-6 shadow-md bottom-[-150px] right-[-100px] w-64">
            {/* Section 1: Violet Pie Chart and Small Paragraph */}
            <div className="flex-shrink-0 mr-4">
              {/* Violet Pie Chart */}
              <div className="w-12 h-12 relative">
                <svg width="100%" height="100%" viewBox="0 0 36 36" className="circular-chart">
                  {/* Background Circle */}
                  <circle className="circle-bg" cx="18" cy="18" r="15.9155" stroke="#e6e6e6" strokeWidth="3"></circle>

                  {/* Violet Pie Slice (50%) */}
                  <circle
                    className="circle"
                    cx="18"
                    cy="18"
                    r="15.9155"
                    stroke="#8A2BE2"
                    strokeWidth="3"
                    strokeDasharray="50 100"  // 50% pie slice
                    strokeDashoffset="25"
                  ></circle>
                </svg>
              </div>
              <p className="font-bold mt-2 text-xl text-black">Issue Fixed</p>
              <p className="font-bold mt-2 text-4xl text-black">500+</p>
            </div>

            {/* Section 2: Text */}
            <div className="flex-1">
              <p className="font-bold">14</p>
              <p className="text-xs mt-1">This week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Full width on mobile */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white p-6">
        <div className="w-full max-w-lg shadow-lg rounded-xl p-8 mt-5">
          <div className="flex justify-center items-center mb-5">
            <img className="h-9 mr-4 mt-[-2px]" src={img1} alt="Logo" />
            <h2 className="text-2xl font-normal mx-2 mr-8">CodeAnt AI</h2>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Welcome to CodeAnt AI</h2>

          <div className="btns mb-4 flex flex-row space-x-4 mx-6">
            <button
              onClick={() => setOptions("four")}
              className={`h-10 w-full sm:w-64 border-2 border-gray-300 ${options === "four" ? "bg-blue-600 text-white" : "bg-transparent text-black"} rounded-lg`}
            >
              SAAS
            </button>
            <button
              onClick={() => setOptions("two")}
              className={`h-10 w-full sm:w-64 border-2 border-gray-300 ${options === "two" ? "bg-blue-600 text-white" : "bg-transparent text-black"} rounded-lg`}
            >
              SelfHosted
            </button>
          </div>

          <p className="border-b border-gray-300 mb-4"></p>

          <div className="options mx-2">
            {options === "four" ? (
              <>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaGithub size={22} />
                  <p className="font-md ml-4 text-center">Signin with Github</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaBitbucket size={22} color="blue" />
                  <p className="font-md ml-4 text-center">Signin with Bitbucket</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <VscAzureDevops size={22} color="blue" />
                  <p className="font-md ml-4 text-center">Signin with Azure</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaGitlab size={22} color="red" />
                  <p className="font-md ml-4 text-center">Signin with Gitlab</p>
                </div>
              </>
            ) : (
              <>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaGitlab size={22} color="red" />
                  <p className="font-md ml-4 text-center">Self Hosted Gitlab</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <LuKeyRound size={22} />
                  <p className="font-md ml-4 text-center">Signin with SSO</p>
                </div>
              </>
            )}
          </div>
        </div>

        <p className="text-center mt-4 text-sm">
          By signing up you agree to the <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
