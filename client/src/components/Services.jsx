import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow:xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg ">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12  ">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br /> Continue to Improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center ">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white " />}
          subtitle="Security is Guranteed. We Always maintain privacy and maintain of our Product"
        />
        <ServiceCard
          color="bg-[#8984f8]"
          title="Best Exchange Rate"
          icon={<BiSearchAlt fontSize={21} className="text-white " />}
          subtitle="Security is Guranteed. We Always maintain privacy and maintain of our Product"
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Fastest Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white " />}
          subtitle="Security is Guranteed. We Always maintain privacy and maintain of our Product"
        />
      </div>
    </div>
  );
};

export default Services;
