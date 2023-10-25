import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container pb-24 w-full">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className=" uppercase regular-18 mb-2 pl-2 text-green-50">
          Let's explore the beauty with us!
        </p>

        <div className="flex flex-wrap justify-between pb-20 gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[450px]">
            Guide you to the easy path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            The Foresta, situated in Kasol, Himachal, is your gateway to camping
            and trekking adventures. With a focus on guiding you along the easy
            path, we provide safe and memorable outdoor experiences. Our
            dedicated team of experts ensures your journey is filled with
            natural wonders and lasting memories. Explore Himachal's stunning
            landscapes with The Foresta today.
          </p>
        </div>

        <div className="flexCenter max-container relative w-full ">
          <Image
            src="/boat.png"
            alt="boat"
            width={1440}
            height={580}
            className="w-full object-cover object-center 2xl:rounded-5xl"
          />

          <div className="flex absolute md:w-[250px] bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
            <Image
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="h-full w-auto"
            />

            <div className="flexBetween flex-col">
              <div className="flex w-full flex-col">
                <div className="flexBetween w-full">
                  <p className="regular-16 text-gray-20 ">Destination</p>
                  <p className="bold-16 text-green-50 ml-5">48 min</p>
                </div>
                <p className="bold-20 mt-2">Tosh</p>
              </div>

              <div className="flex w-full flex-col">
                <p className="regular-16 text-gray-20">Start track</p>
                <p className="bold-20 mt-2 whitespace-nowrap">Kasol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide