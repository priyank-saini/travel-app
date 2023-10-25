import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="padding-container max-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-40px] w-10 lg:w-[50px]"
          />
          <h1 className="bold-52 lg:bold-88">
            The Foresta<br></br> Camp Area
          </h1>
          <p className=" regular-16 mt-6 xl:max-w-[520px] text-gray-50">
            The Foresta in Kasol, Himachal Pradesh, is a tranquil camp area
            nestled amid lush forests and the Parvati River's gentle murmur.
            It's an ideal escape for nature lovers, offering opportunities for
            trekking and peaceful moments by the campfire. Experience the
            serenity of the Himalayas at The Foresta.
          </p>

          <div className="gap-5 flex flex-wrap my-11">
            <div className="items-center gap-2 flex">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    src="/star.svg"
                    alt="star"
                    key={index}
                    width={24}
                    height={24}
                  />
                ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-16">
              200k+
              <span className="regular-16 lg:regular-20 ml-1">
                Excellent Reviews
              </span>
            </p>
          </div>

          <div className="w-full flex flex-col  sm:flex-row gap-3">
            <Button
              type="button"
              variant="btn_green"
              title="Download App"
            ></Button>
            <Button
              type="button"
              variant="btn_white_text"
              icon="/play.svg"
              title="How we work"
            ></Button>
          </div>
        </div>
        <div className="flex flex-1 relative items-start py-8 -mr-[450px]">
          <div className="relative flex z-20 w-[300px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-10">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-white">Kasol, Parvati Valley</p>
            </div>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Distance</p>
                <p className="bold-20 text-white">69.69 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.012 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
