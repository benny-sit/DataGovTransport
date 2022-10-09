import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {

  function toggleNav() {
    const nav = document.querySelector('#side-nav-links');
    nav?.classList.toggle('hidden');
  }

  function disabled(e) {
    e.preventDefault();
  }

  return (
    <div className="sidebar min-w-[144px] bg-sky-50">
      <nav className="text-right ">
        <div className="w-100 visible md:invisible bg-sky-50/50 p-3 border-b-2 flex items-end gap-1">
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

          <button className="ml-auto" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-auto w-10 h-10 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        </div>
        <ul className="my-2 font-base hidden md:block" id="side-nav-links">
          <li className="mb-2">
            <NavLink to="/" className={({ isActive}) => { return `${isActive ? "active" : ""} nav-link `}} end>Find Car</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/truck" className={({ isActive}) => { return `${isActive ? "active" : ""} nav-link `}}>Find Truck</NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/bike" className={({ isActive}) => { return `${isActive ? "active" : ""} nav-link `}}>Find Bike</NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/handicap" className={({ isActive}) => { return `${isActive ? "active" : ""} nav-link `}}>Find Handicap</NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/offroad" className={({ isActive}) => { return `${isActive ? "active" : ""} nav-link disabled text-gray-400`}} onClick={disabled}>Find Off-Road</NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/recall" className={({ isActive}) => { return `${isActive ? "active" : ""} nav-link `}}>Find Recall</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
