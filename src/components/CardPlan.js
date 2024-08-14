import React from 'react';
import box from "../assets/Premium.png";
import check from "../assets/Icon/jam_check.png";

export default function CardPlan ({ title, features2, price, isSelect }) {
      return (
        <div
          className={`bg-white rounded-md flex flex-col justify-between items-center pt-16 pb-8 border
            ${isSelect ? "border-red-500" : "border-gray-300"}`}
        >
          <div className=" space-y-5 justify-center items-center flex flex-col">
            <img alt="" src={box} className="pb-8 w-24" />
            <div className=" font-semibold pb-4">{title}</div>
    
            <div className=" space-x-2">
              {features2.map((val, index) => {
                return (
                  <div key={index} 
                  className="flex flex-row mr-2 items-center space-x-2">
                    <img alt="" src={check} />
                    <div>{val}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <div className="text-center mb-3">{price}</div>
              <button className={`border rounded-full py-1 px-10 border-red-500
                ${isSelect ? "bg-red-500 text-white" : "bg-white text-red-500"}`}>
                Select
              </button>
            </div>
          </div>
        </div>
      );
    };
