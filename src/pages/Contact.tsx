import {
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Iframe from "react-iframe";
import NavigationBarSm from "../components/NavigationBarSm";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa6";
import Mortgage from "../components/Mortgage";

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
      <NavigationBarSm
        home={false}
        properties={false}
        services={false}
        about={false}
        contact={true}
      />
      <div className="w-full h-[50vh] px-[3vw] pb-[5vh] bg-[#030718] md:px-[6.5vw]">
        <div className="relative h-full bg-[url('./assets/contactus.jpg')] bg-cover bg-no-repeat bg-[50%_50%] flex flex-col items-center justify-center">
          <h1 className="text-4xl drop-shadow-[-7px_-7px_4px_rgba(0,0,0,0.5)]">
            Contact Us
          </h1>
          {/* <p className="text-center w-[60%]">We are here to provide you with comprehensive information, address any inquiries you may have, and craft effective solutions tailored to meet your unique real estate needs. Feel free to reach out – our dedicated team is ready to assist you on your real estate journey.</p> */}
        </div>
      </div>
      <div className="w-full h-full px-[3vw] py-[5vh] bg-[#f9f9f9] md:px-[6.5vw]">
        <form className="w-full">
          <h2 className="text-3xl">Contact Form</h2>
          <div className="grid grid-cols-1 grid-rows-2 gap-5 items-center justify-center sm:grid-cols-2 sm:grid-rows-1">
            <div>
              <label>
                Your Name
                <br />
                <InputGroup className="overflow-hidden">
                  <InputLeftElement pointerEvents="none" className="!h-full">
                    <FaUser />
                  </InputLeftElement>
                  <Input
                    size="lg"
                    type="text"
                    variant="unstyled"
                    placeholder="Phone number"
                    className="py-2 !bg-[rgba(3,_7,_24,_0.1)] !text-[#030718] border-[2px] border-transparent focus:border-[#030718] focus:!bg-transparent"
                  />
                </InputGroup>
              </label>
              <label>
                Mail
                <br />
                <InputGroup className="overflow-hidden">
                  <InputLeftElement pointerEvents="none" className="!h-full">
                    <FaEnvelope />
                  </InputLeftElement>
                  <Input
                    size="lg"
                    type="email"
                    variant="unstyled"
                    placeholder="Phone number"
                    className="py-2 !bg-[rgba(3,_7,_24,_0.1)] !text-[#030718] border-[2px] border-transparent focus:border-[#030718] focus:!bg-transparent"
                  />
                </InputGroup>
              </label>
              <label>
                Phone
                <br />
                <InputGroup className="overflow-hidden">
                  <InputLeftElement pointerEvents="none" className="!h-full">
                    <FaPhone />
                  </InputLeftElement>
                  <Input
                    size="lg"
                    type="email"
                    variant="unstyled"
                    placeholder="Phone number"
                    className="py-2 !bg-[rgba(3,_7,_24,_0.1)] !text-[#030718] border-[2px] border-transparent focus:border-[#030718] focus:!bg-transparent"
                  />
                </InputGroup>
              </label>
            </div>
            <div className="w-full h-full">
              <Textarea
                resize="none"
                variant="unstyled"
                placeholder="Here is a sample placeholder"
                className="!h-full w-full !bg-[rgba(3,_7,_24,_0.1)] !text-[#030718] !px-2 border-[2px] border-transparent focus:border-[#030718] focus:!bg-transparent"
              />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl">Services</h3>
            <RadioGroup
              defaultValue="sales"
              // onChange={ }
            >
              <Stack spacing={4} direction="row" className="!flex-wrap">
                <Radio value="sales">Property Sales</Radio>
                <Radio value="rentals">Property Rentals</Radio>
                <Radio value="commercial">Commercial Property</Radio>
                <Radio value="decor">Interior Design</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className="mx-auto mt-5 max-w-[200px]">
            <Input
              type="submit"
              className="!w-[100%] !bg-[#030718] !text-offwhite !text-center !border-[2px] !border-transparent !rounded-[3px] hover:!bg-[rgba(3,_7,_24,_0.1)] hover:!text-[#030718] hover:!border-[#030718]"
            />
          </div>
        </form>
      </div>
      <div className="w-full h-full px-[3vw] py-[5vh] bg-[#94949b] md:px-[6.5vw]">
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
              Toll-Free: <Link href="tel:8888994523">888-899-4523</Link>
              <br />
              Phone: <Link href="tel:7845892547">784-589-2547</Link> <br />
              Fax: <Link href="tel:7592651324">759-265-1324</Link>
              <br />
              Email:{" "}
              <Link href="mailto:office@homepulse.com">
                office@homepulse.com
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-left">
              Sales Info & Inquiries
            </h3>
            <p className="text-sm">
              Toll-Free: <Link href="tel:800838871">800-838-871</Link>
              <br />
              Email:{" "}
              <Link href="mailto:info@homepulse.com">info@homepulse.com</Link>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">International Sales</h3>
            <p className="text-sm">
              Email:{" "}
              <Link href="mailto:international@homepulse.com">
                international@homepulse.com
              </Link>
              <br />
              Phone: <Link href="tel:7845897455">785-5897-455</Link> <br />
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
      <Mortgage />
      <Footer />
    </>
  );
}
