import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function ServicesOutline() {
    return (
        <>
            <div className="bg-[#f9f9f9] px-[6.5vw] py-[10vh]">
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                    <h2 className="col-span-2 text-3xl">Services</h2>
                    <div className="col-start-1 row-start-2 col-span-2">
                        <p className="text-lg">
                            Our services encompass property{" "}
                            <span className="text-[#94949b]">sales</span>,{" "}
                            <span className="text-[#94949b]">rentals</span>, and{" "}
                            <span className="text-[#94949b]">interior design</span>, along
                            with expert <span className="text-[#94949b]">guidance</span> for
                            residential and commercial real estate.
                        </p>
                        <p className="text-sm mt-[30px]">
                            Explore our services! With the help of our experts, it's time to
                            realize all your dreams of owning your own home.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg mb-4">Property Sales</h3>
                        <p className="text-sm mb-3">
                            Whether you are looking to buy or sell a contemporary home, we
                            ensure a seamless prrocess that caters to your specific needs.
                            Our experts are here to assist you throughout the sales process
                        </p>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/services/property/sales"
                            className="border-black border-[2px] rounded-[3px] px-[7px] py-[4px] hover:border-[#5b8181]"
                        >
                            Explore
                        </ChakraLink>
                    </div>
                    <div className="self-stretch">
                        <h3 className="text-lg mb-4">Property Rentals</h3>
                        <p className="text-sm mb-3">
                            Our rental services offer a variety of modern residential
                            properties for lease. From stylish small homes to spacious
                            suburban homes, we help you find the ideal rental property.
                        </p>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/services/property/rentals"
                            className="border-black border-[2px] rounded-[3px] px-[7px] py-[4px] hover:border-[#5b8181]"
                        >
                            Explore
                        </ChakraLink>
                    </div>
                    <div>
                        <h3 className="text-lg mb-4">Commercial Property</h3>
                        <p className="text-sm mb-3">
                            Whether you're looking to buy or lease modern commercial spaces,
                            our team assists in finding properties that align with your
                            business goals.
                        </p>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/services/property/commercial"
                            className="border-black border-[2px] rounded-[3px] px-[7px] py-[4px] hover:border-[#5b8181]"
                        >
                            Explore
                        </ChakraLink>
                    </div>
                    <div>
                        <h3 className="text-lg mb-4">Interior Design</h3>
                        <p className="text-sm mb-3">
                            Our experienced designers work closely with you to transform
                            your house, whether you own it or rent it, into a modern
                            masterpiece.
                        </p>
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/services/property/interiordesign"
                            className="border-black border-[2px] rounded-[3px] px-[7px] py-[4px] hover:border-[#5b8181]"
                        >
                            Explore
                        </ChakraLink>
                    </div>
                </div>
            </div>
        </>
    )
}