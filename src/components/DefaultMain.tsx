import React, { LegacyRef } from "react";
import ResaultCard from "./ResaultCard";
import { carRes, handicapRes } from "./types";

interface propsDefault {
  items: carRes[] | handicapRes[];
  getData: Function;
  InputRef: LegacyRef<HTMLInputElement> | undefined;
}

export default function DefaultMain({
  items,
  getData,
  InputRef,
}: propsDefault) {
  return (
    <div className="py-16 flex flex-col items-center">
      <div className="lg:w-1/2 w-full px-4 sm:px-1 flex">
        <label className="relative block w-full">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-slate-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search In Car Database"
            type="text"
            name="search"
            ref={InputRef}
          />
        </label>
        <button
          type="button"
          onClick={() => getData()}
          className="bg-blue-600 text-slate-100 rounded-md p-1 hover:shadow-sm hover:bg-blue-700 hover:text-white mx-1"
        >
          Search
        </button>
      </div>
      { items.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 gap-3 mt-2 p-2 place-content-center mx-auto">
        {items.map((car) => (
            <ResaultCard key={car._id.toString()} carData={car} />
          ))}
      </div>
      : (
        <div className="flex gap-1 items-center text-rose-400 justify-center mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          No match
        </div>
      )
      }
      
    </div>
  );
}
