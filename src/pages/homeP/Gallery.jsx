import { Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <section>
      <div className="md:grid sp-cont">
        <div className="lg:h-[370px] spa">
          <Image
            className="invisible lg:hidden w-full h-full"
            src={"/images/p1.png"}
            placeholder="blur"
            alt=""
          />
          <div className="bg-white offshadblack3 absolute bottom-4 border border-[#231f20] pl-0 lg:p-2 p-[3px]">
            <div className="border-[#231f20] border-l-0 border py-2 lg:py-3 px-3 lg:px-4 w-[193px] lg:w-[237px]">
              <h6 className="p-01r text-[8px]">Nov. 2022</h6>
              <h2 className="cD600 text-[10px] lg:text-xs pt-[2px] lg:pt-1 uppercase">
                2022 End Of Year Hangout
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:h-[370px] spa">
          <Image
            className="invisible lg:hidden w-full h-full"
            src={"/images/p2.png"}
            placeholder="blur"
            alt=""
          />
          <div className="bg-white offshadblack3 absolute bottom-4 border border-[#231f20] pl-0 lg:p-2 p-[3px]">
            <div className="border-[#231f20] border-l-0 border py-2 lg:py-3 px-3 lg:px-4 w-[193px] lg:w-[237px]">
              <h6 className="p-01r text-[8px]">May 2022</h6>
              <h2 className="cD600 text-[10px] lg:text-xs pt-[2px] lg:pt-1 uppercase">
                Untitled Design Conference
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:h-[370px] spa ">
          <Image
            className="invisible lg:hidden w-full h-full"
            src={"/images/p3.png"}
            placeholder="blur"
            alt=""
          />
          <div className="bg-white offshadblack3 absolute bottom-4 border border-[#231f20] pl-0 lg:p-2 p-[3px]">
            <div className="border-[#231f20] border-l-0 border py-2 lg:py-3 px-3 lg:px-4 w-[193px] lg:w-[237px]">
              <h6 className="p-01r text-[8px]">May 2022</h6>
              <h2 className="cD600 text-[10px] lg:text-xs pt-[2px] lg:pt-1 uppercase">
                Untitled Design Conference
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:h-[370px] spa ">
          <Image
            className="invisible lg:hidden w-full h-full"
            src={"/images/p4.png"}
            placeholder="blur"
            alt=""
          />
          <div className="bg-white offshadblack3 absolute bottom-4 border border-[#231f20] pl-0 lg:p-2 p-[3px]">
            <div className="border-[#231f20] border-l-0 border py-2 lg:py-3 px-3 lg:px-4 w-[193px] lg:w-[237px]">
              <h6 className="p-01r text-[8px]">Nov. 2022</h6>
              <h2 className="cD600 text-[10px] lg:text-xs pt-[2px] lg:pt-1 uppercase">
                Devfest 2022
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:h-[370px] spa ">
          <Image
            className="invisible lg:hidden w-full h-full"
            src={"/images/p5.png"}
            placeholder="blur"
            alt=""
          />
          <div className="bg-white offshadblack3 absolute bottom-4 border border-[#231f20] pl-0 lg:p-2 p-[3px]">
            <div className="border-[#231f20] border-l-0 border py-2 lg:py-3 px-3 lg:px-4 w-[193px] lg:w-[237px]">
              <h6 className="p-01r text-[8px]">Nov. 2022</h6>
              <h2 className="cD600 text-[10px] lg:text-xs pt-[2px] lg:pt-1 uppercase">
                2022 End Of Year Hangout
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:h-[370px] spa ">
          <Image
            className="invisible lg:hidden w-full h-full"
            src={"/images/p6.png"}
            placeholder="blur"
            alt=""
          />
          <div className="bg-white offshadblack3 absolute bottom-4 border border-[#231f20] lg:p-2 p-[3px] pl-0">
            <div className="border-[#231f20] border-l-0 border py-2 lg:py-3 px-3 lg:px-4 w-[193px] lg:w-[237px]">
              <h6 className="p-01r text-[8px]">May 2022</h6>
              <h2 className="cD600 text-[10px] lg:text-xs pt-[2px] lg:pt-1 uppercase">
                Untitled Design Conference
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Gallery