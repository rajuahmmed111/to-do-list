"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import RegisterImage from "@/assets/image/register/register-2x.jpg";
import { FaCircleInfo } from "react-icons/fa6";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { IoReloadCircle } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

type FormData = {
  username: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  interests: string;
  phoneNumber: string;
  terms: boolean;
  privacy: boolean;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [captcha, setCaptcha] = useState("");
  const [captchaErr, setCaptchaErr] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const [value, setValue] = useState<any>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", { phoneNumer: value, ...data });
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  // Function to generate a random CAPTCHA string
  function generateCaptcha(): string {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // Function to verify the CAPTCHA
  const handleVerify = () => {
    if (userInput === captcha) {
      setIsVerified(true);
      setCaptchaErr("");
    } else {
      setIsVerified(false);
      setCaptchaErr("Incorrect CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha()); // Generate a new CAPTCHA
      setUserInput(""); // Clear the input
    }
  };

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 pb-5">
        <div className="flex p-5 flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-[#769656] text-2xl font-medium mb-2">
              Create a New Account
            </h1>
            <p className=" mb-6">
              Join us to connect with the community and with friends, share
              photos and create your own profile.
            </p>

            <div className="space-y-4">
              <div className="bg-[#669A98] flex gap-2 items-center text-white py-1 px-2 text-sm">
                <FaCircleInfo />
                Looking for a Club/Chaser/Bear community? Check out our
                brother-site Chasabl.
              </div>
              <div className="bg-red-500 flex gap-2 items-center text-white py-1 px-2 text-sm">
                <FaCircleInfo />
                Looking for a straight feederism community? Check out our
                sister-site Feabie.
              </div>
            </div>

            <div>
              <label className="block  mb-1">User name</label>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              />
              {errors.username && (
                <div className="text-red-500 text-sm">
                  {errors.username.message}
                </div>
              )}
            </div>

            <div>
              <label className="block  mb-1">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              />
              {errors.email && (
                <div className="text-red-500 text-sm">
                  {errors.email.message}
                </div>
              )}
              <p className="text-sm  mt-1">
                Note: your email will remain private and will not show up on
                your profile.
              </p>
            </div>

            <div>
              <label className="block  mb-1">Date of Birth</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  {...register("dateOfBirth", {
                    required: "Birth month is required",
                  })}
                  className="border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
                ></input>
              </div>
              {errors.dateOfBirth && (
                <div className="text-red-500 text-sm">
                  All date of birth fields are required
                </div>
              )}
            </div>

            <div>
              <label className="block  mb-1">Gender</label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              >
                <option value="">Pick your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="text-red-500 text-sm">
                  {errors.gender.message}
                </div>
              )}
            </div>

            <div>
              <label className="block  mb-1">Interested in</label>
              <select
                {...register("interests", {
                  required: "Please select an interest",
                })}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              >
                <option value="">Select items that apply</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              {errors.interests && (
                <div className="text-red-500 text-sm">
                  {errors.interests.message}
                </div>
              )}
            </div>

            <div>
              <label className="block  mb-1">Phone Number</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
                onChange={setValue}
              />
              {!value && (
                <div className="text-red-500 mt-2 text-sm">
                  Phone number is required
                </div>
              )}
              <p className="text-sm  mt-1">
                We&#39;ll send you a text message (SMS) with a verification code
                needed to create your account. This step is required so we can
                better protect our users, deny entry to bad actors and prevent
                duplicate accounts. Your phone number will never be visible to
                other users.
              </p>
            </div>

            <div className=" mt-10 mb-5 space-y-4">
              {/* CAPTCHA Display */}
              <div className="flex gap-2  items-center">
                <div
                  aria-readonly
                  className="text-2xl w-fit  italic font-ubuntu select-none cursor-not-allowed font-bold tracking-widest bg-gray-200 py-2 px-4 rounded-md"
                >
                  {captcha}
                </div>
                {!isVerified && (
                  <div
                    className="cursor-pointer"
                    onClick={() => setCaptcha(generateCaptcha())}
                  >
                    <IoReloadCircle className="text-primary-green text-3xl" />
                  </div>
                )}
              </div>

              {/* Input Field and Button */}
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    disabled={isVerified}
                    placeholder="Enter CAPTCHA"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="border select-none border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="button"
                    onClick={handleVerify}
                    disabled={isVerified}
                    className="bg-green-500 h-10 w-20 text-white font-semibold px-4 flex items-center justify-center py-2 rounded-md hover:bg-green-600 disabled:bg-green-300 transition"
                  >
                    {isVerified ? (
                      <span className="text-white font-semibold">
                        <FaCheck />
                      </span>
                    ) : (
                      "Verify"
                    )}
                  </button>
                </div>
                {captchaErr && (
                  <div className="text-red-500 mt-1 text-xs">{captchaErr}</div>
                )}
              </div>

              {/* Verified Message */}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h2 className="font-bold mb-2">Terms and Conditions of Use</h2>
              <p className="text-xs  mb-4">
                GROKIO COMMUNITIES, LLC (&#34;GROKIO&#34;) IS WILLING TO GRANT
                YOU RIGHTS TO ESTABLISH AN ACCOUNT AND TO USE THE SERVICES
                PROVIDED BY OUR APP, WEBSITES AND OTHER TECHNOLOGICAL PLATFORMS
                UNDER OUR CONTROL, ONLY UPON THE CONDITION THAT YOU ACCEPT ALL
                OF THE TERMS CONTAINED IN THE TERMS & CONDITIONS OF USE, PRIVACY
                POLICY AND COMMUNITY CONDUCT RULES. PLEASE READ THE TERMS
                CAREFULLY. BY SELECTING &#34;I ACCEPT&#34; BELOW, YOU INDICATE
                YOUR AGREEMENT WITH THEM. IF YOU ARE ENTERING INTO THIS
                AGREEMENT ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY OR
                PERSON, YOUR ACCEPTANCE REPRESENTS THAT YOU HAVE THE AUTHORITY
                TO BIND SUCH ENTITY OR PERSON TO THESE TERMS. IF YOU DO NOT
                AGREE WITH THESE TERMS, OR IF YOU DO NOT HAVE THE AUTHORITY TO
                BIND YOUR ENTITY OR PERSON, THEN YOU ARE PROHIBITED FROM
                ESTABLISHING AN ACCOUNT OR USING OR ACCESSING THE SERVICES
                PROVIDED BY GROKIO. YOUR FAILURE TO ABIDE BY THE TERMS &
                CONDITIONS AND COMMUNITY CONDUCT RULES SHALL RESULT IN THE
                DELETION OF YOUR ACCOUNT AND A PROHIBITION OF FURTHER USE OF OR
                ACCESS TO GROKIO SITES, APPS AND TECHNOLOGICAL PLATFORMS.
              </p>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                  className="mt-1"
                />
                <label className="text-sm ">
                  I Accept the Terms & Conditions of Use, Privacy Policy and
                  Community Conduct Rules
                </label>
              </div>
              {errors.terms && (
                <div className="text-red-500 text-sm">
                  {errors.terms.message}
                </div>
              )}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  {...register("privacy", {
                    required: "You must accept the usecase",
                  })}
                  className="mt-1"
                />
                <label className="text-sm ">
                  I understand that this site is for personal use only and that
                  use of the site for business or research purposes is strictly
                  prohibited
                </label>
              </div>
              {errors.privacy && (
                <div className="text-red-500 text-sm">
                  {errors.privacy.message}
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-72">
            <Image
              priority
              width={300}
              height={300}
              src={RegisterImage}
              alt="Mascot illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className=" px-5 py-2 mb-5 bg-primary-green/20">
          <button
            title={!isVerified ? "Verify captcha" : "Submit your application"}
            disabled={!isVerified}
            type="submit"
            className=" bg-[#769656] disabled:bg-[#769656]/70 cursor-pointer disabled:cursor-not-allowed h-8 w-fit font-bold text-white rounded px-2 hover:bg-[#658546] transition-colors"
          >
            Join Us
          </button>
        </div>
      </form>
    </div>
  );
}
