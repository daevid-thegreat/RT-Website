import { useEffect, useRef } from "react";

const DesignBanner = () => {
  const scrollingDivRef = useRef(null);
 useEffect(() => {
   // Get the container and content elements
   const container = document.querySelector(".scroll-container");
   const content = document.querySelector(".scroll-content");

   // Set the scroll amount and interval time
   const scrollAmount = 1; // Adjust this value to control the scroll speed

   // Clone the content and append it to the container
   container.appendChild(content.cloneNode(true));

   // Function to scroll the content horizontally
   function scrollHorizontally() {
     container.scrollLeft += scrollAmount;

     if (container.scrollLeft >= content.offsetWidth) {
       container.scrollLeft = 0;
     }

     requestAnimationFrame(scrollHorizontally);
   }

   scrollHorizontally();
 }, []);

  return (
    <div
      ref={scrollingDivRef}
      id="containeris"
      className="bg-[#231F20] flex scroll-container overflow-x-hidden"
    >
      <div className=" scroll-content">
        <div className="bg-[#231F20] justify-start text-white flex flex-nowrap whitespace-nowrap gap-[10px] py-[10px] lg:py-6 lg:gap-6">
          <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            This is a marathon, not a sprint
          </p>
          <p className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>

          <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            This is a marathon, not a sprint
          </p>
          <p className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>

          <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            This is a marathon, not a sprint
          </p>
          <p className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>

          <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            This is a marathon, not a sprint
          </p>
          <p className="w-[5px] lg:mr-6 mr-[10px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>
        </div>
      </div>
    </div>
  );
}
export default DesignBanner