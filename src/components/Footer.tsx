import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function Footer() {
    return (
        <>
            <div className="w-full h-full px-[6.5vw] py-[4vh] text-offwhite bg-[#030718] ">
                <div className="border-t-[2px] border-[#f9f9f9] pt-5 flex flex-row items-start justify-center">
                    <div className="flex flex-row gap-x-5 items-center justify-center">
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/aboutus"
                            className={`hover:text-[#5b8181]`}
                        >
                            About
                        </ChakraLink>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/services"
                            className={`hover:text-[#5b8181]`}
                        >
                            Services
                        </ChakraLink>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/property"
                            className={`hover:text-[#5b8181]`}
                        >
                            Properties
                        </ChakraLink>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-5 mx-auto">
                        <p className="mohave font-semibold text-xl">HOME PJLSE</p>
                        <p className="text-center text-sm font-light">2023 &copy; HOME PULSE. All rights reserved</p>
                    </div>
                    <div className="flex flex-row gap-x-5 items-center">
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/contactus"
                            className={`hover:text-[#5b8181]`}
                        >
                            Contact Us
                        </ChakraLink>
                    </div>
                </div>

            </div>
        </>
    )
}