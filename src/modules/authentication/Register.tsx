import Illustration from "../../components/Illustration";
import RegisterForm from "../../components/RegisterForm";

function Register() {
  return (
    <>
      <div className="flex flex-row">
        <Illustration isLogin={false} />
        <div className="w-full min-h-screen bg-[url('./assets/onboarding.jpg')] bg-cover bg-no-repeat bg-[50%_50%] md:bg-none md:h-screen md:min-h-[unset]">
          <div className="my-[auto] min-h-screen flex flex-col items-center justify-center gap-y-5 bg-black/[0.8] md:justify-center md:bg-[rgba(3,_7,_24,_0.8)] md:h-screen md:min-h-[unset]">
           <h1 className="mohave text-offwhite font-medium text-3xl mb-[2vh] relative after:content-[''] after:absolute after:bottom-[-5px] after:right-[-5px] after:block after:h-[50%] after:w-[30%] after:border-[#00bbba] after:border-dotted after:border-b-[1px] after:border-r-[1px] after:animate-[fillBorder_1s_linear] before:content-[''] before:absolute before:top-[-5px] before:left-[-5px] before:block before:h-[50%] before:w-[30%] before:border-[#00bbba] before:border-dotted before:border-t-[1px] before:border-l-[1px] before:animate-[fillBorder_1s_linear] md:mb-[10vh] md:text-5xl">
              HOME PJLSE
            </h1>
{/*             <p className="max-w-[80%] text-offwhite font-light text-base md:hidden">
              Capture your personal memories in a unique way, anywhere.
            </p> */}
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
