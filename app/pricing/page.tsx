"use client";
import Footer from "@/components/footer";
import { SiteHeader } from "@/components/header";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PlanDetails, plans } from "@/constants/Constants";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [duration, setDuration] = useState("Monthly");
  const router = useRouter();
  const tabClasses =
    "cursor-pointer w-[180px] h-[36px] rounded-full flex-center";
  const popularClasses =
    "w-max rounded-sm small-medium px-2 py-1 bg-linear-to-tr from-blue-100 to-blue-300";
  const filteredPlans = plans.find((plan) => plan[duration])?.[duration] || [];
  return (
    <>
      {/* <SiteHeader /> */}
      <div className="flex-center flex w-full">
        <div className="flex flex-col items-center gap-3">
          <div className="mt-15 mb-8">
            <Image
              src="/logo.png"
              height={50}
              width={53}
              alt="Logo"
              className="cursor-pointer"
              // onClick={() => router.push("/")}
            />{" "}
          </div>
          <h1 className="heading">Select your Plan</h1>
          <p className="planSubhead text-grey-200">
            Choose the plan that best fits your needs and supports your goals.
          </p>
          <div className="my-4 flex">
            <div
              className={`${tabClasses} ${duration === "Monthly" ? "bg-black-100 text-white" : "text-grey-200 bg-white"}`}
              onClick={() => setDuration("Monthly")}
            >
              Monthly
            </div>
            <div
              className={`${tabClasses} ${duration === "Annual" ? "bg-black-100 text-white" : "text-grey-200 bg-white"}`}
              onClick={() => setDuration("Annual")}
            >
              Annual
            </div>
          </div>
          <div className="mb-20 flex flex-wrap justify-center gap-6">
            {filteredPlans.map((uniqueItem, idx) => {
              return Object.entries(uniqueItem).map(([key, value]) => {
                const plan = value as PlanDetails;

                return (
                  <div key={`${key}-${idx}`} className="w-[280px]">
                    <div className="text-back flex flex-col">
                      <div className="to-black-100 flex flex-col gap-3 rounded-2xl bg-linear-to-tr from-blue-100 p-6">
                        {plan.price === "15.99" || plan.price === "599.99" ? (
                          <div className={popularClasses}>
                            Best for sales teams
                          </div>
                        ) : plan.price === "19.99" ||
                          plan.price === "199.99" ? (
                          <div className={popularClasses}>Most popular</div>
                        ) : null}
                        <div className="plans-heading">{key}</div>
                        <div className="plans-price">
                          {`$${plan.price}`}
                          <span className="plans-subheading">
                            {plan.price === "15.99"
                              ? "/month/per person"
                              : plan.price === "599.99"
                                ? "/year/per person"
                                : "/year"}
                          </span>
                        </div>
                        <div className="plans-subheading -mt-2">
                          {plan.detail}
                        </div>
                      </div>
                      <div className="rounded-b-2xl bg-white pb-8">
                        {plan.features.map((feature, fidx) => {
                          const [featuresKey, featuresVal]: [string, string] =
                            Object.entries(feature)[0];
                          return (
                            <div
                              key={fidx}
                              className="flex flex-col gap-2 px-6 py-2"
                            >
                              <h2 className="text-black-100 plans-heading">
                                {featuresKey}
                              </h2>
                              <p className="text-grey-200 plans-subheading">
                                {featuresVal}
                              </p>
                              <hr className="border-t border-blue-100" />
                            </div>
                          );
                        })}
                        <div className="mt-6 flex justify-center">
                          <Button className="h-[48px] w-[200px]">
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </div>{" "}
         
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
