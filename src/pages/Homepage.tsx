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
import NavigationBarSm from "../components/NavigationBarSm";
import Mortgage from "../components/Mortgage";

export default function Homepage() {
  type Inputs = {
    location: string;
    type: string;
    price: number;
  };
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    clearErrors();
    reset({
      location: "",
      type: "",
      price: undefined,
    });
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
        <NavigationBarSm
          home={true}
          properties={false}
          services={false}
          about={false}
          contact={false}
        />
        <div className="h-[90vh] w-full bg-[#f9f9f9] px-[3vw] py-[5vh] md:px-[6.5vw]">
          <div className="h-full bg-[url('./assets/hh.jpg')] bg-cover bg-no-repeat bg-[55%_50%] md:bg-[50%_50%]">
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-3 grid-rows-2 h-[55vh] border-b-[5px] border-solid border-[#f9f9f9] md:grid-cols-5 md:border-b-[5px]">
                <div className="w-full h-full flex flex-col gap-y-2 border-b-[10px] border-solid border-[#f9f9f9] justify-center bg-[#f9f9f9] col-span-3 md:row-span-2 md:gap-y-5 md-border-b-0">
                  <h1 className="text-3xl sm:text-4xl">
                    Find Your Dream Place
                  </h1>
                  <p className="text-sm md:text-base">
                    Find Your Dream Home Easily and Quickly here
                  </p>
                  <div className="relative overflow-hidden">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-[100%] grid grid-cols-7 grid-rows-3 md:grid-cols-[repeat(10,_minmax(0,_1fr));] items-end md:mr-5 sm:w-[90%]"
                    >
                      <label className="col-span-2 text-sm row-span-3 md:text-base md:col-span-3">
                        <span className="hidden md:inline text-[#030718]">
                          <FaLocationArrow />
                          &nbsp;
                        </span>
                        Location:
                        <br />
                        <select
                          {...register("location", {
                            required: true,
                          })}
                          required
                          placeholder="specify your location"
                          className="w-full text-offwhite py-[7px] px-[3px] outline-none bg-[#030718] border-r-[1px] border-[#f9f9f9] md:py-[13px] md:px-[5px]"
                        >
                          <option value="all">All</option>
                          {jsonData.locations.map((location, index) => (
                            <option key={index} value={location}>
                              {location}, Nigeria
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="col-span-2 text-sm row-span-3 md:text-base md:col-span-3">
                        <span className="hidden md:inline text-[#030718]">
                          <FaHome />
                          &nbsp;
                        </span>
                        Type
                        <br />
                        <select
                          {...register("type", {
                            required: true,
                          })}
                          placeholder="specify your location"
                          className="w-full text-offwhite py-[7px] px-[3px] outline-none bg-[#030718] border-r-[1px] border-[#f9f9f9] md:py-[13px] md:px-[5px]"
                        >
                          <option value="all">All</option>
                          <optgroup label="Residential Properties">
                            <option value="all">Single-Family Homes</option>
                            <option value="residential">Apartments</option>
                            <option value="commercial">Condominiums</option>
                            <option value="all">Duplexes and Triplexes</option>
                          </optgroup>
                          <optgroup label="Commercial Properties">
                            <option value="all">Office Buildings</option>
                            <option value="commercial">Warehouses</option>
                            <option value="all" className="mb-2">
                              Industrial Buildings
                            </option>
                          </optgroup>
                        </select>
                      </label>
                      <label className="col-span-2 text-sm row-span-3 md:text-base md:col-span-3">
                        <span className="hidden md:inline text-[#030718]">
                          <FaNairaSign />
                          &nbsp;
                        </span>
                        Price
                        <br />
                        <Input
                          {...register("price", {
                            required: true,
                            // valueAsNumber,
                          })}
                          //   value={}
                          variant="unstyled"
                          type="number"
                          placeholder="Max"
                          // value={<FaSearch />}
                          className="w-full text-offwhite !text-sm !px-[5px] !py-[6.5px] !rounded-none !bg-[#030718] !outline-none border-r-[1px] border-[#f9f9f9] md:!px-[5px] md:!py-[14px]"
                        />
                      </label>
                      <Button
                        type="submit"
                        variant="ghost"
                        className="w-full !text-offwhite !bg-[#5b8181] !rounded-none col-span-1 col-start-7 row-start-2 row-span-2 md:col-start-10"
                      >
                        <FaSearch />
                      </Button>
                    </form>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#f9f9f9] -translate-x-[-100%] animate-[reveal_1s_linear]"></div>
                  </div>
                  <div className="hidden md:block">
                    <p>
                      Calculate your mortgage fast, guiding you to your dream
                      home with ease,&nbsp;
                      <ChakraLink
                        as="a"
                        href="#mortgage"
                        className={`no-underline font-semibold !text-[#5b8181] hover:!no-underline`}
                      >
                        click here
                      </ChakraLink>
                      .
                    </p>
                  </div>
                </div>
                <div className="w-full col-span-1 bg-[#f9f9f9] md:hidden"></div>
                <div className="w-full bg-transparent relative overflow-y-hidden col-span-2 md:row-span-2">
                  <div className="w-full h-full bg-[#f9f9f9] -translate-y-[-100%] animate-[fillIn_2s_linear]"></div>
                </div>
              </div>
              <div className="w-full grid grid-cols-8 grid-rows-2 h-[45vh] border-t-[5px] border-solid border-[#f9f9f9] md:border-t-[10px]">
                <div className="w-full col-span-4 row-span-2 bg-transparent relative overflow-y-hidden">
                  <div className="w-full h-full bg-[#f9f9f9] -translate-y-[-100%] animate-[fillIn_1.65s_linear]"></div>
                </div>
                <div className="w-full col-span-2 bg-transparent border-l-[10px] border-solid border-[#f9f9f9] relative overflow-y-hidden md:border-l-[20px]">
                  <div className="w-full h-full bg-[#f9f9f9] -translate-y-[-100%] animate-[fillIn_1.35s_linear]"></div>
                </div>
                <div className="hidden w-full col-span-2 bg-[#f9f9f9] md:block"></div>
                <div className="w-full col-span-4 bg-[#f9f9f9] border-t-[10px] border-solid border-[#f9f9f9]"></div>
              </div>
            </div>
          </div>
        </div>
        <ServicesOutline />
        {/*  */}
        <div className="w-full h-full pl-[3vw] py-[12vh] bg-[linear-gradient(#f9f9f9_40%,_#030718_30%,_#030718_30%)] md:pl-[6.5vw]">
          <div className="overflow-hidden ">
            <div className="mr-[3vw] text-black flex flex-row items-center justify-between md:mr-[6.5vw]">
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
            <div className="w-full py-8 pr-10 overflow-x-scroll grid grid-cols-[repeat(10,_minmax(85vw,_1fr))] !grid-rows-1 gap-x-2 md:gap-x-8 xl:grid-cols-[repeat(10,_minmax(42vw,_1fr))]">
              {jsonData.properties.slice(0, 10).map((property, index) => (
                // <div className="w-full xl:w-[42vw]">
                <PropertyList
                  property={property}
                  index={index}
                  isPropertyPage={false}
                />
                // </div>
              ))}
            </div>
          </div>
        </div>
        <Partners />
        <Mortgage />
      </div>
      <Footer />
    </>
  );
}
