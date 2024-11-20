"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import RegisterImage from "@/assets/image/register/register-2x.jpg";
import { FaCircleInfo } from "react-icons/fa6";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

type FormData = {
  username: string;
  email: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
  gender: string;
  interests: string;
  phoneNumber: string;
  terms: boolean;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [value, setValue] = useState<any>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", { phoneNumer: value, ...data });
  };

  console.log("Form Errors:", errors);

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-[#769656] text-2xl font-medium mb-2">
            Create a New Account
          </h1>
          <p className=" mb-6">
            Join us to connect with the community and with friends, share photos
            and create your own profile.
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

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div>
              <label className="block  mb-1">User name</label>
              <input
                type="text"
                {...register("username", { required: true })}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              />
            </div>

            <div>
              <label className="block  mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              />
              <p className="text-sm  mt-1">
                Note: your email will remain private and will not show up on
                your profile.
              </p>
            </div>

            <div>
              <label className="block  mb-1">Date of Birth</label>
              <div className="flex gap-2">
                <select
                  {...register("birthMonth")}
                  className="border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
                >
                  <option value="January">January</option>
                  {/* Add other months */}
                </select>
                <select
                  {...register("birthDay")}
                  className="border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
                >
                  <option value="1">1</option>
                  {/* Add other days */}
                </select>
                <select
                  {...register("birthYear")}
                  className="border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
                >
                  <option value="1900">1900</option>
                  {/* Add other years */}
                </select>
              </div>
            </div>

            <div>
              <label className="block  mb-1">Gender</label>
              <select
                {...register("gender")}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              >
                <option value="">Pick your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block  mb-1">Interested in</label>
              <select
                {...register("interests")}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
              >
                <option value="">Select items that apply</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block  mb-1">Phone Number</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                className="w-full border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
                onChange={setValue}
              />

              <p className="text-sm  mt-1">
                We&#39;ll send you a text message (SMS) with a verification code
                needed to create your account. This step is required so we can
                better protect our users, deny entry to bad actors and prevent
                duplicate accounts. Your phone number will never be visible to
                other users.
              </p>
            </div>

            <div>
              <label className="block  mb-1">
                Verify that you are not a machine
              </label>
              <div className="border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded p-42bg-g1ay-50">
                [reCAPTCHA placeholder]
              </div>
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
                  {...register("terms", { required: true })}
                  className="mt-1"
                />
                <label className="text-sm ">
                  I Accept the Terms & Conditions of Use, Privacy Policy and
                  Community Conduct Rules
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#769656] text-white rounded py-2 px-4 hover:bg-[#658546] transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>

        <div className="lg:w-72">
          <Image
            width={300}
            height={300}
            src={RegisterImage}
            alt="Mascot illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
