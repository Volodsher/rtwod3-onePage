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
    title: '1 Lorem ipsum dolor sit amet',
    icon: 'window.png',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: '2 Lorem ipsum dolor sit amet',
    icon: 'roundWindow.png',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    title: '3 Lorem ipsum dolor sit amet',
    icon: 'door.png',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    title: '4 Lorem ipsum dolor sit amet',
    icon: 'dollar.png',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 5,
    title: '5 Lorem ipsum dolor sit amet',
    icon: 'wrench.png',
    text: ' Lorem ipsum dolor sit amet',
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

        <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet:</p>
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
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
          sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
          ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
          ametLorem ipsum dolor sit amet
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
