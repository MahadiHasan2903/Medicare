import React from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col my-12">
      <h2 className="mt-5 text-center heading">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] mx-5 lg:mt-[55px]">
        {services.map((item, index) => (
          <ServiceCard item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
