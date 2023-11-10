import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FaBath, FaBed, FaChartArea, FaMapLocation, FaNairaSign } from "react-icons/fa6";
import house1 from "../assets/house1.webp"
import house2 from "../assets/house2.jpg"
import house3 from "../assets/house3.jpg"
import house4 from "../assets/house4.jpg"
import house5 from "../assets/house5.webp"
import house6 from "../assets/house6.jpg"
import house7 from "../assets/house7.jpg"
import house8 from "../assets/house8.webp"
import house9 from "../assets/house9.jpg"
import house10 from "../assets/house10.jpg"


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
    const getImage = (imageLink: string) => {
        switch (imageLink) {
            case 'house1.webp':
                return house1;
            case 'house2.jpg':
                return house2;
            case 'house3.jpg':
                return house3;
            case 'house4.jpg':
                return house4;
            case 'house5.webp':
                return house5;
            case 'house6.jpg':
                return house6;
            case 'house7.jpg':
                return house7;
            case 'house8.webp':
                return house8;
            case 'house9.jpg':
                return house9;
            case 'house10.jpg':
                return house10;
            // map other images similarly
            // default:
            //     return '';
        }
    };
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
                    src={getImage(property.image_link)}
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