import { Button, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import logo from "../assets/homepulselogo.jpeg"

type navBarProps = {
    home: boolean;
    properties: boolean;
    services: boolean;
    about: boolean;
    contact: boolean;
};
export default function NavigationBar({
    home,
    properties,
    services,
    about,
    contact,
}: navBarProps) {
    return (
        <>
            <div className="Nav hidden h-[10vh] w-full bg-[#030718] px-[3vw] py-[2.5vh] md:px-[6.5vw] lg:block">
                <div className="flex flex-row items-center justify-center text-offwhite xl:gap-x-5 xl:justify-between">
                    <div className="flex flex-row items-center">
                        <Image
                            boxSize="40px"
                            objectFit="cover"
                            src={logo}
                            alt="HOME PULSE LOGO"
                            className="inline"
                        />
                        &nbsp;
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/"
                            className="hidden xl:inline"
                        >
                            <span className="mohave">HOME PJLSE</span>
                        </ChakraLink>

                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-5 mr-auto xl:mr-0">
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/"
                            className={`${home ? "text-[#5b8181]" : "hover:text-[#5b8181]"}`}
                        >
                            Home
                        </ChakraLink>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/property"
                            className={`${properties ? "text-[#5b8181]" : "hover:text-[#5b8181]"}`}
                        >
                            Properties
                        </ChakraLink>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/home"
                            className={`${services ? "text-[#5b8181]" : "hover:text-[#5b8181]"}`}
                        >
                            Services
                        </ChakraLink>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/aboutus"
                            className={`${about ? "text-[#5b8181]" : "hover:text-[#5b8181]"}`}
                        >
                            About
                        </ChakraLink>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/contactus"
                            className={`${contact ? "text-[#5b8181]" : "hover:text-[#5b8181]"}`}
                        >
                            Contact
                        </ChakraLink>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-5">
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/register"
                            className={`flex flex-row items-center hover:text-[#5b8181]`}
                        >
                            <FaUser />
                            &nbsp; <span className="self-end">Sign Up</span>
                        </ChakraLink>
                        <Button
                            rightIcon={<FaArrowRight />}
                            variant="utline"
                            className="px-3 py-1 rounded-[3px] bg-[#f9f9f9] text-[#030718] hover:bg-[#5b8181] hover:text-offwhite"
                        >
                            <ChakraLink
                                as={ReactRouterLink}
                                to="/login"
                            >
                                Log In
                            </ChakraLink>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
