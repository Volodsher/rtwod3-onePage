const HeroSection = () => {
  return (
    <section id="home" className="relative text-white ">
      <div
        className="
          h-[750px] 
          sm:h-[850px] 
          md:h-[900px]
          lg:h-[1000px]
          xl:h-[1100px]
          right-0 
          bg-[url('/hero.jpg')] 
          bg-bottom 
          bg-no-repeat 
          bg-cover 
        "
      >
        <div
          className=" 
            h-[1000px] 
            sm:h-[1000px]  
            bg-gradient-to-t 
            from-transparent 
            to-blue-800
          "
        >
          <div className=" pt-40 ">
            <div className=" p-2 sm:p-4 container mx-auto text-center ">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                Lorem ipsum <br />
                dolor sit amet,
              </h1>

              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                leo non lectus dapibus varius id in nisi. Vestibulum tempor
                porta arcu eget viverra. Quisque sed sapien ut urna vestibulum
                lacinia. Vivamus in eros dolor. Morbi nec facilisis ligula.
              </p>
              <a href="#contact">
                <button className="bg-blue-300 hover:bg-blue-700 text-steelBlueDark font-bold py-2 px-6 rounded-full">
                  Lorem ipsum
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
