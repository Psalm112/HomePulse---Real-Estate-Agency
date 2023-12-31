import { useState, Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

import { FaEye, FaEyeSlash, FaArrowCircleLeft } from "react-icons/fa";

type PasswordResetFormProps = {
  setIsOtp: Dispatch<SetStateAction<boolean>>;
  isOtp: boolean;
  setForgetPassword: Dispatch<SetStateAction<boolean>>;
  forgotPassword: boolean;
};

function PasswordResetForm({
  setIsOtp,
  isOtp,
  setForgetPassword,
  forgotPassword,
}: PasswordResetFormProps) {
  type Inputs = {
    mail: string;
    newPassword: string;
    confirmNewPassword: string;
    pin1: number;
    pin2: number;
    pin3: number;
    pin4: number;
  };
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!isOtp) {
      clearErrors();
      setIsOtp(true);
    } else {
      console.log(data);
      clearErrors();
      reset({
        mail: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setIsPasswordChanged(true);
      setTimeout(() => {
        setForgetPassword(!forgotPassword);
      }, 3000);
    }
  };

  const [confirmPassword, setConfirmPassword] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <div className="self-center w-[80%] md:w-[60%]">
        <Button
          variant="unstyled"
          color="#f9f9f9"
          leftIcon={<FaArrowCircleLeft />}
          onClick={() => {
            setForgetPassword(!forgotPassword);
            setIsOtp(false);
          }}
          className="!text-offwhite !font-thin !text-[12px]"
        >
          Go Back
        </Button>
        <h3 className="text-offwhite font-light text-xl ">Reset Password</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] relative flex flex-col items-center justify-center gap-y-5 md:w-[60%] xl:max-w-[50%]"
      >
        {!isOtp ? (
          <>
            <div className="w-full">
              <Input
                {...register("mail", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: `Please enter the email address connected to your account to receive a OTP`,
                  },
                })}
                placeholder="Email"
                size="lg"
                variant="unstyled"
                // type="email"
                autoComplete="email"
                className="!bg-black !w-full !mb-0.5 !rounded-md !py-3 !pl-4 !text-offwhite !outline-none !border-[1px] !border-transparent focus:!border-[#f9f9f9] "
              />
              {errors.mail && (
                <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                  {errors.mail.message}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <InputGroup size="md">
                <Input
                  {...register("newPassword", {
                    required: "Create a password",
                    minLength: {
                      value: 8,
                      message: `Your password should be at least 8 characters long`,
                    },
                  })}
                  variant="unstyled"
                  size="lg"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  autoComplete="new-password"
                  className="!bg-black !w-full !mb-0.5 !rounded-md !py-3 !pl-4 !text-offwhite !outline-none !border-[1px] !border-transparent focus:!border-[#f9f9f9] "
                />
                <InputRightElement width="4.5rem" className="!h-full">
                  <Button
                    h="1.75rem"
                    size="sm"
                    color="#f9f9f9"
                    bg="transparent"
                    onClick={handleClick}
                    className="hover:!bg-transparent"
                  >
                    {!show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.newPassword && (
                <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <InputGroup size="md">
                <Input
                  {...register("confirmNewPassword", {
                    required: "Enter the password again",
                  })}
                  onChange={(e) => {
                    if (getValues("newPassword") !== e.target.value) {
                      setConfirmPassword(true);
                      setError("confirmNewPassword", {
                        type: "custom",
                        message: `Make sure the input matches your new password`,
                      });
                    } else {
                      setConfirmPassword(false);
                      clearErrors("confirmNewPassword");
                    }
                  }}
                  variant="unstyled"
                  size="lg"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="confirm password"
                  autoComplete="new-password"
                  className="!bg-black !w-full !mb-0.5 !rounded-md !py-3 !pl-4 !text-offwhite !outline-none !border-[1px] !border-transparent focus:!border-[#f9f9f9] "
                />
                <InputRightElement width="4.5rem" className="!h-full">
                  <Button
                    h="1.75rem"
                    size="sm"
                    color="#f9f9f9"
                    bg="transparent"
                    onClick={handleClick}
                    className="hover:!bg-transparent"
                  >
                    {!show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* {errors.confirmNewPassword && ( */}
              <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                {errors.confirmNewPassword?.message}
              </p>
              {/* )} */}
            </div>
            <div>
              <p
                className={
                  isPasswordChanged
                    ? "text-offwhite font-light text-xs whitespace-pre-line"
                    : "hidden"
                }
              >
                Password reset succesfull, you will be redirected to the login
                page in a bit.
              </p>
              <HStack
                className={
                  !isPasswordChanged ? "justify-center w-full" : "!hidden"
                }
              >
                <PinInput variant="unstyled" otp>
                  <PinInputField
                    {...register("pin1", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                      // value: isSubmitSuccessful && "",
                    })}
                    className="!bg-black !max-w-[50px] !text-offwhite !text-center py-2 !border-[1px] !border-transparent focus:!border-[#f9f9f9]"
                  />
                  <PinInputField
                    {...register("pin2", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                    })}
                    className="!bg-black !max-w-[50px] !text-offwhite !text-center py-2 !border-[1px] !border-transparent focus:!border-[#f9f9f9]"
                  />
                  <PinInputField
                    {...register("pin3", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                    })}
                    className="!bg-black !max-w-[50px] !text-offwhite !text-center py-2 !border-[1px] !border-transparent focus:!border-[#f9f9f9]"
                  />
                  <PinInputField
                    {...register("pin4", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                    })}
                    className="!bg-black !max-w-[50px] !text-offwhite !text-center py-2 !border-[1px] !border-transparent focus:!border-[#f9f9f9]"
                  />
                </PinInput>
              </HStack>
              <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                {errors.pin1?.message ||
                  errors.pin2?.message ||
                  errors.pin3?.message ||
                  errors.pin4?.message}
              </p>
            </div>
          </>
        )}
        <Input
          bg="#00bbba"
          size="lg"
          variant="unstyled"
          type="submit"
          value={!isOtp ? "Send OTP" : "Reset Password"}
          // onClick={handleOtp}
          className=" w-[70%] text-center py-2 rounded-md font-medium"
          disabled={isOtp ? confirmPassword : false}
        />
        in
      </form>
    </>
  );
}
export default PasswordResetForm;
