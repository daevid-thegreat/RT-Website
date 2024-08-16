import { Flex, Image, Link } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      as={"section"}
      pt={{ base: "89px", lg: "106px" }}
      className="headerBG flex flex-col justify-center items-center px-10"
    >
      <div className="pb-8 lg:pb-[58px] px-5 lg:px-[64px] xl:px-0">
        <div className="">
          <Image
            src={"images/heros.png"}
            alt="Hero Section Image"
            className="border-[1.404px] lg:border-[5px] border-mblack w-full max-w-[1200px] h-auto offshad"
            quality={100}
            placeholder="blur"
            border={{
              base: "1.38px solid #111413",
              md: "5px solid #111413",
            }}
          />
        </div>
        <div className="pt-6 lg:pt-[29px]">
          <p className="cD600 text-[24px] leading-[24px]">
            RoadTrip Community
          </p>
          <h2 className="cD700 h2-01 uppercase">A powerful network of growth and success </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end pt-1 lg:pt-0">
          <Link
            href=""
            className="bg-grene self-start lg:self-end cD600 font-semibold text-xs lg:text-base leading-[9.993px] py-4 lg:px-8 px-[13px] uppercase lg:cD600 lg:leading-6"
            color={"white"}
          >
            Meet the roadtrippers
          </Link>
          <p className="hidden lg:block max-w-[330px] leading-[22px] text-[#111312] manD">
            Gear up for an awesome ride to growth and success with the RoadTrip Community. Pack your bags, grab a map, and join us on our way to greatness. Collaboration, learning and fun awaits at RoadTrip Community.
          </p>
        </div>
      </div>
    </Flex>
  );
};
export default Hero;
