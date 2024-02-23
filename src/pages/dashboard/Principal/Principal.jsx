"use client";
import React from "react";
import CardDataStats from "@/components/Cards/CardDataStats";
import { FaPlugCircleBolt } from "react-icons/fa6";
import { IoSpeedometerSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { FaBatteryThreeQuarters } from "react-icons/fa";

const Principal = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Total voltaje:"
          total="119.2V"
          rate="0%"
          levelUp
          text="Voltaje"
        >
          <svg
            className="fill-primary dark:fill-white"
            width="40"
            height="40"
            viewBox="-5 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <FaPlugCircleBolt />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Total corriente:"
          total="0.24A"
          rate="0%"
          levelUp
          text="Corriente"
        >
          <svg
            className="fill-primary dark:fill-white"
            width="40"
            height="40"
            viewBox="-4 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <IoSpeedometerSharp />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Total potencia:"
          total="0.57W"
          rate="0%"
          levelUp
          text="Potencia"
        >
          <svg
            className="fill-primary dark:fill-white"
            width="40"
            height="40"
            viewBox="-4 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <BsFillLightningFill />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Total Consumido:"
          total="0.00KW/h"
          rate="0%"
          levelUp
          text="Hoy"
        >
          <svg
            className="fill-primary dark:fill-white"
            width="40"
            height="40"
            viewBox="-4 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <FaBatteryThreeQuarters />
          </svg>
        </CardDataStats>
        
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8"></div>
      </div>
    </>
  );
};

export default Principal;
