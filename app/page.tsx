"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircleCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/header";
import Footer from "@/components/footer";
const faqs = [
  {
    q: "Is there a free trial available?",
    a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    q: "Can I customize the AI’s recommendations to fit my sales strategy?",
    a: "Yes! Before each role-play, you’ll have the option to upload PDFs or enter relevant information about your company’s sales process, pitch framework, or product details. The AI uses that input to tailor the experience to your specific strategy — so you’re not just practicing sales, you’re practicing your sales.",
  },
  {
    q: "How long does it take to see results with Pitch Perfect AI?",
    a: "You’ll start seeing results after just one role play. The moment you hear clear, specific feedback on how to improve — whether it’s objection handling, tonality, or changing your discovery questions — you’ll know exactly what to tweak. And when you take that feedback, apply it, and run it back? That’s when the real growth happens. It’s like having a private coach you can revisit anytime.",
  },
];

export default function Home() {
  return (
    <>
    <SiteHeader />
      <div className="relative min-h-screen overflow-hidden pt-8 before:absolute before:inset-0 before:-z-1 before:h-full before:bg-[url('/assets/img/ic_bg_sales_sec.png')] before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] md:pt-[60px]">
        <Image
          src={"/assets/svg/ic_logo_small.svg"}
          className="m-auto cursor-pointer"
          width={43}
          height={43}
          alt="logo"
           onClick={() => {
              const section = document.getElementById("home");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
        />
        <section id="home" className="m-auto max-w-[848px] px-8 pt-8 text-center md:px-0 md:pt-[60px]">
          <div className="mx-auto mb-2 flex max-w-[190px] items-center justify-center rounded-[4px] bg-[linear-gradient(150.95deg,rgba(35,31,32,0.04)_-9.16%,rgba(45,169,223,0.04)_80.66%)]">
            <Image
              src={"/assets/svg/ic_ai_pitches.svg"}
              width={22}
              height={20}
              alt="AI-Powered Pitches"
            />
            <p className="font-acumin bg-[linear-gradient(214.29deg,#231F20_-3.01%,#2DA9DF_103.43%)] bg-clip-text text-center text-[16px] leading-6 font-medium tracking-normal text-transparent">
              AI-Powered Pitches
            </p>
          </div>
          <h1 className="mb-3 text-center text-[36px] font-semibold text-[#231F20] md:text-[36px] md:text-[48px]">
            Salespeople! <br></br> Stop practicing on your prospects
          </h1>
          <p className="mb-12 text-center text-[12px] leading-[22px] font-medium tracking-normal text-[#5A5A5A] md:text-[18px] md:leading-[28px]">
            Practice your sales pitch in with a custom tailored AI buyer that
            talks back — then get instant feedback to sharpen your skills and
            close with confidence. The AI sales role-play platform that helps
            you practice your pitch, overcome objections, and master your
            delivery — before the real deal.
          </p>
          <Button variant="secondary" type="button" className="w-[200px]"  onClick={() =>
                window.open("https://dev.pperfectai.com", "_blank")
              }>
            Try a Pitch Now
          </Button>
        </section>
        <section className="relative min-h-screen overflow-hidden pt-[60px]">
          <Carousel
            opts={{
              align: "start",
            }}
            // orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="ml-[10%] w-[100%] md:ml-[-20%] md:w-[140%]">
              {[1, 2, 3, 4, 5].map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-[70%] px-4 md:basis-[33%]"
                >
                  <div className="rounded-xl shadow-[0_0_15px_0_#00000040]">
                    <Image
                      src="/assets/img/ic_dashboard.png"
                      alt="dashboard_1"
                      width={660}
                      height={387}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="grid grid-cols-1 pt-15 md:pt-30 lg:grid-cols-2">
            <div className="flex flex-col gap-0 md:gap-20">
              <div className="mx-auto w-full px-6 sm:max-w-[650px] md:ps-0 lg:max-w-[526px]">
                <h2 className="text-[36px] font-semibold text-[#1375BC] md:text-[48px]">
                  Sales leaders, you’re measuring the wrong metrics!
                </h2>

                <p className="text-[16px] leading-[28px] font-semibold text-[#231F20] md:text-[24px] md:leading-[40px]">
                  Let’s help you fix that
                </p>

                <p className="mt-4 text-[12px] leading-[22px] font-medium text-[#5A5A5A] md:text-[20px] md:leading-[32px]">
                  Get a clear view of your team’s real-time pitch activity,
                  performance scores, and progress. See how many reps are
                  actually practicing, how well they’re handling objections, and
                  dive into each pitch with detailed feedback — all from one
                  powerful dashboard.
                </p>
              </div>
              <Image
                src="/assets/img/ic_sales_mobile.png"
                width={620}
                height={405}
                className="block w-full lg:hidden"
                alt="sales mobile"
              />
              <div className="relative flex hidden justify-center lg:block">
                <Image
                  width={1394}
                  height={930}
                  src="/assets/img/ic_mac_sales.png"
                  alt="Team Dashboard Laptop"
                  className="w-[120%] max-w-[120%] relative z-1"
                />
              </div>
            </div>
            <div className="relative flex hidden justify-center pt-15 lg:block lg:justify-end">
              <Image
                width={1920}
                height={2552}
                src="/assets/img/ic_sales_dashboard.png"
                alt="Member Profile Dashboard"
                className="w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-15 overflow-hidden bg-white py-15 lg:gap-20 lg:py-32">
        <div id="howitworks" className="m-auto max-w-[768px] px-8 text-center lg:px-0">
          <span className="text-sm leading-[20px] font-semibold text-[#1375BC] md:text-base">
            Features
          </span>
          <h2 className="mb-2 text-[28px] leading-[34px] font-medium text-[#231F20] md:mb-4 md:text-[32px] md:leading-[46px]">
            Build the exact pitch scenario you want—down to your buyer’s
            persona, industry, and difficulty level
          </h2>
          <p className="text-sm leading-6 font-medium text-[#5A5A5A] md:text-base">
            Struggling to craft the perfect pitch? Our AI-driven platform
            analyzes your goals,audience, and industry to generate tailored,
            high-converting pitches—so you can focus on closing deals.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="px-8 lg:ps-22">
            <p className="text-sm leading-6 font-medium text-[#5A5A5A] md:text-base">
              Step 01
            </p>
            <h3 className="mt-3 text-[28px] leading-[34px] font-medium text-[#231F20] md:text-[32px] md:leading-[46px]">
              Select Your Target Audience: B2B or B2C
            </h3>
            <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={23}
                  height={23}
                />
                Identify whether your product or service is tailored for
                businesses (B2B) or individual consumers (B2C).
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Understanding your target audience helps refine your strategy
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Customize your offerings to meet the unique needs of businesses
                or end users.
              </li>
            </ul>
          </div>
          <div className="relative lg:mt-0">
            <div className="mr-auto w-full">
              <div className="flex flex-col gap-12 rounded-[0px] border border-[#2DA9DF80] bg-[#F3F8FC] p-12 opacity-100 shadow-[0px_0px_30px_0px_#2DA9DF1A] lg:rounded-l-3xl">
                <Image
                  src={"/assets/svg/ic_logo_small.svg"}
                  className="m-auto"
                  width={43}
                  height={43}
                  alt="logo"
                />
                <h4 className="text-center text-[23.38px] leading-[33.6px] font-medium">
                  Select your target buyer
                </h4>
                <div className="mx-auto grid max-w-[338px] grid-cols-2 gap-6 pb-12">
                  <div className="gap-[7.3px] rounded-[17.53px] border-[0.73px] border-[#2DA9DF80] bg-white p-[11.69px] text-center">
                    <Image
                      src={"/assets/svg/ic_business_consumer.svg"}
                      className="m-auto"
                      width={146}
                      height={146}
                      alt="Business to Consumer"
                    />
                    <p className="pt-[11.69px] text-[11.69px] leading-[17.53px] font-medium">
                      Business to Consumer
                    </p>
                  </div>

                  <div className="gap-[7.3px] rounded-[17.53px] border-[0.73px] border-[#2DA9DF80] bg-white p-[11.69px] text-center">
                    <Image
                      src={"/assets/svg/ic_business_to_business.svg"}
                      className="m-auto"
                      width={146}
                      height={146}
                      alt="Business to Consumer"
                    />
                    <p className="pt-[11.69px] text-[11.69px] leading-[17.53px] font-medium">
                      Business to Business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1 lg:mt-0">
            <div className="flex flex-col gap-12 rounded-[0px] border border-[#2DA9DF80] bg-[#F3F8FC] p-12 opacity-100 shadow-[0px_0px_30px_0px_#2DA9DF1A] lg:rounded-r-3xl">
              <Image
                src={"/assets/svg/ic_logo_small.svg"}
                className="m-auto"
                width={43}
                height={43}
                alt="logo"
              />
              <div className="flex items-center justify-between">
                <h4 className="text-center text-[23.38px] leading-[33.6px] font-medium">
                  Let’s build your buyer personal
                </h4>
                <span className="text-center text-[8.78px] leading-[13.18px] font-medium text-[#5A5A5A]">
                  skip
                </span>
              </div>
              <Image
                src={"/assets/svg/ic_ideal_customer.svg"}
                className="m-auto"
                width={461}
                height={494}
                alt="Business to Consumer"
              />
            </div>
          </div>
          <div className="order-1 flex flex-col px-8 lg:order-2 lg:ps-0">
            <p className="text-sm leading-6 font-medium text-[#5A5A5A] md:text-base">
              Step 02
            </p>
            <h3 className="mt-3 text-[28px] leading-[34px] font-medium text-[#231F20] md:text-[32px] md:leading-[46px]">
              Define Your Ideal Customer and Industry
            </h3>
            <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Identify the key characteristics of your target customer.
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Specify the industry they belong to for a more focused approach.
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Tailor your strategy to meet the specific needs of your target
                market.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="px-8 lg:ps-22">
            <p className="text-sm leading-6 font-medium text-[#5A5A5A] md:text-base">
              Step 03
            </p>
            <h3 className="mt-3 text-[28px] leading-[34px] font-medium text-[#231F20] md:text-[32px] md:leading-[46px]">
              Choose Your Difficulty Level and Start Your Pitch
            </h3>
            <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Select the challenge level that suits you best.
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Tailor your pitch based on the selected difficulty.
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Get ready to deliver a confident and impactful pitch.
              </li>
            </ul>
          </div>
          <div className="relative lg:mt-0">
            <div className="mr-auto w-full">
              <div className="flex flex-col gap-12 rounded-[0px] border border-[#2DA9DF80] bg-[#F3F8FC] p-0 sm:p-12 opacity-100 shadow-[0px_0px_30px_0px_#2DA9DF1A] lg:rounded-l-3xl">
                <Image
                  src={"/assets/img/ic_choose_levels.jpg"}
                  className="m-auto"
                  width={762}
                  height={472}
                  alt="Difficulty Level"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1 lg:mt-0">
            <div className="flex flex-col gap-12 rounded-[0px] border border-[#2DA9DF80] bg-[#F3F8FC] p-0 sm:p-12 opacity-100 shadow-[0px_0px_30px_0px_#2DA9DF1A] lg:rounded-r-3xl">
              <Image
                src={"/assets/img/ic_in_depth.jpg"}
                className="m-auto"
                width={762}
                height={506}
                alt="In-Depth Feedback"
              />
            </div>
          </div>
          <div className="order-1 flex flex-col px-8 lg:order-2 lg:ps-0">
            <p className="text-sm leading-6 font-medium text-[#5A5A5A] md:text-base">
              Step 04
            </p>
            <h3 className="mt-3 text-[28px] leading-[34px] font-medium text-[#231F20] md:text-[32px] md:leading-[46px]">
              Get In-Depth Feedback for Continuous Improvement
            </h3>
            <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Gain valuable insights to enhance your product or service.
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Identify strengths and areas for improvement through detailed
                analysis.
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 font-medium md:text-base">
                <CircleCheck
                  className="text-[#2DA9DF]"
                  width={17}
                  height={17}
                />
                Refine your strategy based on actionable feedback.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#231F20] p-15 md:p-24">
        <div className="container">
          <div className="m-auto max-w-[768px] text-center">
            <span className="text-sm leading-[20px] font-semibold text-[#1375BC] md:text-base">
              How it works
            </span>
            <h2 className="mt-2 mb-3 text-[28px] leading-[34px] font-medium text-white md:text-[32px] md:leading-[46px]">
              Give your Perfect Pitch Today!
            </h2>
            <p className="text-sm leading-6 font-medium text-[#F3F8FC] md:text-base">
              Discover how Pitch Perfect AI adapts to diverse customers and
              their needs
            </p>
          </div>
        </div>
      </section>
      <section id="testimonials" className="flex flex-col gap-[20px] px-6 pt-10 pb-20 md:p-20">
        <div className="m-auto max-w-[768px] text-center">
          <span className="text-sm leading-[20px] font-semibold text-[#1375BC] md:text-base">
            Testimonials
          </span>
          <h2 className="text-[28px] leading-[34px] font-medium text-[#231F20] md:text-[32px] md:leading-[46px]">
            Hear from the Perfect Pitchers!
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          // orientation="vertical"
          className="m-auto w-full max-w-[780px]"
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((item, i) => (
              <CarouselItem key={i}>
                <div className="text-center">
                  <Image
                    src="/assets/img/ic_dummy.jpg"
                    width={145}
                    height={144}
                    alt="Testimonials-profile"
                    className="m-auto rounded-full pb-4"
                  />
                  <p className="pb-2 text-[20px] leading-[32px] font-medium text-[#5A5A5A]">
                    Taylor S.
                  </p>
                  <p className="pb-4 text-[14px] leading-[20px] font-medium text-[#5A5A5A]">
                    Director of Sales
                  </p>
                  <p className="text-center text-[16px] leading-6 font-medium text-[#231F20]">
                    “Pitch Perfect AI completely changed the way I coach my
                    team. Before, I was spending hours trying to figure out why
                    certain reps weren&apos;t closing — was it their pitch,
                    their objection handling, their confidence? Now, with the
                    sales dashboard, I can instantly see who&apos;s actually
                    practicing, what they&apos;re struggling with, and where
                    they&apos;re improving. I don&apos;t have to run endless
                    role-plays or guess what&apos;s going wrong — the data tells
                    the story. Funny enough, I realized it wasn&apos;t the
                    number of prospect calls that predicted success — it was the
                    number of practice reps with Pitch Perfect AI. I really was
                    measuring the wrong metric.”
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-[unset] -bottom-[60px] left-[0px] h-[56px] w-[56px] border-[2px] border-[#2DA9DF80] text-[22px] text-[#2DA9DF] lg:-left-[100px] [&_svg:not([class*='size-'])]:size-6" />
          <CarouselNext className="top-[unset] right-[0px] -bottom-[60px] h-[56px] w-[56px] border-[2px] border-[#2DA9DF80] text-[22px] text-[#2DA9DF] lg:-right-[100px] [&_svg:not([class*='size-'])]:size-6" />
        </Carousel>
      </section>
      <section className="bg-[#2DA9DF] py-10">
        <div className="m-auto max-w-[768px] text-center">
          <Image
            src="/assets/svg/ic_speaker.svg"
            width={80}
            height={80}
            className="m-auto"
            alt="speaker"
          />
          <h2 className="mb-2 text-[28px] leading-[34px] font-medium text-white md:text-[32px] md:leading-[46px]">
            Ready to Deliver the Perfect Pitch?
          </h2>
          <p className="pb-10 text-sm leading-6 font-medium text-white md:text-base">
            Ready to Deliver the Perfect Pitch?
          </p>
          <Button type="button" className="w-[200px]">
            Get started for free
          </Button>
        </div>
      </section>
      <section className="px-6 py-10 md:px-0 md:py-20">
        <div className="mx-auto max-w-[768px]">
          <div className="mb-12 text-center">
            <span className="text-sm leading-[20px] font-semibold text-[#1375BC] md:text-base">
              FAQs
            </span>
            <h2 className="text-[28px] leading-[34px] font-medium text-[#231F20] md:text-[32px] md:leading-[46px]">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion
            defaultValue={faqs.map((_, i) => `item-${i + 1}`)}
            type="multiple"
            className="w-full"
          >
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger className="text-[18px] leading-7 font-medium text-[#181D27] [&_svg]:text-[#A4A7AE]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] leading-6 text-[#535862]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="container mx-auto mt-11">
          <div className="rounded-[16px] bg-[#F3F8FC] py-10 text-center">
            <h3 className="mb-2 text-[20px] leading-[30px] font-semibold text-[#181D27]">
              Still have questions?
            </h3>
            <p className="text-[18px] leading-[28px] text-[#535862]">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <Button type="button" className="mt-8 w-[200px]">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
