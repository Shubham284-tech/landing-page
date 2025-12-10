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

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed hidden md:block inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" aria-label="Homepage" className="flex items-center">
                    <Image
                        src="/assets/svg/ic_logo.svg"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                        className="h-auto w-auto"
                    />
                </Link>

                {/* NAVIGATION */}
                <nav aria-label="Main navigation">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-8 text-base font-medium">
                            {["Home", "About", "Services", "Contact"].map((item) => (
                                <NavigationMenuItem key={item}>
                                    <NavigationMenuLink
                                        href={`/${item.toLowerCase()}`}
                                        className="hover:text-primary transition-colors text-[#5A5A5A] font-medium text-[18px] leading-[28px]"
                                    >
                                        {item}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* ACTION BUTTON */}
                <div className="hidden md:block">
                    <Button type="button" className="w-[200px]">Get Started</Button>
                </div>
            </div>
        </header>
    );
}
