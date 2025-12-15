import Image from "next/image";
import { Button } from "../ui/button";

export default function Footer(){
    return<footer className="bg-[#231F20] px-6 lg:px-0">
      <div className="container px-4 mx-auto py-17">
        <div className="grid grid-cols-2 border-b border-white items-center pb-10 gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-white font-medium text-[20px] md:text-[32px] leading-[30px] md:leading-[46px]">Ready to Deliver the Perfect Pitch?</h2>
            <p className="font-normal sm:font-medium text-[12px] md:text-[20px] leading-[unset] sm:leading-[32px] text-[#AAAAAA]">Tailor your strategy to meet the specific needs of your target market.</p>
          </div>
          <div className="flex justify-end">
            <Button type="button" variant="secondary" className="sm:w-[168px]">
              Get started
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-10">
          <Image src='/assets/svg/ic_logo_white.svg' width={208} height={40} alt="logo" />
          <ul className="flex-col sm:flex-row flex items-start sm:items-center justify-start mt-6 lg:mt-0 lg:justify-end gap-4 sm:gap-15 xl:gap-20">
            <li className="text-white font-normal sm:font-semibold text-[12px] leading-[unset] sm:text-[16px] sm:leading-[20px]">How it works</li>
            <li className="text-white font-normal sm:font-semibold text-[12px] leading-[unset] sm:text-[16px] sm:leading-[20px]">Reviews</li>
            <li className="text-white font-normal sm:font-semibold text-[12px] leading-[unset] sm:text-[16px] sm:leading-[20px]">Pricing</li>
            <li className="text-white font-normal sm:font-semibold text-[12px] leading-[unset] sm:text-[16px] sm:leading-[20px]">Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
}