"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  
  return (
    <footer className="bg-[#231F20] px-6 lg:px-0">
      <div className="container mx-auto px-4 py-17">
        <div className="grid grid-cols-2 items-center gap-3 border-b border-white pb-10">
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-[20px] leading-[30px] font-medium text-white md:text-[32px] md:leading-[46px]">
              Ready to Deliver the Perfect Pitch?
            </h2>
            <p className="text-[12px] leading-[unset] font-normal text-[#AAAAAA] sm:leading-[32px] sm:font-medium md:text-[20px]">
              Tailor your strategy to meet the specific needs of your target
              market.
            </p>
          </div>
          <div className="flex justify-end">
            <Button
              type="button"
              variant="secondary"
              className="sm:w-[168px]"
              onClick={() =>
                window.open("https://dev.pperfectai.com", "_blank")
              }
            >
              Get started
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center pt-10 lg:grid-cols-2">
          <Image
            src="/assets/svg/ic_logo_white.svg"
            width={208}
            height={40}
            className="cursor-pointer"
            alt="logo"
            // onClick={() => {
            //   const section = document.getElementById("home");
            //   section?.scrollIntoView({ behavior: "smooth" });
            // }}
            onClick={() => router.push("/")}
          />
          <ul className="mt-6 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center sm:gap-15 lg:mt-0 lg:justify-end xl:gap-20">
            <li
              className="cursor-pointer text-[12px] leading-[unset] font-normal text-white sm:text-[16px] sm:leading-[20px] sm:font-semibold"
              onClick={() => {
                const section = document.getElementById("howitworks");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How it works
            </li>
            <li
              className="cursor-pointer text-[12px] leading-[unset] font-normal text-white sm:text-[16px] sm:leading-[20px] sm:font-semibold"
              onClick={() => {
                const section = document.getElementById("testimonials");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Reviews
            </li>
            <li className="cursor-pointer text-[12px] leading-[unset] font-normal text-white sm:text-[16px] sm:leading-[20px] sm:font-semibold"   onClick={() => router.push("/pricing")}>
              Pricing
            </li>
            <li className="cursor-pointer text-[12px] leading-[unset] font-normal text-white sm:text-[16px] sm:leading-[20px] sm:font-semibold">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
