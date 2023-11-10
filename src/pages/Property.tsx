import { FaSearch } from "react-icons/fa"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import { Button, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import jsonData from "../assets/data.json";
import PropertyList from "../components/PropertyList";

export default function Property() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <NavigationBar
                home={false}
                properties={true}
                services={false}
                about={false}
                contact={false}
            />
            <div className="w-full h-[50vh] px-[6.5vw] bg-[#030718] ">
                <div className="w-full h-full bg-[url('./assets/properties.jpg')] bg-cover bg-no-repeat bg-[50%_50%]">
                    <div className="w-full h-full relative overflow-hidden px-[4vh] flex flex-row items-center justify-between">
                        <div className="relative overflow-hidden self-start mt-[10vh] p-5 bg-[rgba(0,_0,_0,_0.3)] rounded-[3px] animate-[slideInLeft_1s_linear]">
                            <h1 className="text-offwhite text-5xl">Our<br />Properties</h1>
                        </div>
                        <p className="w-[40%] animate-[slideInRight_1s_linear]">Discover the diverse real estate offerings of HomePulse, extending across the vibrant landscapes of Nigeria. Whether you're seeking properties in bustling city centers, serene suburban areas, or scenic outskirts, our listings cater to your preferences. Explore our portfolio, filter properties based on location or sector, and find the perfect home or investment opportunity that aligns with your aspirations.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full px-[6.5vw] py-[4vh]">
                <div>
                    <div>
                        <form className="grid grid-cols-8 gap-x-8 items-center justify-center">
                            <div className="col-span-6 flex flew-row items-center justify-center border-[#030718] border-[1px] rounded-[3px]">
                                <InputGroup className="w-full">
                                    <div className="flex items-center justify-center pl-5 pr-2">
                                        <FaSearch />
                                    </div>
                                    <Input type='text' placeholder='Search for properties' className="w-full py-[15px] outline-none" />
                                </InputGroup>
                                <select
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
                                </select>
                            </div>
                            <div >
                                <Button onClick={onOpen}>Trigger modal</Button>

                                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                    <ModalOverlay />
                                    <ModalContent className="bg-black">
                                        <ModalHeader>Modal Title</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            jnjnjjb
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button onClick={onClose}>Close</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </div>
                            <Input
                                bg="#5b8181"
                                size="lg"
                                type="submit"
                                value="Search"
                                className="p-3 text-offwhite rounded-[3px] font-medium "
                            //   disabled={isOtp ? confirmPassword : false}
                            />
                        </form>
                        <div className="flex flex-row items-start justify-center">

                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 pt-[7vh]">
                        {jsonData.properties.map((property, index) => (
                            <PropertyList property={property} index={index} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}