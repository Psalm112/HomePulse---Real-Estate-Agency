// import { useEffect, useState } from "react";
import { Button, Image, Text } from "@chakra-ui/react";
import {
  FaBath,
  FaBed,
  FaCar,
  FaCouch,
  FaDumbbell,
  FaNairaSign,
  FaPersonSwimming,
  FaTemperatureArrowUp,
} from "react-icons/fa6";
import house1 from "../assets/property/house1.webp";
import house2 from "../assets/property/house2.jpg";
import house3 from "../assets/property/house3.jpg";
import house4 from "../assets/property/house4.jpg";
import house5 from "../assets/property/house5.webp";
import house6 from "../assets/property/house6.jpg";
import house7 from "../assets/property/house7.jpg";
import house8 from "../assets/property/house8.webp";
import house9 from "../assets/property/house9.jpg";
import house10 from "../assets/property/house10.jpg";
import house11 from "../assets/property/house11.jpg";
import house12 from "../assets/property/house12.jpg";
import house13 from "../assets/property/house13.jpg";
import house14 from "../assets/property/house14.jpg";
import house15 from "../assets/property/house15.jpg";

type Features = {
  bedrooms: number;
  bathrooms: number;
  furnished: boolean;
  ac: boolean;
  parking: boolean;
  pool: boolean;
  gym: boolean;
  size: number;
};
interface propertyProp {
  property: {
    name: string;
    type: string;
    address: string;
    description: string;
    price: number;
    maintenanceFee: number;
    features: Features;
    image_link: string;
  };
  isPropertyPage: boolean;
  index: number;
  isNotSearchResult?: string[];
  typeFilter?: string[];
  amenitiesFilter?: string[];
  priceFilter?: number[];
  bedFilter?: number[];
  bathFilter?: number[];
  sizeFilter?: number[];
  maintenanceFilter?: number[];
  //   locationFilter?: string;
}
export default function PropertyList(propertyConfig: propertyProp) {
  const getImage = (imageLink: string) => {
    switch (imageLink) {
      case "house1":
        return house1;
      case "house2":
        return house2;
      case "house3":
        return house3;
      case "house4":
        return house4;
      case "house5":
        return house5;
      case "house6":
        return house6;
      case "house7":
        return house7;
      case "house8":
        return house8;
      case "house9":
        return house9;
      case "house10":
        return house10;
      case "house11":
        return house11;
      case "house12":
        return house12;
      case "house13":
        return house13;
      case "house14":
        return house14;
      case "house15":
        return house15;
      // map other images similarly
      // default:
      //     return '';
    }
  };

  const getType = (propertyType: string) => {
    switch (propertyType) {
      case "singleFamily":
        return "Single-Family Home";
      case "condo":
        return "Condominium";
      case "apartment":
        return "Apartment";
      case "dupTriPlex":
        return "Duplex/Triplex";
      case "industrial":
        return "Industrial Building";
      case "office":
        return "Office Building";
      case "warehouse":
        return "Warehouse";
    }
  };
  //   const [shouldShow, setShouldShow] = useState<boolean>(true);
  //   const [searchAmenities, setSearchAmenities] = useState<boolean>(true);
  //   useEffect(() => {
  //     if (
  //       propertyConfig.amenitiesFilter &&
  //       propertyConfig.amenitiesFilter[0] !== undefined
  //     ) {
  //       for (const amenity of propertyConfig.amenitiesFilter) {
  //         const [amenityState, setAmenityState] = useState<boolean>(true);
  //         // if (
  //         //   typeof propertyConfig.property.features[amenity as keyof Features] !==
  //         //   "number"
  //         // ) {
  //         setAmenityState(
  //           !!propertyConfig.property.features[amenity as keyof Features]
  //         );
  //         // }

  //         setSearchAmenities(searchAmenities && amenityState);
  //       }
  //     } else {
  //       setSearchAmenities(true);
  //     }
  //   }, [propertyConfig.amenitiesFilter]);

  //   const isAmenities =
  //     propertyConfig.property.features[
  //       propertyConfig.amenitiesFilter[0] as keyof Features
  //     ];
  const isHidden =
    propertyConfig.isNotSearchResult?.includes(
      propertyConfig.index.toString()
    ) ||
    !propertyConfig.typeFilter?.includes(propertyConfig.property.type) ||
    !(
      propertyConfig.priceFilter &&
      propertyConfig.priceFilter[0] <= propertyConfig.property.price &&
      propertyConfig.priceFilter[1] >= propertyConfig.property.price
    ) ||
    !(
      propertyConfig.bedFilter &&
      propertyConfig.bedFilter[0] <=
        propertyConfig.property.features.bedrooms &&
      propertyConfig.bedFilter[1] >= propertyConfig.property.features.bedrooms
    ) ||
    !(
      propertyConfig.bathFilter &&
      propertyConfig.bathFilter[0] <=
        propertyConfig.property.features.bathrooms &&
      propertyConfig.bathFilter[1] >= propertyConfig.property.features.bathrooms
    ) ||
    !(
      propertyConfig.sizeFilter &&
      propertyConfig.sizeFilter[0] <= propertyConfig.property.features.size &&
      propertyConfig.sizeFilter[1] >= propertyConfig.property.features.size
    ) ||
    !(
      propertyConfig.maintenanceFilter &&
      propertyConfig.maintenanceFilter[0] <=
        propertyConfig.property.maintenanceFee &&
      propertyConfig.maintenanceFilter[1] >=
        propertyConfig.property.maintenanceFee
    );
  const hideClass = isHidden && propertyConfig.isPropertyPage ? "hidden" : "";
  return (
    <>
      {/* {shouldShow && ( */}
      <div className={`w-full h-full xl:w-[43vw] ${hideClass}`}>
        <div
          key={propertyConfig.index}
          className={`w-[100%] h-full grid grid-cols-1 grid-rows-2 items-stretch justify-center mb-5 rounded-[3px] sm:grid-cols-2 sm:grid-rows-1`}
        >
          <div className="relative h-full overflow-hidden bg-black">
            <Image
              // boxSize="300px"
              // height="250px"
              objectFit="cover"
              src={getImage(propertyConfig.property.image_link)}
              alt={propertyConfig.property.name}
              className="w-full h-full inline transition-all duration-500 ease-in hover:scale-[1.1] hover:opacity-75"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-[rgba(0,_0,_0,_0.3)] text-offwhite text-lg">
              <FaNairaSign /> {propertyConfig.property.price.toLocaleString()}
            </div>
          </div>
          <div className="w-full max-h-full bg-[#f9f9f9] p-3 flex flex-col gap-y-4 sm:h-full">
            <div>
              <Text as="h3" className="font-semibold text-xl text-left">
                {propertyConfig.property.name}
              </Text>
              <Text className="w-full text-sm">
                {propertyConfig.property.address}
              </Text>
            </div>
            <div className="w-full mx-auto flex flex-row items-center justify-start">
              <p className="w-full px-1">
                <span className="text-[#94949b]">Type</span>
                <br />
                <span className="text-sm">
                  {getType(propertyConfig.property.type)}
                </span>
              </p>
              <p className="w-full border-x-[1px] border-[#030718] px-1">
                <span className="text-[#94949b]">Size</span>
                <br />
                <span className="text-sm">
                  {propertyConfig.property.features.size} Sq.ft
                </span>
              </p>
              <p className="w-full px-1">
                <span className="text-[#94949b]">Maintenance</span>
                <br />
                <span className="text-sm">
                  <FaNairaSign />
                  {propertyConfig.property.maintenanceFee}
                </span>
              </p>
            </div>
            <div>
              <Text as="h4" className="font-semibold text-lg">
                Features/Amenities
              </Text>
              <div className="flex flex-row flex-wrap items-center justify-start gap-5">
                {propertyConfig.property.features.furnished && (
                  <p className="text-center text-[#94949b] hidden sm:block">
                    <FaCouch />
                    <br />
                    Furnished
                  </p>
                )}
                <p className="text-center text-[#94949b] ">
                  <FaBath />
                  <br />
                  {propertyConfig.property.features.bathrooms} Bathroom(s)
                </p>
                {propertyConfig.property.features.ac && (
                  <p className="text-center text-[#94949b]">
                    <FaTemperatureArrowUp />
                    <br />
                    A/C
                  </p>
                )}
                <p className="text-center text-[#94949b]">
                  <FaBed />
                  <br />
                  {propertyConfig.property.features.bedrooms} Bedroom(s)
                </p>

                {propertyConfig.property.features.gym && (
                  <p className="text-center text-[#94949b] hidden sm:block">
                    <FaDumbbell />
                    <br />
                    Gym
                  </p>
                )}
                {propertyConfig.property.features.parking && (
                  <p className="text-center text-[#94949b] hidden sm:block">
                    <FaCar />
                    <br />
                    Parking Lot
                  </p>
                )}
                {propertyConfig.property.features.pool && (
                  <p className="text-center text-[#94949b] hidden sm:block">
                    <FaPersonSwimming />
                    <br />
                    Pool
                  </p>
                )}
                <p className="text-sm sm:hidden">
                  +
                  {Number(propertyConfig.property.features.gym) +
                    Number(propertyConfig.property.features.parking) +
                    Number(propertyConfig.property.features.pool) +
                    Number(propertyConfig.property.features.furnished)}
                  &nbsp;More
                </p>
              </div>
            </div>
            <Button
              variant="solid"
              className="w-full !mt-auto !font-semibold !text-offwhite !bg-[#030718] py-[10px] border-[#030718] border-[2px] hover:bg-[#5b8181] hover:text-offwhite"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
