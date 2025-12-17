"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 hidden transition-all duration-300 md:block ${
        isScrolled ? "bg-white py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" aria-label="Homepage" className="flex items-center">
          <Image
            src="/assets/svg/ic_logo.svg"
            alt="Logo"
            width={120}
            height={40}
            priority
            className="h-auto w-auto"
            onClick={() => router.push("/")}
          />
        </Link>

        {/* NAVIGATION */}
        <nav aria-label="Main navigation">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8 text-base font-medium">
              {["Home", "How it works", "Reviews", "Pricing", "Contact Us"].map(
                (item) => (
                  <NavigationMenuItem key={item}>
                    {item === "Reviews" ? (
                      <button
                        // onClick={() => {
                        //     const section = document.getElementById('testimonials');
                        //     section?.scrollIntoView({ behavior: 'smooth' });
                        // }}
                        onClick={() => {
                          router.push("/#testimonials");
                          setTimeout(() => {
                            const section =
                              document.getElementById("testimonials");
                            section?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="hover:text-primary cursor-pointer text-[18px] leading-[28px] font-medium text-[#5A5A5A] transition-colors"
                      >
                        {item}
                      </button>
                    ) : item === "How it works" ? (
                      <button
                      onClick={() => {
                          router.push("/#howitworks");
                          setTimeout(() => {
                            const section =
                              document.getElementById("howitworks");
                            section?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        // onClick={() => {
                        //   const section = document.getElementById("howitworks");
                        //   section?.scrollIntoView({ behavior: "smooth" });
                        // }}
                        className="hover:text-primary cursor-pointer text-[18px] leading-[28px] font-medium text-[#5A5A5A] transition-colors"
                      >
                        {item}
                      </button>
                    ) : item === "Home" ? (
                      <NavigationMenuLink
                        href={`/`}
                        className="hover:text-primary text-[18px] leading-[28px] font-medium text-[#5A5A5A] transition-colors"
                      >
                        {item}
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuLink
                        href={`/${item.toLowerCase()}`}
                        className="hover:text-primary text-[18px] leading-[28px] font-medium text-[#5A5A5A] transition-colors"
                      >
                        {item}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* ACTION BUTTON */}
        <div className="hidden md:block">
          <Button
            type="button"
            className="w-[200px]"
            onClick={() => window.open("https://dev.pperfectai.com", "_blank")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
