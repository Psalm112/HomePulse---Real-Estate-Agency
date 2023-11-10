import { Link } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Iframe from "react-iframe";

export default function Contact() {
    return (
        <>
            <NavigationBar
                home={false}
                properties={false}
                services={false}
                about={false}
                contact={true}
            />
            <div className="w-full h-[50vh] px-[6.5vw] pb-[5vh] bg-[#030718]">
                <div className="relative h-full bg-[url('./assets/contactus.jpg')] bg-cover bg-no-repeat bg-[50%_50%] flex flex-col items-center justify-center">
                    <h1 className="text-4xl drop-shadow-[-7px_-7px_4px_rgba(0,0,0,0.5)]">
                        Contact Us
                    </h1>
                    {/* <p className="text-center w-[60%]">We are here to provide you with comprehensive information, address any inquiries you may have, and craft effective solutions tailored to meet your unique real estate needs. Feel free to reach out – our dedicated team is ready to assist you on your real estate journey.</p> */}
                </div>
            </div>
            <div className="w-full h-full px-[6.5vw] py-[5vh] bg-[#f9f9f9]">
                <div>
                    <h2 className="text-3xl">
                        Contact Form
                    </h2>
                </div>
            </div>
            <div className="w-full h-full px-[6.5vw] py-[5vh] bg-[#94949b]">
                <div className="grid grid-cols-2 grid-rows-2 gap-5 items-center justify-center">
                    <div>
                        <h3 className="text-lg font-medium">Corporate Headquarters</h3>
                        <p className="text-sm">
                            Corporate Headquarters
                            <br />
                            HomePlus
                            <br />
                            12 Palm Grove Avenue, Ikeja,
                            <br />
                            Lagos, Nigeria.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">General Contact</h3>
                        <p className="text-sm">
                            Toll-Free:{" "}
                            <Link
                                href="tel:8888994523"
                                className="border-offwhite border-b-[2px]"
                            >
                                888-899-4523
                            </Link>
                            <br />
                            Phone:{" "}
                            <Link
                                href="tel:7845892547"
                                className="border-offwhite border-b-[2px]"
                            >
                                784-589-2547
                            </Link>{" "}
                            <br />
                            Fax:{" "}
                            <Link
                                href="tel:7592651324"
                                className="border-offwhite border-b-[2px]"
                            >
                                759-265-1324
                            </Link>
                            <br />
                            Email:{" "}
                            <Link
                                href="mailto:office@homepulse.com"
                                className="border-offwhite border-b-[2px]"
                            >
                                office@homepulse.com
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Sales Info & Inquiries</h3>
                        <p className="text-sm">
                            Toll-Free:{" "}
                            <Link
                                href="tel:800838871"
                                className="border-offwhite border-b-[2px]"
                            >
                                800-838-871
                            </Link>
                            <br />
                            Email:{" "}
                            <Link
                                href="mailto:info@homepulse.com"
                                className="border-offwhite border-b-[2px]"
                            >
                                info@homepulse.com
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">International Sales</h3>
                        <p className="text-sm">
                            Email:{" "}
                            <Link
                                href="mailto:international@homepulse.com"
                                className="border-offwhite border-b-[2px]"
                            >
                                international@homepulse.com
                            </Link>
                            <br />
                            Phone:{" "}
                            <Link
                                href="tel:7845897455"
                                className="border-offwhite border-b-[2px]"
                            >
                                785-5897-455
                            </Link>{" "}
                            <br />
                            Schedule: Monday - Thursday 9:00 Am To 5:00 Pm GMT+1 | Friday 9:00
                            Am To 1:00 Pm GMT+1
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.925576740276!2d3.34137387513189!3d6.531083793461623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dd14b2e931f%3A0x431061ce1cbbae8d!2s12%20Palm%20Avenue%2C%20Mushin%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699570709672!5m2!1sen!2sng"
                    // width="640px"
                    // height="320px"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    // id=""
                    className="w-full h-[50vh] border-none"
                    display="block"
                    position="relative"
                />
            </div>
            <Footer />
        </>
    );
}
