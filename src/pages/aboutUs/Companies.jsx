import { Image } from "@chakra-ui/react";

const Companies = () => {
  return (
    <>
      <section className="bg-[#A59FEF] pt-10 pb-5 lg:py-20 px-[25px] lg:px-[120px]">
        <div className="flex flex-col gap-6 lg:gap-2 bodyCon">
          <span className="hidden lg:flex relative">
            <h3 className="text-[#fff] cD600 text-[64px] z-50">
              Our Flex?
            </h3>
            <h3 className="text-[#231f20] cD600 absolute top-[2px] left-[2px] lg:top-1 lg:left-1 text-[64px] z-10">
              Our Flex?
            </h3>
          </span>
          <h1 className="text-[32px] lg:text-[64px] cD700 max-w-[900px]">
            You will find RoadTrippers at reputable companies
          </h1>
          <p className="lg:hidden p-01 pl-[72px] self-end">
            Over the past 1 year, we have been able to record the
            following progress based on testimonials and feedback from
            our members
          </p>
        </div>
      </section>
      <section>
        <div className="">
          <div className="grid cp-cont ">
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
              <Image src={"images/companies/zazuu.svg"} alt="Zazuu" />
            </div>
          </div>
          <div className="grid cp-cont2">
            <div>
              <Image
                src={"images/companies/iqwiki.svg"}
                alt="IQ.Wiki"
              />
            </div>
            <div>
              <Image
                src={"images/companies/zebrra.svg"}
                alt="Zebrra"
              />
            </div>
            <div>
              <Image
                src={"images/companies/oneid.svg"}
                alt="OneID"
              />
            </div>
            <div className="">
              <Image
                className="max-w-[177px]"
                src={"images/companies/feedpay.svg"}
                alt="FeedPay"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Companies