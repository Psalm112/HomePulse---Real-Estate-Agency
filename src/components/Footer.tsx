import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <div className="w-full h-full px-[3vw] py-[4vh] text-offwhite bg-[#030718] md:px-[6.5vw]">
                <div className="border-t-[2px] border-[#f9f9f9] pt-5 flex flex-col items-start justify-center sm:flex-row sm:justify-normal">

                    <ChakraLink
                        as={ReactRouterLink}
                        to="/"
                        className="mx-auto sm:mr-auto sm:ml-0"
                    >
                        <p className="mohave font-semibold text-xl">HOME PJLSE</p>
                    </ChakraLink>

                    <div className="flex flex-row gap-x-5 items-start justify-center mx-auto sm:mx-0">

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

                        <ChakraLink
                            as={ReactRouterLink}
                            to="/contactus"
                            className={`hover:text-[#5b8181] mb-5 mx-0 sm:mx-auto`}
                        >
                            Contact Us
                        </ChakraLink>

                    </div>

                </div>
                <div>
                    <HStack className="!gap-x-3 text-offwhite w-full items-center justify-center sm:justify-end">
                        <FaFacebookF className="hover:text-[#5b8181]" />
                        <FaInstagram className="hover:text-[#5b8181]" />
                        <FaTwitter className="hover:text-[#5b8181]" />
                        <FaEnvelope className="hover:text-[#5b8181]" />
                    </HStack>
                </div>
                <p className="text-center text-sm font-light mt-[2vh]">2023 &copy; HOME PULSE. All rights reserved</p>

            </div>
        </>
    )
}