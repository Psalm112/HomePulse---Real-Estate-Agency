import { Button, Input } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import NavigationBar from "../components/NavigationBar";
import jsonData from "../assets/data.json";
import { FaHome, FaLocationArrow, FaSearch } from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { FaNairaSign } from "react-icons/fa6";
import ServicesOutline from "../components/ServicesOutline";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import PropertyList from "../components/PropertyList";

export default function Homepage() {
    type Inputs = {
        mail: string;
        password: string;
    };
    const {
        // register,
        handleSubmit,
        clearErrors,
        // formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        clearErrors();
    };
    return (
        <>
            <div>
                {/* Header */}
                <NavigationBar
                    home={true}
                    properties={false}
                    services={false}
                    about={false}
                    contact={false}
                />
                <div className="h-[90vh] w-full bg-[#030718] px-[6.5vw] py-[5vh]">
                    <div className="h-full bg-[url('./assets/hh.jpg')] bg-cover bg-no-repeat">
                        <div className="h-full flex flex-col">
                            <div className="grid grid-cols-5 grid-rows-2 h-[45vh] border-b-[10px] border-solid border-[#030718]">
                                <div className="w-full h-full text-offwhite flex flex-col gap-y-5 justify-center bg-[#030718] col-span-3 row-span-2">
                                    <h1 className="text-4xl">Find Your Dream Place</h1>
                                    <p>Find Your Dream Home Easily and Quickly here</p>
                                    <div className="relative overflow-hidden">
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="w-[90%] grid grid-cols-[repeat(10,_minmax(0,_1fr));] grid-rows-3 mr-5 bg-[rgba(249,_249,_249,_0.5)] rounded-[3px] p-[15px]"
                                        >
                                            <label className="col-span-3 row-span-3">
                                                <FaLocationArrow />
                                                &nbsp; Location:
                                                <br />
                                                <select
                                                    required
                                                    placeholder="specify your location"
                                                    className="w-full text-black py-[13px] px-[2px] border-r-[1px] border-[#030718]"
                                                >
                                                    <option value="all">All locations</option>
                                                    {jsonData.locations.map((location, index) => (
                                                        <option key={index} value={location}>
                                                            {location}, Nigeria
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            <label className="col-span-3 row-span-3">
                                                <FaHome />
                                                &nbsp; Type
                                                <br />
                                                <select
                                                    name=""
                                                    id=""
                                                    placeholder="specify your location"
                                                    className="w-full text-black py-[13px] border-r-[1px] border-[#030718]"
                                                >
                                                    <option value="all">All locations</option>
                                                    <option value="residential">Residential</option>
                                                    <option value="commercial">Commercial</option>
                                                </select>
                                            </label>
                                            <label className="col-span-3 row-span-3">
                                                <FaNairaSign />
                                                &nbsp; Price
                                                <br />
                                                <Input
                                                    // bg="#5b8181"
                                                    size="lg"
                                                    type="text"
                                                    placeholder="500,000"
                                                    // value={<FaSearch />}
                                                    className="w-full text-black px-[5px] py-[11.5px] border-r-[1px] border-[#030718]"
                                                />
                                            </label>
                                            <Button
                                                type="submit"
                                                variant="solid"
                                                className="w-full bg-[#5b8181] px-3 col-start-10 col-span-1 row-start-2 row-span-2"
                                            >
                                                <FaSearch />
                                            </Button>
                                        </form>
                                        <div className="absolute top-0 left-0 w-full h-full bg-[#030718] -translate-x-[-100%] animate-[reveal_1s_linear]"></div>
                                    </div>
                                </div>
                                <div className="w-full col-span-2 row-span-2 bg-transparent relative overflow-y-hidden">
                                    <div className="w-full h-full bg-[#030718] -translate-y-[-100%] animate-[fillIn_2s_linear]"></div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-8 grid-rows-2 h-[45vh] border-t-[10px] border-solid border-[#030718]">
                                <div className="w-full col-span-4 row-span-2 bg-transparent relative overflow-y-hidden">
                                    <div className="w-full h-full bg-[#030718] -translate-y-[-100%] animate-[fillIn_1.65s_linear]"></div>
                                </div>
                                <div className="w-full col-span-2 bg-transparent border-l-[20px] border-solid border-[#030718] relative overflow-y-hidden">
                                    <div className="w-full h-full bg-[#030718] -translate-y-[-100%] animate-[fillIn_1.35s_linear]"></div>
                                </div>
                                <div className="w-full col-span-2 bg-[#030718]"></div>
                                <div className="w-full col-span-4 bg-[#030718] border-t-[10px] border-solid border-[#030718]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ServicesOutline />
                {/*  */}
                <div className="w-full h-full pl-[6.5vw] py-[12vh] bg-[linear-gradient(#f9f9f9_40%,_#030718_30%,_#030718_30%)]">
                    <div>
                        <div className="mr-[6.5vw] text-black flex flex-row items-center justify-between">
                            <div>
                                <p className="inline-block">Best Choice</p>
                                <h2 className="text-3xl">Popular Residences</h2>
                            </div>
                            <ChakraLink
                                as={ReactRouterLink}
                                to="/services/propertysales"
                                className="hover:border-[#5b8181] hover:border-b-[2px]"
                            >
                                See All
                            </ChakraLink>
                        </div>
                        <div className="py-8 pr-10 overflow-x-scroll grid grid-cols-[repeat(10,_minmax(300px,_1fr))] grid-rows-2 gap-x-8 ">
                            {jsonData.properties.map((property, index) => (
                                <PropertyList property={property} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <Partners />
                <div className="w-full h-full px-[6.5vw] py-[7vh] text-offwhite bg-[#5b8181]">
                    <div>
                        <h2>Mortgage Calculator</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
