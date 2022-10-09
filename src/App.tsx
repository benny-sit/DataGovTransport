import { useState } from "react";
import reactLogo from "./assets/react.svg";
import SideBar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
import MainRouting from "./components/MainRouting";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto min-h-screen md:flex">
          
          <SideBar />

          <div className="main-wrapper flex-grow ">
            <div className="w-100 hidden md:flex bg-sky-50/50 p-3 border-b-2 shadow items-end gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                />
              </svg>

              <span className="text-3xl text-rose-600">Data Gov</span>
              <span className="text-rose-900/50 text-sm self-end"> Transport</span>
            </div>
            {/* Main content */}
            <div className="main ">
              <MainRouting />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
