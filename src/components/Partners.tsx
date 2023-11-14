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
      <div className="w-full h-full relative overflow-hidden px-[3vw] py-[7vh] bg-[#f9f9f9] md:px-[6.5vw]">
        <div className="text-black mb-8">
          <h3 className="text-3xl">
            Trusted Partners
          </h3>
          <p className="text-lg mt-[10px]">Our success is built on strong relationships with industry-leading organizations. We are proud to collaborate with:</p>
        </div>
        <div className="w-full h-[150px] h-full grid grid-cols-[repeat(6,_minmax(120px,_1fr));] grid-rows-1 gap-x-8 overflow-x-scroll gap-2 items-center justify-start md:h-[185px]">
          <div className="w-full h-full relative">
            <Image
              // boxSize='100px'
              objectFit='contain'
              loading="lazy"
              // align="50% 50%"
              src={finex}
              alt='Finex Logo'
              className="w-[100%] h-[115px] m-auto md:h-[150px]"
            />
            <p className="mohave font-medium text-2xl text-center text-[#030718]">Finex</p>
          </div>
          <div className="w-full h-full relative">
            <Image
              // boxSize='40px'
              objectFit='contain'
              loading="lazy"
              src={decor}
              alt='decor8 logo'
              className="w-[100%] h-[115px] m-auto md:h-[150px]"
            />
            <p className="mohave font-semibold text-2xl text-center text-[#030718]">Decor8</p>
          </div>
          <div className="w-full h-full relative">
            <Image
              // boxSize='40px'
              objectFit='contain'
              loading="lazy"
              src={smart}
              alt='smarthome logo'
              className="w-[100%] h-[115px] m-auto md:h-[150px]"
            />
            <p className="mohave font-semibold text-2xl text-center text-[#030718]">SmartHome</p>
          </div>
          <div className="w-full h-full relative">
            <Image
              // boxSize='40px'
              objectFit='contain'
              loading="lazy"
              src={green}
              alt='Greenspace Logo'
              className="w-[100%] h-[115px] m-auto md:h-[150px]"
            />
            <p className="mohave font-semibold text-2xl text-center text-[#030718]">GreenSpace</p>
          </div>
          <div className="w-full h-full relative">
            <Image
              // boxSize='40px'
              objectFit='contain'
              loading="lazy"
              src={homeloan}
              alt='Homeloan Logo'
              className="w-[100%] h-[115px] m-auto md:h-[150px]"
            />
            <p className="mohave font-semibold text-2xl text-center text-[#030718]">HomeLoan</p>
          </div>
          <div className="w-full h-full relative">
            <Image
              // boxSize='40px'
              objectFit='contain'
              loading="lazy"
              src={moveit}
              alt='moveit logo'
              className="w-[100%] h-[115px] m-auto md:h-[150px]"
            />
            <p className="mohave font-semibold text-2xl text-center text-[#030718]">MoveIt</p>
          </div>
        </div>
      </div>
    </>
  );
}
