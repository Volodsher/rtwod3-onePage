import ScrollingTicker from './scrollingTicker';

const pros: {
  id: number;
  title: string;
  image: string;
  text: string;
}[] = [
  {
    id: 1,
    title: 'Expert Craftsmanship',
    image: 'crew.jpg',
    text: 'Our team of skilled professionals ensures precise installation with attention to detail, providing you with a finished product of the highest quality.',
  },
  {
    id: 2,
    title: 'Premium Materials',
    image: 'material.jpg',
    text: 'We source and use only the finest materials for our windows and doors, ensuring durability, energy efficiency, and an elegant aesthetic for your home.',
  },
  {
    id: 3,
    title: 'Timely and Reliable',
    image: 'reliable.jpg',
    text: 'We understand the importance of your time. Our team is committed to delivering projects on schedule, without compromising the quality of our work.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2
          className="
          text-3xl     
          mb-4
            text-slate-800
            leading-[30px]
            sm:leading-[56px]
          "
        >
          Why Choose Us
        </h2>
        <p
          className="text-slate-800
            
            font-light text-gray-700 mb-6 font-['Calibre Light']"
        >
          Lorem ipsum dolor sit amet
        </p>
        <ScrollingTicker />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pros.map((pro) => {
            return (
              <div key={pro.id} className="p-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div
                    className="h-[300px] bg-cover bg-center -m-6 mb-6"
                    style={{ backgroundImage: `url(/why/${pro.image})` }}
                  />
                  <h3 className="text-xl font-semibold mb-3">{pro.title}</h3>
                  <p className="text-gray-700">{pro.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-gray-700 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non leo
          non lectus dapibus varius id in nisi. Vestibulum tempor porta arcu
          eget viverra. Quisque sed sapien ut urna vestibulum lacinia. Vivamus
          in eros dolor. Morbi nec facilisis ligula.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
