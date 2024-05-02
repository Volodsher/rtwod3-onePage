import React from 'react';

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className=" 
        bg-bottom 
        bg-no-repeat 
        bg-cover 
        bg-[url('/about.jpg')] 
        py-16"
    >
      <div className="p-6 md:w-2/3 container bg-white bg-opacity-70">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <div className="">
          <div className="">
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              leo non lectus dapibus varius id in nisi. Vestibulum tempor porta
              arcu eget viverra. Quisque sed sapien ut urna vestibulum lacinia.
              Vivamus in eros dolor. Morbi nec facilisis ligula. Praesent ipsum
              nibh, ullamcorper at justo ut, efficitur imperdiet enim.
              Vestibulum sit amet tempus mi. Morbi vel laoreet sem, vitae
              iaculis tortor. Morbi placerat auctor elit at ultrices.
            </p>
            <p className="text-gray-700 mb-4">
              Sed ut magna tellus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Donec in
              purus id nibh consectetur venenatis at dignissim lectus. Sed nunc
              odio, fermentum vitae arcu quis, porta pulvinar nibh.
            </p>
            <p className="text-gray-700 mb-4">
              Sed eros eros, volutpat cursus neque id, egestas dignissim ex.
              Nulla vulputate ligula nec augue suscipit, a ornare orci rutrum.
              Donec vitae enim nec nunc malesuada eleifend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
