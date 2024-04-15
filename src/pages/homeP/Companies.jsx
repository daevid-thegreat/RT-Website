import { Image } from "@chakra-ui/react";

const Companies = () => {
  return (
    <>
      <section className="bg-[#A59FEF] pt-10 pb-5 lg:py-20 px-[25px] lg:px-[120px]">
        <div className="flex flex-col gap-6 lg:gap-2 bodyCon">
          <span className="lg:flex relative">
            <h3 className="text-[#fff] cD600 text-[45px] z-50">
              Our Flex?
            </h3>
            <h3 className="text-[#231f20] cD600 absolute top-[2px] left-[2px] lg:top-1 lg:left-1 text-[45px] z-10">
              Our Flex?
            </h3>
          </span>
          <h1 className="text-[20px] md:text-[16px] lg:text-[50px] cD700 max-w-[900px] ">
            You will find RoadTrippers at reputable companies
          </h1>
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
              <Image src={"images/companies/GlobusBank.png"} alt="GlobusBank" />
            </div>

          </div>
          <div className="grid cp-cont2">
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