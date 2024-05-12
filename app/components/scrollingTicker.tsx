const ScrollingTicker = () => {
  const liStyle = 'bg-steelBlue text-white uppercase px-4 py-2 -skew-x-12';
  return (
    <div
      className=" 
        w-[300px] 
        pt-7
        pb-10
        sm:w-[500px] 
        lg:w-[800px]  
        inline-flex 
        flex-nowrap 
        overflow-hidden 
        [mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]
      "
    >
      <ul
        className="
        flex 
        items-center 
        justify-center 
        md:justify-start 
        [&_li]:mx-0.5 
        [&_img]:max-w-none 
        animate-infinite-scroll
      "
      >
        <li className={liStyle}>Reliable</li>
        <li className={liStyle}>Trustworthy</li>
        <li className={liStyle}>Responsive</li>
        <li className={liStyle}>Quality</li>
        <li className={liStyle}>Innovative</li>
        <li className="text-white bg-steelBlue uppercase px-4 py-2 -skew-x-12  w-[190px]">
          Customer-Focused
        </li>
        <li className={liStyle}>Transparent</li>
        <li className={liStyle}>Efficient</li>
        <li className={liStyle}>Flexible</li>
        <li className={liStyle}>Collaborative</li>
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-0.5 [&_img]:max-w-none animate-infinite-scroll">
        <li className={liStyle}>Reliable</li>
        <li className={liStyle}>Trustworthy</li>
        <li className={liStyle}>Responsive</li>
        <li className={liStyle}>Quality</li>
        <li className={liStyle}>Innovative</li>
        <li className="text-white uppercase bg-steelBlue px-4 py-2 -skew-x-12 w-[190px]">
          Customer-Focused
        </li>
        <li className={liStyle}>Transparent</li>
        <li className={liStyle}>Efficient</li>
        <li className={liStyle}>Flexible</li>
        <li className={liStyle}>Collaborative</li>
      </ul>
    </div>
  );
};

export default ScrollingTicker;
