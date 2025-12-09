import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CircleCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const faqs = [
  { q: "Is there a free trial available?", a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
  { q: "Can I customize the AI’s recommendations to fit my sales strategy?", a: "Yes! Before each role-play, you’ll have the option to upload PDFs or enter relevant information about your company’s sales process, pitch framework, or product details. The AI uses that input to tailor the experience to your specific strategy — so you’re not just practicing sales, you’re practicing your sales." },
  { q: "How long does it take to see results with Pitch Perfect AI?", a: "You’ll start seeing results after just one role play. The moment you hear clear, specific feedback on how to improve — whether it’s objection handling, tonality, or changing your discovery questions — you’ll know exactly what to tweak. And when you take that feedback, apply it, and run it back? That’s when the real growth happens. It’s like having a private coach you can revisit anytime." },
]

export default function Home() {
  return <>
    <div className=" relative min-h-screen pt-8 md:pt-[60px] overflow-hidden
before:absolute before:inset-0 before:-z-1 before:content-['']
before:bg-[url('/assets/img/ic_bg_sales_sec.png')]
before:bg-cover before:bg-center before:bg-no-repeat before:h-full">``
      <Image src={'/assets/svg/ic_logo_small.svg'} className="m-auto" width={43} height={43} alt="logo" />
      <section className="text-center max-w-[848px] m-auto px-8 md:px-0 pt-8 md:pt-[60px]">
        <div className="mx-auto mb-2 flex justify-center items-center rounded-[4px] max-w-[190px] bg-[linear-gradient(150.95deg,rgba(35,31,32,0.04)_-9.16%,rgba(45,169,223,0.04)_80.66%)]">
          <Image src={'/assets/svg/ic_ai_pitches.svg'} width={22} height={20} alt="AI-Powered Pitches" />
          <p className="font-acumin font-medium text-[16px] leading-[24px] tracking-normal text-center bg-[linear-gradient(214.29deg,#231F20_-3.01%,#2DA9DF_103.43%)] bg-clip-text text-transparent">
            AI-Powered Pitches
          </p>
        </div>
        <h1 className="font-semibold text-[36px] md:text-[36px] md:text-[48px] text-center text-[#231F20] mb-3">Salespeople! <br></br> Stop practicing on your prospects</h1>
        <p className="font-medium text-[12px] md:text-[18px] leading-[22px] md:leading-[28px] tracking-normal text-center text-[#5A5A5A] mb-12">Practice your sales pitch in with a custom tailored AI buyer that talks back — then get instant feedback to sharpen your skills and close with confidence. The AI sales role-play platform that helps you practice your pitch, overcome objections, and master your delivery — before the real deal.</p>
        <Button variant='secondary' type="button" className="w-[200px]">Try a Pitch Now</Button>
      </section>
      <section className="relative min-h-screen pt-[60px] overflow-hidden">
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
                className="basis-[70%] md:basis-[33%] px-4"
              >
                <div className="shadow-[0_0_15px_0_#00000040] rounded-xl">
                  <Image src='/assets/img/ic_dashboard.jpg' alt="dashboard_1" width={660} height={387} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="grid grid-cols-1 pt-15 md:pt-30 lg:grid-cols-2">
          <div className="flex flex-col gap-0 md:gap-24">
            <div className="w-full sm:max-w-[650px] lg:max-w-[526px] mx-auto px-6 md:ps-0">
              <h2 className="font-semibold text-[36px] md:text-[48px] text-[#1375BC]">
                Sales leaders,
                you’re measuring
                the wrong metrics!
              </h2>

              <p className="text-[#231F20] font-semibold text-[16px] md:text-[24px] leading-[28px] md:leading-[40px]">
                Let’s help you fix that
              </p>

              <p className="text-[#5A5A5A] mt-4 font-medium text-[12px] md:text-[20px] leading-[22px] md:leading-[32px]">
                Get a clear view of your team’s real-time pitch activity,
                performance scores, and progress. See how many reps are
                actually practicing, how well they’re handling objections,
                and dive into each pitch with detailed feedback — all from
                one powerful dashboard.
              </p>
            </div>
            <Image src='/assets/img/ic_sales_mobile.png' width={620} height={405} className="w-full block lg:hidden" alt="sales mobile" />
            <div className="relative flex justify-center hidden lg:block">
              <Image
                width={620} height={405}
                src="/assets/img/ic_mac_sales.png"
                alt="Team Dashboard Laptop"
                className="w-full"
              />
            </div>
          </div>
          <div className="relative flex justify-center pt-15 lg:justify-end hidden lg:block">
            <Image
              width={620} height={405}
              src="/assets/img/ic_sales_dashboard.jpg"
              alt="Member Profile Dashboard"
              className="rounded-2xl w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
    <section className="py-15 lg:py-32 bg-white overflow-hidden flex flex-col gap-15   lg:gap-20">
      <div className="text-center max-w-[768px] m-auto px-8 lg:px-0">
        <span className="font-semibold text-sm md:text-base text-[#1375BC] leading-[20px]">Features</span>
        <h2 className="font-medium text-[28px] md:text-[32px] text-[#231F20] mb-2 md:mb-4 leading-[34px] md:leading-[46px] ">Build the exact pitch scenario you
          want—down to your buyer’s persona, industry, and difficulty level</h2>
        <p className="font-medium text-sm md:text-base text-[#5A5A5A] leading-[24px]">Struggling to craft the perfect pitch? Our
          AI-driven platform analyzes your goals,audience, and industry to generate tailored, high-converting pitches—so
          you can focus on closing deals.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className='px-8 lg:ps-22'>
          <p className="font-medium text-sm md:text-base leading-[24px] text-[#5A5A5A]">Step 01</p>
          <h3 className="font-medium text-[28px] md:text-[32px] leading-[34px] md:leading-[46px] text-[#231F20] mt-3">
            Select Your Target Audience: B2B or B2C
          </h3>
          <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={23} height={23} />
              Identify whether your product or service is tailored for businesses (B2B) or individual consumers (B2C).
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Understanding your target audience helps refine your strategy
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Customize your offerings to meet the unique needs of businesses or end users.
            </li>
          </ul>
        </div>
        <div className="relative lg:mt-0">
          <div className="mr-auto w-full">
            <div
              className="rounded-[0px] lg:rounded-[24px] opacity-100 bg-[#F3F8FC] border border-[#2DA9DF80] shadow-[0px_0px_30px_0px_#2DA9DF1A] flex flex-col gap-12 p-12">
              <Image src={'/assets/svg/ic_logo_small.svg'} className="m-auto" width={43} height={43} alt="logo" />
              <h4 className="font-medium text-[23.38px] leading-[33.6px] text-center">
                Select your target buyer
              </h4>
              <div className="grid grid-cols-2 gap-6 max-w-[338px] pb-12 mx-auto">
                <div
                  className="bg-white rounded-[17.53px] border-[0.73px] border-[#2DA9DF80] p-[11.69px] gap-[7.3px] text-center">
                  <Image src={'/assets/svg/ic_business_consumer.svg'} className="m-auto" width={146} height={146}
                    alt="Business to Consumer" />
                  <p className="font-medium text-[11.69px] leading-[17.53px] pt-[11.69px]">Business to Consumer</p>
                </div>

                <div
                  className="bg-white rounded-[17.53px] border-[0.73px] border-[#2DA9DF80] p-[11.69px] gap-[7.3px] text-center">
                  <Image src={'/assets/svg/ic_business_to_business.svg'} className="m-auto" width={146} height={146}
                    alt="Business to Consumer" />
                  <p className="font-medium text-[11.69px] leading-[17.53px] pt-[11.69px]">Business to Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative lg:mt-0 order-2 lg:order-1">
          <div
            className="rounded-[0px] lg:rounded-[24px] opacity-100 bg-[#F3F8FC] border border-[#2DA9DF80] shadow-[0px_0px_30px_0px_#2DA9DF1A] flex flex-col gap-12 p-12">
            <Image src={'/assets/svg/ic_logo_small.svg'} className="m-auto" width={43} height={43} alt="logo" />
            <div className='flex items-center justify-between'>
              <h4 className="font-medium text-[23.38px] leading-[33.6px] text-center">
                Let’s build your buyer personal
              </h4>
              <span className='font-medium text-[8.78px] leading-[13.18px] text-center text-[#5A5A5A]'>skip</span>
            </div>
            <Image src={'/assets/svg/ic_ideal_customer.svg'} className="m-auto" width={461} height={494}
              alt="Business to Consumer" />
          </div>
        </div>
        <div className='flex flex-col ps-8 lg:ps-0 order-1 lg:order-2'>
          <p className="font-medium text-sm md:text-base leading-[24px] text-[#5A5A5A]">Step 02</p>
          <h3 className="font-medium text-[28px] md:text-[32px] leading-[34px] md:leading-[46px] text-[#231F20] mt-3">
            Define Your Ideal Customer and Industry
          </h3>
          <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Identify the key characteristics of your target customer.
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Specify the industry they belong to for a more focused approach.
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Tailor your strategy to meet the specific needs of your target market.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className='lg:ps-22 ps-8'>
          <p className="font-medium text-sm md:text-base leading-[24px] text-[#5A5A5A]">Step 03</p>
          <h3 className="font-medium text-[28px] md:text-[32px] leading-[34px] md:leading-[46px] text-[#231F20] mt-3">
            Choose Your Difficulty Level and Start Your Pitch
          </h3>
          <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Select the challenge level that suits you best.
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Tailor your pitch based on the selected difficulty.
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Get ready to deliver a confident and impactful pitch.
            </li>
          </ul>
        </div>
        <div className="relative lg:mt-0">
          <div className="mr-auto w-full">
            <div
              className="rounded-[0px] lg:rounded-[24px] opacity-100 bg-[#F3F8FC] border border-[#2DA9DF80] shadow-[0px_0px_30px_0px_#2DA9DF1A] flex flex-col gap-12 p-12">
              <Image src={'/assets/img/ic_choose_level.jpg'} className="m-auto" width={762} height={472} alt="Difficulty Level" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative lg:mt-0 order-2 lg:order-1">
          <div
            className="rounded-[0px] lg:rounded-[24px] opacity-100 bg-[#F3F8FC] border border-[#2DA9DF80] shadow-[0px_0px_30px_0px_#2DA9DF1A] flex flex-col gap-12 p-12">
            <Image src={'/assets/img/ic_in_depth.jpg'} className="m-auto" width={762} height={506} alt="In-Depth Feedback" />
          </div>
        </div>
        <div className='flex flex-col ps-8 lg:ps-0 order-1 lg:order-2'>
          <p className="font-medium text-sm md:text-base leading-[24px] text-[#5A5A5A]">Step 04</p>
          <h3 className="font-medium text-[28px] md:text-[32px] leading-[34px] md:leading-[46px] text-[#231F20] mt-3">
            Get In-Depth Feedback for Continuous Improvement
          </h3>
          <ul className="mt-6 space-y-4 text-[#231F20] text-gray-600">
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Gain valuable insights to enhance your product or service.
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Identify strengths and areas for improvement through detailed analysis.
            </li>
            <li className="flex font-medium text-sm md:text-base leading-[24px] gap-3 items-start">
              <CircleCheck className="text-[#2DA9DF]" width={17} height={17} />
              Refine your strategy based on actionable feedback.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="bg-[#231F20] p-15 md:p-24">
      <div className="container">
        <div className="text-center max-w-[768px] m-auto">
          <span className="font-semibold text-sm md:text-base text-[#1375BC] leading-[20px]">How it works</span>
          <h2 className="font-medium text-[28px] md:text-[32px] text-white mb-3 mt-2 leading-[34px] md:leading-[46px] ">Give your Perfect Pitch Today!</h2>
          <p className="font-medium text-sm md:text-base text-[#F3F8FC] leading-[24px]">Discover how Pitch Perfect AI adapts to diverse customers and their needs</p>
        </div>
      </div>
    </section>
    <section className="px-6 pt-10 pb-20 md:p-20 flex flex-col gap-[20px]">
      <div className="text-center max-w-[768px] m-auto">
        <span className="font-semibold text-sm md:text-base text-[#1375BC] leading-[20px]">Testimonials</span>
        <h2 className="font-medium text-[28px] md:text-[32px] text-[#231F20] leading-[34px] md:leading-[46px] ">Hear from the Perfect Pitchers!</h2>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        // orientation="vertical"
        className="max-w-[780px] m-auto w-full"
      >
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <CarouselItem
              key={i}
            >
              <div className="text-center">
                <Image src='/assets/img/ic_dummy.jpg' width={145} height={144} alt="Testimonials-profile" className="rounded-full m-auto pb-4" />
                <p className="font-medium text-[20px] leading-[32px] text-[#5A5A5A] pb-2">Taylor S.</p>
                <p className="font-medium text-[14px] leading-[20px] text-[#5A5A5A] pb-4">Director of Sales</p>
                <p className="font-medium text-[16px] leading-[24px] text-center text-[#231F20]">“Pitch Perfect AI completely changed the way I coach my team. Before, I was spending hours trying to figure out why certain reps weren’t closing — was it their pitch, their objection handling, their confidence? Now, with the sales dashboard, I can instantly see who’s actually practicing, what they're struggling with, and where they’re improving. I don’t have to run endless role-plays or guess what’s going wrong — the data tells the story. Funny enough, I realized it wasn’t the number of prospect calls that predicted success — it was the number of practice reps with Pitch Perfect AI. I really was measuring the wrong metric.”</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-[#2DA9DF80] left-[0px] lg:-left-[100px] border-[2px] w-[56px] text-[22px] h-[56px] -bottom-[60px] top-[unset] text-[#2DA9DF] [&_svg:not([class*='size-'])]:size-6" />
        <CarouselNext className="border-[#2DA9DF80] lg:-right-[100px] right-[0px] border-[2px] w-[56px] text-[22px] h-[56px] -bottom-[60px] top-[unset] text-[#2DA9DF] [&_svg:not([class*='size-'])]:size-6" />
      </Carousel>
    </section>
    <section className="bg-[#2DA9DF] py-10">
      <div className="text-center max-w-[768px] m-auto">
        <Image src='/assets/svg/ic_speaker.svg' width={80} height={80} className="m-auto" alt='speaker' />
        <h2 className="font-medium text-[28px] md:text-[32px] text-white leading-[34px] md:leading-[46px] mb-2">Ready to Deliver the Perfect Pitch?</h2>
        <p className="font-medium text-sm md:text-base text-white leading-[24px] pb-10">Ready to Deliver the Perfect Pitch?</p>
        <Button type="button" className="w-[200px]">Get started for free</Button>
      </div>
    </section>
    <section className="px-6 md:px-0 py-10 md:py-20">
      <div className="max-w-[768px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-semibold text-sm md:text-base text-[#1375BC] leading-[20px]">FAQs</span>
          <h2 className="font-medium text-[28px] md:text-[32px] text-[#231F20] leading-[34px] md:leading-[46px] ">Frequently Asked Questions</h2>
        </div>
        <Accordion defaultValue={faqs.map((_, i) => `item-${i + 1}`)} type="multiple" className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i + 1}`}>
              <AccordionTrigger className="font-medium text-[18px] leading-[28px]  text-[#181D27] [&_svg]:text-[#A4A7AE]">{item.q}</AccordionTrigger>
              <AccordionContent className="text-[16px] leading-[24px] text-[#535862]">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="container mx-auto mt-11">
        <div className="bg-[#F3F8FC] text-center py-10 rounded-[16px]">
          <h3 className="text-[20px] font-semibold leading-[30px] text-[#181D27] mb-2">Still have questions?</h3>
          <p className="text-[18px] leading-[28px] text-[#535862]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <Button type="button" className="w-[200px] mt-8">Get started for free</Button>
        </div>
      </div>
    </section>

  </>
}
