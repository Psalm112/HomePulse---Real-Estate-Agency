import { Image } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ServicesOutline from "../components/ServicesOutline";
import Partners from "../components/Partners";

export default function About() {
    return (
        <>
            <div>
                <NavigationBar
                    home={false}
                    properties={false}
                    services={false}
                    about={true}
                    contact={false}
                />
                <div className="h-[70vh] w-full px-[6.5vw] bg-[#030718]">
                    <div className="w-full h-full bg-[linear-gradient(#f9f9f9_70%,_#030718_30%)]">
                        <div className="h-[49vh] flex flex-col gap-y-5 items-center justify-between">
                            <div className="mt-auto relative overflow-hidden">
                                <h2 className="inline-block text-center text-4xl">
                                    We're here to make achieving <br /> your dream{" "}
                                    <span className="text-[#5b8181]">(much)</span> easier
                                </h2>
                                <div className="absolute top-0 left-0 w-full h-full bg-[#f9f9f9] -translate-x-[-100%] animate-[reveal_1s_linear]"></div>
                            </div>
                            <div className="w-full">
                                <Image
                                    // boxSize='100px'
                                    objectFit="cover"
                                    // align="50% 50%"
                                    src="./assets/city.png"
                                    alt="Finex Logo"
                                    className="w-full animate-[slideup_1s_linear]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full px-[6.5vw] pb-[2vh] bg-[#030718]">
                    <div className="text-offwhite">
                        <h1 className="text-3xl mb-5">Our Story</h1>
                        <p className="w-[60%] text-lg">
                            At HomePulse, we delve into the intricacies of the real estate
                            world, where every property transaction tells a unique story. With
                            a profound understanding of the exhilarating highs and the
                            inevitable challenges, we've walked the path of property sales,
                            rentals, commercial ventures, and interior design.
                        </p>
                        <div className="py-[4vh] grid grid-cols-2 grid-rows-2 gap-5">
                            <div>
                                <h3 className="text-xl font-medium">
                                    Navigating Complexity with Digital Expertise
                                </h3>
                                <p className="mt-[10px]">
                                    HomePulse stands at the intersection of experience and
                                    innovation. We comprehend the intricacies of the real estate
                                    market and harness the power of digitalization to simplify
                                    complex processes. Our expertise allows us to seamlessly
                                    translate real-world complexities into optimized, digital
                                    solutions, ensuring that the hard work is done for you.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    Empowering Every Step of Your Real Estate Journey
                                </h3>
                                <p className="mt-[10px]">
                                    Recognizing the diverse needs of our clients and partners, we
                                    strive to provide access to precise and timely information.
                                    Whether you're buying, selling, renting, exploring commercial
                                    opportunities, or seeking inspired interior designs, HomePulse
                                    ensures that everyone involved in a project receives tailored
                                    insights.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    Your Focus, Our Expertise
                                </h3>
                                <p className="mt-[10px]">
                                    At HomePulse, we empower you to focus on what matters most to
                                    you – building your dreams. Let us handle the intricacies of
                                    the real estate process while you concentrate on creating your
                                    perfect space.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    Discover Modern Elegance
                                </h3>
                                <p>
                                    Our curated selection of modern houses reflects{" "}
                                    <span className="text-[#5b8181]">conteporary elegance</span>.
                                    With expert guidance from our team, you can not only{" "}
                                    <span className="text-[#5b8181]">find your ideal house</span>{" "}
                                    but also transform it into a stunning masterpiece of{" "}
                                    <span className="text-[#5b8181]">modern interior</span>{" "}
                                    design.
                                </p>
                                <p>
                                    Welcome to HomePulse, where your real estate journey becomes a
                                    seamless, personalized experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ServicesOutline />
                <div className="h-full w-full px-[6.5vw] pb-[2vh] bg-[#030718]">
                    <div className="text-offwhite py-[5vh] grid grid-flow-col grid-cols-3 grid-rows-[repeat(7,_minmax(0,_1fr))] items-center justify-center gap-5">
                        <div className="row-span-2">
                            <h2 className="text-3xl mb-5">Meet Our Team</h2>
                            <p>
                                Behind the success of HomePulse is a dedicated team of
                                professionals, each bringing unique expertise and passion to the
                                world of real estate. Get to know the individuals who make your
                                real estate journey a personalized and exceptional experience.
                            </p>
                        </div>
                        <div className="w-full h-full overflow-hidden relative bg-[#94949b] row-span-3 rounded-[3px]">
                            <Image
                                // boxSize='40px'
                                objectFit="cover"
                                loading="lazy"
                                src="./assets/team/DOmarketing.png"
                                alt="Director of Marketing"
                                className="w-full h-full transition-all ease-in-out duration-500 hover:scale-110"
                            />
                            <div className="absolute w-full left-0 bottom-0 p-5 bg-[rgba(0,_0,_0,_0.3)]">
                                <h4 className="text-lg">Chijioke Eze</h4>
                                <p className="text-sm">Director of Marketing</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-full h-full bg-[#94949b] col-start-2 row-start-2 row-span-3">
                            <Image
                                // boxSize='40px'
                                objectFit="cover"
                                loading="lazy"
                                src="./assets/team/CEO.png"
                                alt="Chief Executive Officer"
                                className="w-full h-full transition-all ease-in-out duration-500 hover:scale-110"
                            />
                            <div className="absolute w-full left-0 bottom-0 p-5 bg-[rgba(0,_0,_0,_0.3)]">
                                <h4>Samuel Oyenuga</h4>
                                <p>Chief Executive officer</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-full h-full bg-[#94949b] col-start-2 row-start-5 row-span-3">
                            <Image
                                // boxSize='40px'
                                objectFit="cover"
                                loading="lazy"
                                src="./assets/team/CTO.png"
                                alt="Chief of Operations"
                                className="w-full h-full transition-all ease-in-out duration-500 hover:scale-110"
                            />
                            <div className="absolute w-full left-0 bottom-0 p-5 bg-[rgba(0,_0,_0,_0.3)]">
                                <h4>Olumide Adegoke</h4>
                                <p>Chief of Operations</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-full h-full bg-[#94949b] col-start-3 row-start-3 row-span-3">
                            <Image
                                // boxSize='40px'
                                objectFit="cover"
                                loading="lazy"
                                src="./assets/team/DOfinance.png"
                                alt="Director of Finance"
                                className="w-full h-full transition-all ease-in-out duration-500 hover:scale-110"
                            />
                            <div className="absolute w-full left-0 bottom-0 p-5 bg-[rgba(0,_0,_0,_0.3)]">
                                <h4>Chioma Okonkwo</h4>
                                <p>Director of Finance</p>
                            </div>
                        </div>
                        <div className="w-full h-full col-start-3 row-start-2 row-span-1">
                            <p>
                                Our team is committed to delivering unparalleled service, from
                                property experts guiding you through transactions to creative
                                minds shaping innovative solutions. We believe in building
                                lasting relationships and are excited to introduce you to the
                                people behind HomePulse.
                            </p>
                        </div>
                    </div>
                </div>
                <Partners />
                <Footer />
            </div>
        </>
    );
}
