import { ChangeEvent } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
// import { useForm, SubmitHandler } from 'react-hook-form';
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  useDisclosure,
  // Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaChartArea, FaNairaSign, FaXmark } from "react-icons/fa6";
import jsonData from "../assets/data.json";
import PropertyList from "../components/PropertyList";
import NavigationBarSm from "../components/NavigationBarSm";
import { useRef, useState } from "react";
import Mortgage from "../components/Mortgage";

export default function Property() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [priceFilter, setPriceFilter] = useState<number[]>([50000, 900000000]);
  const [bedFilter, setBedFilter] = useState<number[]>([1, 10]);
  const [bathFilter, setBathFilter] = useState<number[]>([1, 20]);
  const [sizeFilter, setSizeFilter] = useState<number[]>([500, 50000]);
  const [maintenanceFilter, setMaintenanceFilter] = useState<number[]>([
    5000, 500000,
  ]);
  const [typeFilter, setTypeFilter] = useState<string[]>([
    "singleFamily",
    "apartment",
    "condo",
    "dupTriPlex",
    "office",
    "warehouse",
    "industrial",
  ]);
  const [amenitiesFilter, setAmenitiesFilter] = useState<string[]>([
    "furnished",
    "parking",
    "ac",
    "pool",
    "gym",
  ]);
  const [typeVal, setTypeVal] = useState<string[]>([]);
  const [amenitiesVal, setAmenitiesVal] = useState<string[]>([]);
  //   const [priceVal, setPriceVal] = useState<number[]>([...priceFilter]);
  const clearFilters = () => {
    setAmenitiesFilter(["furnished", "parking", "ac", "pool", "gym"]);
    setAmenitiesVal([]);
    setBathFilter([1, 20]);
    setBedFilter([1, 10]);
    setMaintenanceFilter([5000, 500000]);
    setPriceFilter([50000, 900000000]);
    setSizeFilter([500, 50000]);
    setTypeFilter([
      "singleFamily",
      "apartment",
      "condo",
      "dupTriPlex",
      "office",
      "warehouse",
      "industrial",
    ]);
    setTypeVal([]);
  };
  const [inputVal, setInputVal] = useState<string>();
  // Search functionality
  const [isNotSearchResult, setIsNotSearchResult] = useState<string[]>([]);
  const searchProperty = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(
      (e.target as HTMLInputElement).value.trim().toLowerCase(),
      "gi"
    );
    const notMatch = jsonData.properties.reduce<string[]>(
      (acc, property, i) => {
        if (!property.name.match(regex)) {
          // console.log(i)
          acc.push(i.toString());
        }
        return acc;
      },
      []
    );
    setIsNotSearchResult(notMatch);
  };
  return (
    <>
      <NavigationBar
        home={false}
        properties={true}
        services={false}
        about={false}
        contact={false}
      />
      <NavigationBarSm
        home={false}
        properties={true}
        services={false}
        about={false}
        contact={false}
      />
      <div className="w-full h-[30vh] bg-[#f9f9f9] sm:h-[40vh]">
        <div className="w-full h-full bg-[url('./assets/properties.jpg')] bg-cover bg-no-repeat bg-[50%_50%]">
          <div className="w-full h-full relative overflow-hidden px-[4vh] bg-[rgba(0,_0,_0,_0.5)] text-offwhite flex flex-row flex-wrap items-center justify-center">
            <div className="relative overflow-hidden p-5 rounded-[3px] animate-[slideInLeft_0.5s_linear]">
              <h1 className="text-offwhite text-center text-4xl sm:text-5xl">
                Our Properties
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full px-[3vw] py-[4vh] md:px-[6.5vw]">
        <div className="mb-5">
          <p>
            Discover the diverse real estate offerings of HomePulse, extending
            across the vibrant landscapes of Nigeria. Whether you're seeking
            properties in bustling city centers, serene suburban areas, or
            scenic outskirts, our listings cater to your preferences. Explore
            our portfolio, filter properties based on location or sector, and
            find the perfect home or investment opportunity that aligns with
            your aspirations.
          </p>
        </div>
        <div className="border-t-[1px] border-[#030718] pt-[2vh]">
          <div>
            {/* <form className="grid grid-cols-8 gap-x-8 items-center justify-center"> */}
            <div className="max-w-[400px] mx-auto flex flew-row items-center justify-center  rounded-[3px]">
              <InputGroup className="overflow-hidden w-full border-r-[1px] border-[#030718] ">
                <InputLeftElement pointerEvents="none" className="!h-full">
                  <FaSearch />
                </InputLeftElement>
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputVal(e.target.value.trim().toLowerCase());
                    if (e.target.value.trim().toLowerCase() === "") {
                      setIsNotSearchResult([]);
                    } else {
                      searchProperty(e);
                    }
                  }}
                  value={inputVal}
                  size="lg"
                  type="text"
                  variant="unstyled"
                  placeholder="Phone number"
                  className="py-2 !bg-[rgba(3,_7,_24,_0.1)] !text-[#030718] border-[1px] border-transparent !rounded-s-[3px] !rounded-e-none focus:border-[#030718] focus:!bg-transparent"
                />
                <InputRightElement
                  onClick={() => {
                    setInputVal("");
                    setIsNotSearchResult([]);
                  }}
                  pointerEvents="visible"
                  className="!h-full"
                >
                  <FaXmark />
                </InputRightElement>
              </InputGroup>
              <Button
                ref={btnRef}
                variant="unstyled"
                onClick={onOpen}
                // rightIcon={ }
                className="max-w-[70px] !outline-none !w-full !h-full !px-1 !py-[9px] !rounded-e-[3px] !rounded-s-none !bg-[rgba(3,_7,_24,_0.1)] !font-normal"
              >
                filter <FaChevronDown />
              </Button>
              {/* <select
                                name=""
                                id=""
                                placeholder="specify your location"
                                className="w-[120px] py-[15px] text-black border-l-[1px] border-[#030718]"
                            >
                                <option value="all">
                                    All locations
                                </option>
                                {jsonData.locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}, Nigeria
                                    </option>
                                ))}
                            </select> */}
            </div>
            {/* </form> */}
            <Drawer
              isOpen={isOpen}
              placement="top"
              size="lg"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader className="!px-[3vw]">Filter</DrawerHeader>

                <DrawerBody className="!px-[3vw]">
                  <div className="flex flex-row flex-wrap gap-5 items-start justify-start">
                    <div className="w-full border-[#030718] sm:w-[60vw] sm:border-r-[1px]">
                      <Accordion
                        defaultIndex={[0]}
                        allowMultiple
                        // className="!w-full flex flex-row flex-wrap items-center justify-start"
                      >
                        <AccordionItem>
                          <h2>
                            <AccordionButton className="!w-full !px-0">
                              <Box as="span" flex="1" textAlign="left">
                                Property Type
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4} className="!px-0">
                            <CheckboxGroup
                              colorScheme="gray"
                              //   defaultValue={[]}
                              value={typeVal}
                              onChange={(val: string[]) => {
                                setTypeVal(val);
                                // if (val[0] !== undefined) {
                                setTypeFilter(val);
                                // }
                              }}
                            >
                              <Stack spacing="5" direction="row" wrap="wrap">
                                <Checkbox value="singleFamily">
                                  Single-Family Homes
                                </Checkbox>
                                <Checkbox value="apartment">
                                  Apartments
                                </Checkbox>
                                <Checkbox value="condo">Condominiums</Checkbox>
                                <Checkbox value="dupTriPlex">
                                  Duplexes and Triplexes
                                </Checkbox>
                                <Checkbox value="office">
                                  Office Buildings
                                </Checkbox>
                                <Checkbox value="warehouse">
                                  Warehouses
                                </Checkbox>
                                <Checkbox value="industrial">
                                  Industrial Buildings
                                </Checkbox>
                              </Stack>
                            </CheckboxGroup>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton className="!px-0">
                              <Box as="span" flex="1" textAlign="left">
                                Amenities
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4} className="!px-0">
                            <CheckboxGroup
                              colorScheme="gray"
                              //   defaultValue={[]}
                              value={amenitiesVal}
                              onChange={(val: string[]) => {
                                setAmenitiesVal(val);
                                setAmenitiesFilter(val);
                              }}
                            >
                              <Stack spacing="5" direction="row" wrap="wrap">
                                <Checkbox value="furnished">Furnished</Checkbox>
                                <Checkbox value="ac">A/C</Checkbox>
                                <Checkbox value="parking">Parking Lot</Checkbox>
                                <Checkbox value="pool">Pool</Checkbox>
                                <Checkbox value="gym">Gym</Checkbox>
                              </Stack>
                            </CheckboxGroup>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-y-9 sm:w-[30vw]">
                      <div className="w-full">
                        <h4>Price range</h4>
                        <p></p>
                        <RangeSlider
                          defaultValue={[50000, 900000000]}
                          min={50000}
                          max={900000000}
                          step={10000}
                          value={priceFilter}
                          onChange={(val) => {
                            setPriceFilter(val);
                          }}
                        >
                          <RangeSliderTrack bg="rgba(3,7,24,0.1)">
                            <RangeSliderFilledTrack bg="#5b8181" />
                          </RangeSliderTrack>
                          <RangeSliderThumb
                            boxSize={6}
                            index={0}
                            className="text-[#5b8181] flex flex-row flex-wrap items-center justify-center gap-y-2"
                          >
                            <span className="block">
                              <FaNairaSign />
                            </span>
                            <span className="translate-x-[40%] text-sm">
                              {priceFilter[0].toLocaleString()}
                            </span>
                          </RangeSliderThumb>
                          <RangeSliderThumb
                            boxSize={6}
                            index={1}
                            className="flex flex-row flex-wrap items-center justify-center gap-y-2"
                          >
                            <span className="block">
                              <FaNairaSign />
                            </span>
                            <span className="translate-x-[-40%]">
                              {priceFilter[1].toLocaleString()}
                            </span>
                          </RangeSliderThumb>
                        </RangeSlider>
                      </div>
                      <div className="w-full">
                        <h4>Maintenance fee range</h4>
                        <p></p>
                        <RangeSlider
                          defaultValue={[5000, 500000]}
                          min={5000}
                          max={500000}
                          step={1000}
                          value={maintenanceFilter}
                          onChange={(val) => {
                            setMaintenanceFilter(val);
                          }}
                        >
                          <RangeSliderTrack bg="rgba(3,7,24,0.1)">
                            <RangeSliderFilledTrack bg="#5b8181" />
                          </RangeSliderTrack>
                          <RangeSliderThumb
                            boxSize={6}
                            index={0}
                            className="text-[#5b8181] flex flex-row flex-wrap items-center justify-center gap-y-2"
                          >
                            <span className="block">
                              <FaNairaSign />
                            </span>
                            <span className="translate-x-[40%] text-sm">
                              {maintenanceFilter[0].toLocaleString()}
                            </span>
                          </RangeSliderThumb>
                          <RangeSliderThumb
                            boxSize={6}
                            index={1}
                            className="flex flex-row flex-wrap items-center justify-center gap-y-2"
                          >
                            <span className="block">
                              <FaNairaSign />
                            </span>
                            <span className="translate-x-[-40%]">
                              {maintenanceFilter[1].toLocaleString()}
                            </span>
                          </RangeSliderThumb>
                        </RangeSlider>
                      </div>
                      <div className="w-full">
                        <h4>Bedrooms</h4>
                        <p className="text-sm">From 1 to 10</p>
                        <RangeSlider
                          defaultValue={[1, 10]}
                          min={1}
                          max={10}
                          step={1}
                          value={bedFilter}
                          onChange={(val) => setBedFilter(val)}
                        >
                          <RangeSliderTrack bg="rgba(3,7,24,0.1)">
                            <RangeSliderFilledTrack bg="#5b8181" />
                          </RangeSliderTrack>
                          <RangeSliderThumb boxSize={6} index={0}>
                            <Box color="#5b8181">{bedFilter[0]}</Box>
                          </RangeSliderThumb>
                          <RangeSliderThumb boxSize={6} index={1}>
                            <Box color="#5b8181">{bedFilter[1]}</Box>
                          </RangeSliderThumb>
                        </RangeSlider>
                      </div>
                      <div className="w-full">
                        <h4>Bathrooms</h4>
                        <p className="text-sm">From 1 to 10</p>
                        <RangeSlider
                          defaultValue={[1, 20]}
                          min={1}
                          max={20}
                          step={1}
                          value={bathFilter}
                          onChange={(val) => setBathFilter(val)}
                        >
                          <RangeSliderTrack bg="rgba(3,7,24,0.1)">
                            <RangeSliderFilledTrack bg="#5b8181" />
                          </RangeSliderTrack>
                          <RangeSliderThumb boxSize={6} index={0}>
                            <Box color="#5b8181">{bathFilter[0]}</Box>
                          </RangeSliderThumb>
                          <RangeSliderThumb boxSize={6} index={1}>
                            <Box color="#5b8181">{bathFilter[1]}</Box>
                          </RangeSliderThumb>
                        </RangeSlider>
                      </div>
                      <div className="w-full">
                        <h4>Land Area</h4>
                        <p className="text-sm">From 1 to 10</p>
                        <RangeSlider
                          defaultValue={[500, 50000]}
                          min={500}
                          max={50000}
                          step={10}
                          value={sizeFilter}
                          onChange={(val) => setSizeFilter(val)}
                        >
                          <RangeSliderTrack bg="rgba(3,7,24,0.1)">
                            <RangeSliderFilledTrack bg="#5b8181" />
                          </RangeSliderTrack>
                          <RangeSliderThumb
                            boxSize={6}
                            index={0}
                            className="flex flex-row flex-wrap items-center justify-center gap-y-2"
                          >
                            <span className="block">
                              <FaChartArea />
                            </span>
                            <span className="translate-x-[40%]">
                              {sizeFilter[0].toLocaleString()}
                            </span>
                          </RangeSliderThumb>
                          <RangeSliderThumb
                            boxSize={6}
                            index={1}
                            className="flex flex-row flex-wrap items-center justify-center gap-y-2"
                          >
                            <span className="block">
                              <FaChartArea />
                            </span>
                            <span className="translate-x-[-40%]">
                              {sizeFilter[1].toLocaleString()}
                            </span>
                          </RangeSliderThumb>
                        </RangeSlider>
                      </div>
                    </div>
                  </div>
                </DrawerBody>

                <DrawerFooter>
                  <Button onClick={clearFilters} variant="outline" mr={3}>
                    Clear all filters
                  </Button>
                  <Button
                    onClick={onClose}
                    className="!text-offwhite !bg-[#030718]"
                  >
                    Close
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <div className="flex flex-row items-start justify-start"></div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-center gap-5 pt-[7vh] xl:grid-cols-2 ">
            {jsonData.properties.map((property, index) => (
              <PropertyList
                isPropertyPage={true}
                property={property}
                index={index}
                isNotSearchResult={isNotSearchResult}
                typeFilter={typeFilter}
                amenitiesFilter={amenitiesFilter}
                priceFilter={priceFilter}
                bedFilter={bedFilter}
                bathFilter={bathFilter}
                sizeFilter={sizeFilter}
                maintenanceFilter={maintenanceFilter}
              />
            ))}
          </div>
        </div>
      </div>
      <Mortgage />
      <Footer />
    </>
  );
}
