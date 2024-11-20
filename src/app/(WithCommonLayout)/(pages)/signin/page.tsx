"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { RiKey2Fill } from "react-icons/ri";
import RegisterImage from "@/assets/image/about/about-2x.jpg";

interface FormInputs {
  username: string;
  password: string;
  remember: boolean;
}

export default function Component() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-5">
      <div className="flex items-center justify-between">
        <div className="w-full px-5 mb-5">
          <div className="flex items-center gap-2 mb-6">
            <RiKey2Fill className="transform text-lg -rotate-90 scale-x-[-1]" />
            <h1 className="text-2xl font-semibold text-[#8ba446]">Sign In</h1>
          </div>

          <p className="mb-6 text-sm text-gray-600">
            Please enter your username and password.{" "}
            <Link href="/register" className="text-[#8ba446] hover:underline">
              Join Us
            </Link>{" "}
            if you don&apos;t have an account.
          </p>
          <div>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                User name
              </label>
              <input
                {...register("username", { required: "Username is required" })}
                id="username"
                className="border border-[#A9987E] max-w-sm w-full bg-[#EFEBE2] rounded px-2 py-1"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                className="border border-[#A9987E] max-w-sm w-full bg-[#EFEBE2] rounded px-2 py-1"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-[#8ba446] block mb-5 hover:underline"
            >
              Click here if you have lost your password
            </Link>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  {...register("remember")}
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[#8ba446] focus:ring-[#8ba446] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-full">
          <div className="lg:w-72 flex justify-end">
            <Image
              priority
              width={300}
              height={400}
              src={RegisterImage}
              alt="Mascot illustration"
              className="w-full min-h-[400px] h-auto"
            />
          </div>
        </div>
      </div>
      <div className=" px-5 py-2 mb-5 bg-primary-green/20">
        <button
          type="submit"
          className=" bg-[#769656] disabled:bg-[#769656]/70 cursor-pointer disabled:cursor-not-allowed h-8 w-fit font-bold text-white rounded px-2 hover:bg-[#658546] transition-colors"
        >
          Join Us
        </button>
      </div>
    </form>
  );
}
