const Subscribe = () => {
  return (
    <section className="bg-[#1FA95B] border-t-[3px] border-b-[3px] lg:border-none border-[#231f20] py-[72px] lg:pb-12 ">
      <div className=" flex flex-col justify-center items-center gap-4 lg:gap-14">
        <div className="text-white flex px-[60px] justify-center items-center flex-col gap-2">
          <h2 className="cD700 text-[32px] leading-[38px] lg:leading-[76px] text-center lg:text-[64px]">
            Subscribe to our newsletter
          </h2>
          <p className="max-w-[690px] text-center visby-sem lg:manD text-xs lg:text-base leading-normal">
            Join RoadTrip, a community of adventure seekers and tech
            enthusiasts, and let us embark on unforgettable journeys
            together
          </p>
        </div>

        <div className="flex px-9 gap-4 lg:gap-5 flex-col w-full max-w-[662px]">
          <input
            className="border-[2px] lg:border-[4px] border-[#231f20] py-[14px] px-3 lg:py-5 lg:px-8 bg-inherit"
            type="email"
            placeholder="Your email address"
          />
          <div className="flex justify-center items-center">
            <button className="cD600 offshadctayellow leading-6 bg-black px-8 py-4 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Subscribe