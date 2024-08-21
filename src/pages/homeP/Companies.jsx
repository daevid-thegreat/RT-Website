import { Image } from "@chakra-ui/react";

const Companies = () => {
  return (
    <>
      <section className="bg-[#7F7FFA] pt-10 pb-5 lg:py-20 px-[25px] lg:px-[120px] border-t-4 border-b-4 border-black flex justify-between">
        <div className="flex flex-col gap-6 lg:gap-2 bodyCon">
          <div className="relative flex">
            <h2 className="cD600 text-[#fff] z-50 text-[40px] lg:text-[64px] tracking-[-0.64px]">
              Our Flex?
            </h2>
            <h2 className="cD600 text-[#231f20] absolute top-[2px] left-[2px] lg:top-1 lg:left-1 text-[40px] lg:text-[64px] z-10 tracking-[-0.64px]">
              Our Flex?
            </h2>
          </div>
          <h1 className="text-[32px] leading-10 font-semibold tracking-[-2%] md:text-[16px] lg:text-[50px] max-w-[900px] ">
            RoadTrippers are making waves at reputable companies
          </h1>
        </div>
        <div className="hidden md:block">
          <img src="/images/rtc.svg" />
        </div>
      </section>
      <section>
        <div className="">
          <div className="grid cp-cont">
            <div>
              <Image
                src={"images/companies/cowrywise.svg"}
                alt="Cowrywise"
              />
            </div>
            <div>
              <Image
                src={"images/companies/interswitch.svg"}
                alt="Interswitch"
              />
            </div>
            <div>
              <Image
                src={"images/companies/renmoney.svg"}
                alt="Renmoney"
              />
            </div>
            <div>
              <Image
                src={"images/companies/kuda.svg"}
                alt="Kuda MFB"
              />
            </div>
            <div>
              <Image src={"images/companies/GlobusBank.png"} alt="GlobusBank" />
            </div>

          </div>





          <div className="grid cp-cont ">
            <div>
              <Image
                src={"images/companies/MullingsGroup.png"}
                alt="TheMullingsGroup"
              />
            </div>

            <div>
              <Image
                w={10}
                src={"images/companies/iqwiki.svg"}
                alt="IQ.Wiki"
              />
            </div>

            <div>
              <Image
                src={"images/companies/LEMFI.png"}
                alt="LEMFI"
              />
            </div>

            <div>
              <Image
                className="max-w-[177px]"
                src={"images/companies/feedpay.svg"}
                alt="FeedPay"
              />
            </div>
            <div>
              <Image
                src={"images/companies/groomly.png"}
                alt="groomly"
              />
            </div>

          </div>






          <div className="grid cp-cont border-b-4 border-black">


            {/* <div className="grid cp-cont3"> */}
            <div>
              <Image
                src={"images/companies/dragnet-logo.png"}
                alt="Dragnet"
              />
            </div>
            <div>
              <Image
                src={"images/companies/Raven.png"}
                alt="Dragnet"
              />
            </div>
            <div>
              <Image
                src={"images/companies/OMOI.png"}
                alt="Dragnet"
              />
            </div>

            <div>
              <Image
                src={"images/companies/oneid.svg"}
                alt="OneID"
              />
            </div>

            <div>
              <Image
                src={"images/companies/buymejollof.png"}
                alt="OneID"
              />
            </div>

          </div>


        </div>
      </section>
    </>
  );
}
export default Companies