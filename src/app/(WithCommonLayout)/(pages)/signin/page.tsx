"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { RiKey2Fill } from "react-icons/ri";
import RegisterImage from "@/assets/image/register/register-2x.jpg";

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
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <RiKey2Fill className="transform text-lg -rotate-90 scale-x-[-1]" />
          <h1 className="text-2xl font-semibold text-[#8ba446]">Sign In</h1>
        </div>

        <p className="mb-6 text-sm text-gray-600">
          Please enter your username and password.{" "}
          <Link href="/join" className="text-[#8ba446] hover:underline">
            Join Us
          </Link>{" "}
          if you don&apos;t have an account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              User name
            </label>
            <input
              {...register("username", { required: "Username is required" })}
              id="username"
              className="border border-[#A9987E] max-w-xs bg-[#EFEBE2] rounded px-2 py-1"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#f9f7f4] focus:outline-none focus:ring-1 focus:ring-[#8ba446]"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

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
            <Link
              href="/forgot-password"
              className="text-sm text-[#8ba446] hover:underline"
            >
              Click here if you have lost your password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8ba446] text-white py-2 px-4 rounded-md hover:bg-[#7a9139] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ba446] transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>

      <div className="hidden lg:block fixed right-0 top-0 h-full w-1/3">
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
    </div>
  );
}
