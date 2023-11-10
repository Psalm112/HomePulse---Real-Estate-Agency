import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FaBath, FaBed, FaChartArea, FaMapLocation, FaNairaSign } from "react-icons/fa6";


type property = {
    name: string,
    description: string,
    features: {
        bedrooms: number,
        bathrooms: number,
        size_sqm: number
    },
    image_link: string,
    location: string
}
export default function PropertyList({ property, index }: { property: property, index: number }) {
    return (
        <>
            <Box
                key={index}
                className="w-[100%] h-full bg-[#f9f9f9] rounded-[3px] col-span-1 row-span-2 flex flex-col items-stretch justify-start"
            >
                <Image
                    // boxSize="300px"
                    height="250px"
                    objectFit="cover"
                    src={`./assets/${property.image_link}`}
                    alt={property.name}
                    className="w-full inline"
                />
                <Box className="p-[15px]">
                    <Text as="h4" className="font-semibold text-lg">
                        {property.name}
                    </Text>
                    <Text className="text-sm">{property.description}</Text>
                    <Box className="w-full text-sm grid grid-cols-4 grid-row-2 gap-[5px] mt-[10px] mb-5">
                        <Text className="w-full">
                            <FaBed /> {property.features.bedrooms}
                        </Text>
                        <Text className="w-full">
                            <FaBath /> {property.features.bathrooms}
                        </Text>
                        <Text className="w-full col-span-2"><FaChartArea /> {property.features.size_sqm} sq. m.</Text>
                        <Text className="w-full col-span-4"><FaMapLocation /> {property.location}</Text>
                        <Text className="col-span-4 text-[#017f7f] align-middle">
                            <FaNairaSign />
                            &nbsp;1.5M/year{" "}
                        </Text>
                    </Box>
                    <Button
                        variant="solid"
                        className="w-full font-semibold bg-transparent py-[10px] border-[#5b8181] border-[2px] hover:bg-[#5b8181] hover:text-offwhite"
                    >
                        Buy Now
                    </Button>
                </Box>
            </Box>
        </>
    )
}