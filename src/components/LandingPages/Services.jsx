import React from "react";
import line from "../../assets/images/line.png";
import {
  aiCallingAgencyServices,
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../data/constant";

const Services = ({ page }) => {
  let services, serviceName, heading, description;

  switch (page) {
    case "web":
      serviceName = "Web Development";
      services = webDevelopmentServices;
      heading =
        "Transform Your Online Presence with Premier Web Development Solutions";
      description =
        "Our web development services focus on creating fast, responsive, and visually appealing websites that drive user engagement and boost business success.";
      break;
    case "app":
      serviceName = "App Development";
      services = appDevelopmentServices;
      heading = "Empowering Businesses with Advanced App Development Services";
      description =
        "We offer tailored app development services designed to create high-performance, secure, and user-friendly mobile applications that provide exceptional user experiences.";
      break;
    case "ai-calling":
      serviceName = "AI Calling Agency";
      services = aiCallingAgencyServices;
      heading = "Revolutionize Your Communication with AI Calling Agency Services";
      description =
        "Our AI calling agency services leverage advanced artificial intelligence to enhance customer interactions, streamline operations, and drive business growth.";
      break;
    default:
      serviceName = "";
      services = [];
      heading = "";
      description = "";
  }

  return (
    <div
      id="services"
      className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
    >
      <div className="blurred-blue left-[-10%] top-[-10%]"></div>
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <img src={line} alt="line" className="w-[3rem]" />
          <h6 className="font-medium text-secondary">
            {`${serviceName} Services`}
          </h6>
        </div>
        <h1
          data-aos="fade-up"
          className="text-[2rem] md:text-4xl leading-tight font-semibold text-center max-w-2xl"
        >
          {heading}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl">
          {description}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 items-start bg-[#F6F6F6] shadow-2xl transition-all duration-300 hover:bg-gradient-to-tr from-white to-primary/10 rounded-lg border border-black p-5"
            >
              <div className="w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <img
                  loading="lazy"
                  src={item.icon}
                  alt="icon"
                  className="w-[3rem] grayscale"
                />
              </div>
              <h6 className="font-medium text-lg">{item.title}</h6>
              <p className="text-gray-700 text-md">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
