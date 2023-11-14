import { Container } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

function Illustration({ isLogin }: { isLogin: boolean }) {
  return (
    <>
      <div className="hidden w-full h-screen text-offwhite bg-[url('./assets/onboarding.jpg')] bg-cover bg-no-repeat bg-[30%_50%] md:table xl:bg-[50%] ">
        <Container className="table-cell align-middle bg-black/[0.5]">
          <h2 className="mx-[5vw] mb-5 font-semibold text-3xl">
            Welcome to HomePulse!
          </h2>
          <p className="mx-[5vw] w-4/5 font-light text-xl">
            {isLogin
              ? "New to HomePulse? Join us to unlock a world of property possibilities and personalized real estate solutions."
              : "Log in to explore your personalized real estate journey and discover the perfect property. Your dream home awaits just a login away."}
          </p>
          <Text className="mx-[5vw]">
            {isLogin ? "Don't " : "Already "}
            have an account?
            <ChakraLink
              as={ReactRouterLink}
              to={isLogin ? "/register" : "/login"}
              color="#00bbba"
            >
              {isLogin ? " Sign Up" : " Log In"}
            </ChakraLink>
          </Text>
        </Container>
      </div>
    </>
  );
}

export default Illustration;
