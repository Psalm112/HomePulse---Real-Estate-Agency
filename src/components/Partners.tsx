import { Image } from "@chakra-ui/react";
import decor from "../assets/partners/decor.png"
import finex from "../assets/partners/Finex.png"
import green from "../assets/partners/green.png"
import homeloan from "../assets/partners/homeloan.png"
import moveit from "../assets/partners/moveit.png"
import smart from "../assets/partners/smart.png"

export default function Partners() {
  return (
    <>
      <div className="w-full h-full px-[6.5vw] py-[7vh] bg-[#f9f9f9]">
        <div className="text-black mb-8">
          <h3 className="text-3xl">
            Trusted Partners
          </h3>
          <p className="text-lg mt-[10px]">Our success is built on strong relationships with industry-leading organizations. We are proud to collaborate with:</p>
        </div>
        <div className="w-full text-offwhite grid grid-cols-3 gap-2 items-stretch justify-center">
          <div className="w-full bg-[rgba(3,_7,_24,_0.8)] py-5 flex flex-col items-center justify-center rounded-[3px]">
            <Image
              // boxSize='100px'
              objectFit='cover'
              loading="lazy"
              // align="50% 50%"
              src={finex}
              alt='Finex Logo'
              className="w-[50%]"
            />
            <p className="mohave font-semibold text-2xl ">Finex</p>
          </div>
          <div className="w-full bg-[rgba(3,_7,_24,_0.6)] py-5 flex flex-col items-center justify-center rounded-[3px]">
            <Image
              // boxSize='40px'
              objectFit='cover'
              loading="lazy"
              src={decor}
              alt='decor8 logo'
              className="w-[50%]"
            />
            <p className="mohave font-semibold text-2xl">Decor8</p>
          </div>
          <div className="w-full bg-[rgba(3,_7,_24,_0.8)] py-5 flex flex-col items-center justify-center rounded-[3px]">
            <Image
              // boxSize='40px'
              objectFit='cover'
              loading="lazy"
              src={smart}
              alt='smarthome logo'
              className="w-[50%]"
            />
            <p className="mohave font-semibold text-2xl">SmartHome</p>
          </div>
          <div className="w-full bg-[rgba(3,_7,_24,_0.6)] py-5 flex flex-col items-center justify-center rounded-[3px]">
            <Image
              // boxSize='40px'
              objectFit='cover'
              loading="lazy"
              src={green}
              alt='Greenspace Logo'
              className="w-[50%]"
            />
            <p className="mohave font-semibold text-2xl">GreenSpace</p>
          </div>
          <div className="w-full bg-[rgba(3,_7,_24,_0.8)] py-5 flex flex-col items-center justify-center rounded-[3px]">
            <Image
              // boxSize='40px'
              objectFit='cover'
              loading="lazy"
              src={homeloan}
              alt='Homeloan Logo'
              className="w-[50%]"
            />
            <p className="mohave font-semibold text-2xl">HomeLoan</p>
          </div>
          <div className="w-full bg-[rgba(3,_7,_24,_0.6)] py-5 flex flex-col items-center justify-center rounded-[3px]">
            <Image
              // boxSize='40px'
              objectFit='cover'
              loading="lazy"
              src={moveit}
              alt='moveit logo'
              className="w-[50%]"
            />
            <p className="mohave font-semibold text-2xl">MoveIt</p>
          </div>
        </div>
      </div>
    </>
  );
}
