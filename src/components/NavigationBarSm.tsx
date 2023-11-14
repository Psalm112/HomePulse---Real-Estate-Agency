import { useRef } from "react";
import { Button, Image, useDisclosure } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import logo from "../assets/homepulselogo.jpeg";
import { FaBarsStaggered } from "react-icons/fa6";

type navBarProps = {
  home: boolean;
  properties: boolean;
  services: boolean;
  about: boolean;
  contact: boolean;
};
export default function NavigationBarSm({
  home,
  properties,
  services,
  about,
  contact,
}: navBarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <div className="Nav h-[10vh] w-full bg-[#030718] px-[3vw] py-[2.5vh] md:px-[6.5vw] lg:hidden">
        <div className="flex flex-row items-center justify-between text-offwhite">
          <div className="flex flex-row items-center">
            <Image
              boxSize="40px"
              objectFit="cover"
              src={logo}
              alt="HOME PULSE LOGO"
              className="inline hidden sm:inline"
            />
            &nbsp;
            <ChakraLink as={ReactRouterLink} to="/">
              <span className="mohave">HOME PJLSE</span>
            </ChakraLink>
          </div>
          <Button
            ref={btnRef}
            variant="ghost"
            onClick={onOpen}
            className="px-3 py-1 rounded-[3px] !text-offwhite text-[#030718] hover:!bg-[#f9f9f9] hover:!text-[#030718]"
          >
            MENU &nbsp;
            <FaBarsStaggered />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader className="bg-[#f9f9f9] border-b-[2px] border-[#030718]">
                Menu
              </DrawerHeader>

              <DrawerBody className="bg-[#f9f9f9] !px-0 !pt-0">
                <div className="flex flex-col items-start justify-center">
                  <div
                    className={`w-full px-6 py-2 border-b-[1px] border-[#030718] ${
                      home ? "bg-[#030718]" : "hover:bg-[#030718]"
                    } hover:border-y-[1px] hover:border-[#f9f9f9]`}
                  >
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/"
                      className={`no-underline w-full block font-semibold ${
                        home
                          ? "!text-[#f9f9f9]"
                          : "!text-[#030718] hover:!text-[#f9f9f9]"
                      } hover:!no-underline`}
                    >
                      Home
                    </ChakraLink>
                  </div>
                  <div
                    className={`w-full px-6 py-2 border-b-[1px] border-[#030718] ${
                      properties ? "bg-[#030718]" : "hover:bg-[#030718]"
                    } hover:border-y-[1px] hover:border-[#f9f9f9]`}
                  >
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/property"
                      className={`no-underline w-full block font-semibold ${
                        properties
                          ? "!text-[#f9f9f9]"
                          : "!text-[#030718] hover:!text-[#f9f9f9]"
                      } hover:!no-underline`}
                    >
                      Properties
                    </ChakraLink>
                  </div>
                  <div
                    className={`w-full px-6 py-2 border-b-[1px] border-[#030718] ${
                      services ? "bg-[#030718]" : "hover:bg-[#030718]"
                    } hover:border-y-[1px] hover:border-[#f9f9f9]`}
                  >
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/home"
                      className={`no-underline w-full block font-semibold ${
                        services
                          ? "!text-[#f9f9f9]"
                          : "!text-[#030718] hover:!text-[#f9f9f9]"
                      } hover:!no-underline`}
                    >
                      Services
                    </ChakraLink>
                  </div>
                  <div
                    className={`w-full px-6 py-2 border-b-[1px] border-[#030718] ${
                      about ? "bg-[#030718]" : "hover:bg-[#030718]"
                    } hover:border-y-[1px] hover:border-[#f9f9f9]`}
                  >
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/aboutus"
                      className={`no-underline w-full block font-semibold ${
                        about
                          ? "!text-[#f9f9f9]"
                          : "!text-[#030718] hover:!text-[#f9f9f9]"
                      } hover:!no-underline`}
                    >
                      About
                    </ChakraLink>
                  </div>
                  <div
                    className={`w-full px-6 py-2 border-b-[1px] border-[#030718] ${
                      contact ? "bg-[#030718]" : "hover:bg-[#030718]"
                    } hover:border-y-[1px] hover:border-[#f9f9f9]`}
                  >
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/contactus"
                      className={`no-underline w-full block font-semibold ${
                        contact
                          ? "!text-[#f9f9f9]"
                          : "!text-[#030718] hover:!text-[#f9f9f9]"
                      } hover:!no-underline`}
                    >
                      Contact
                    </ChakraLink>
                  </div>
                  <div
                    className={`w-full px-6 py-2 border-b-[1px] border-[#030718] bg-[#5b8181] hover:bg-[#030718]
                    hover:border-y-[1px] hover:border-[#f9f9f9]`}
                  >
                    <ChakraLink
                      onClick={() => setTimeout(onClose, 1000)}
                      as="a"
                      //   to="#mortgage"
                      href="#mortgage"
                      className={`no-underline w-full block font-semibold !text-[#f9f9f9] hover:!no-underline`}
                    >
                      Mortgage
                    </ChakraLink>
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="bg-[#f9f9f9] !gap-x-5">
                <ChakraLink
                  as={ReactRouterLink}
                  to="/register"
                  className={`flex flex-row items-center text-[#030718] hover:text-[#5b8181]`}
                >
                  <FaUser />
                  &nbsp; <span className="self-end">Sign Up</span>
                </ChakraLink>
                <Button
                  // rightIcon={}
                  variant="outline"
                  className="px-3 py-1 rounded-[3px] bg-transparent text-[#030718] !border-[2px] !border-[#030718] hover:!bg-[#030718] hover:text-offwhite"
                >
                  <ChakraLink
                    as={ReactRouterLink}
                    to="/login"
                    className="hover:!no-underline"
                  >
                    Log In &nbsp;
                    <FaArrowRight />
                  </ChakraLink>
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      {/* 
                    
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
                            variant="outline"
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
            </div> */}
    </>
  );
}
