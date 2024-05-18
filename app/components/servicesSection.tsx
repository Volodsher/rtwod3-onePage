'use client';
import { useState } from 'react';

const services: {
  title: string;
  icon: string;
  text: string;
  id: number;
}[] = [
  {
    id: 1,
    title: 'Window Replacement',
    icon: 'window.png',
    text: 'Upgrade your home with modern, energy-efficient windows.',
  },
  {
    id: 2,
    title: 'Custom Window Designs',
    icon: 'roundWindow.png',
    text: 'Tailor your windows to fit the unique style of your home.',
  },
  {
    id: 3,
    title: 'Door Installation',
    icon: 'door.png',
    text: 'Enhance security and style with our expert door installation services.',
  },
  {
    id: 4,
    title: 'Energy-Efficient Solutions',
    icon: 'dollar.png',
    text: 'Save on energy costs with our eco-friendly window options.',
  },
  {
    id: 5,
    title: 'Repairs and Maintenance',
    icon: 'wrench.png',
    text: ' Keep your windows and doors in top condition with our repair and maintenance services.',
  },
];

const ServicesSection = () => {
  const [textToggler, setTextToggler] = useState(0);

  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="w-[200px] text-3xl font-semibold mb-4 m-auto">
          Our Services
          <span className="relative flex h-3 w-3 left-[200px] top-[-22px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </h2>

        <p className="text-gray-700 mb-6">
          Discover the range of services we offer at Dual Strength Windows and
          Doors Inc.:
        </p>
        <div className="flex divide-y py-10 justify-center gap-4 flex-wrap">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                onClick={() => {
                  textToggler === service.id
                    ? setTextToggler(0)
                    : setTextToggler(service.id);
                }}
                className="relative p-4 w-[150px] ease-in-out duration-300
                hover:cursor-pointer hover:transform  hover:-translate-y-4 "
              >
                <img
                  src={`/icons/${service.icon}`}
                  alt={`Image of ${service.title}`}
                />
                <h4 className="font-bold py-4">{service.title}</h4>

                {textToggler === service.id && (
                  <p className="ease-in-out duration-300 transform  -translate-y-4  absolute top-[25%] text-spice bg-white rounded bg-opacity-80">
                    {service.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-gray-700 mb-8">
          Our team is committed to delivering excellence in every project.
          Elevate your home&apos;s aesthetics and functionality with Dual
          Strength Windows and Doors Inc.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
