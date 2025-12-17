"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { useSelector } from "react-redux";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactUsSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useContactUsMutation } from "@/state/api";

const page = () => {
  const router = useRouter();

  const [
    contactUs,
    {
      data: contactUsData,
      isLoading: isLoadingContactUs,
      isError: isErrorContactUs,
    },
  ] = useContactUsMutation();

  let defaultValues: { reason: string; message: string; file: null } = {
    reason: "",
    message: "",
    file: null,
  };

  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: { reason: "", message: "", file: null },
  });

  const onSubmit = async (values: z.infer<typeof ContactUsSchema>) => {
    console.log("Form submitted with values:", values);
    // router.push("/");

    if (values.file) {
      const maxSize = 4 * 1024 * 1024; // 4 MB in bytes
      if (values.file.size > maxSize) {
        console.error("File size exceeds 4 MB limit");
        // You might want to show an error message to the user here
        return;
      }
    }

    try {
      const result = await contactUs({
        reason: values.reason,
        message: values.message,
        file: values.file ?? undefined, // Pass undefined if no file is selected
      }).unwrap();
      if (result.success) {
        console.log("result----", result);
      }
    } catch (error) {
      console.log(error, "errorror");
    }
  };

  return (
    <div className="flex sm:min-h-screen min-w-full flex-1 mx-auto bg-back">
      <section className="flex items-center justify-center min-h-screen w-full relative">
        <div className="min-h-screen max-sm:mt-10 flex flex-col flex-start sm:flex-center mt-15 relative">
          {/* <div className="">
            <Button
              className="flex gap-2 items-center justify-center bg-blue-100"
              onClick={() => router.push("/recording")}
            >
              <Image
                src="/newPitch.png"
                height={17}
                width={24}
                alt="New Pitch"
              />{" "}
              New Pitch
            </Button>
          </div> */}
          <div className="my-4">
            <Image
              src="/logo.png"
              height={50}
              width={53}
              alt="Logo"
              className="cursor-pointer"
              onClick={() => router.push("/")}
            />{" "}
          </div>
          <h1 className="text-center heading text-black-200 mb-8 px-10">
            Contact us
          </h1>
          <p className="text-center mb-4 -mt-4 text-grey-200 px-10">
            Our team would love to hear from you
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="bg-white p-10 rounded-3xl md:w-[500px] max-md:w-[300px]">
                {Object.keys(defaultValues).map((fieldName) => {
                  return (
                    <FormField
                      key={fieldName}
                      control={form.control}
                      name={fieldName as any}
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="text-black-100 paragraph-medium mb-2">
                            {fieldName === "reason"
                              ? "Select Reason"
                              : fieldName === "message"
                                ? "Message"
                                : "Upload File"}
                          </FormLabel>
                          <FormControl>
                            {fieldName === "reason" ? (
                              <div className="relative w-full max-w-full ">
                                <select
                                  className="w-full appearance-none rounded-[24px] border border-[#5A5A5A] bg-white p-4 text-black-100 text-normal paragraph-regular focus:border-2 focus:border-black-300 focus:ring-0 focus:shadow-none text-sm"
                                  {...field}
                                  aria-placeholder="select"
                                >
                                  <option value="">Select</option>
                                  <option value="option1">Option One</option>
                                  <option value="option2">Option Two</option>
                                  <option value="option3">Option Three</option>
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black-100">
                                  <svg
                                    className="h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M5.516 7.548L10 12.032l4.484-4.484L16 8.548 10 14.548 4 8.548z" />
                                  </svg>
                                </div>
                              </div>
                            ) : fieldName === "message" ? (
                              <Textarea
                                placeholder="Leave us a message..."
                                className=" text-black-100 min-h-27 rounded-[8px] bg-white max-w-full border-[#5A5A5A] border-1 text-normal paragraph-regular
                            focus-visible:border-2 focus-visible:border-black-300 focus-visible:ring-0 focus-visible:shadow-none resize-none"
                                {...field}
                              />
                            ) : fieldName === "file" ? (
                              <div className="w-full">
                                {field.value ? (
                                  // Show uploaded image with larger preview
                                  <div className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-green-400 rounded-lg bg-green-50 relative">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation(); // Prevent the label click event
                                        field.onChange(null);
                                      }}
                                      className="cursor-pointer absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                                    >
                                      ×
                                    </button>
                                    <Image
                                      src={URL.createObjectURL(field.value)}
                                      width={200}
                                      height={200}
                                      alt="uploaded-file"
                                      className="object-cover rounded-lg"
                                    />
                                    <span className="text-green-700 mt-3 text-[14px] text-center font-medium">
                                      {field.value.name}
                                    </span>
                                    <span className="text-grey-400 text-[12px] mt-1">
                                      Click to change or use × to remove
                                    </span>
                                    <label className="absolute inset-0 cursor-pointer">
                                      <input
                                        type="file"
                                        className="hidden"
                                        accept=".png,.jpeg,.jpg"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          field.onChange(file ?? null);
                                        }}
                                      />
                                    </label>
                                  </div>
                                ) : (
                                  // Show upload prompt
                                  <label className="flex flex-col items-center justify-center h-[86px] border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                                    <Image
                                      src="/upload.png"
                                      width={24}
                                      height={24}
                                      alt="upload-icon"
                                    />
                                    <span className="text-grey-200 mt-2 text-[14px] text-center px-4">
                                      Upload Document (PNG or JPEG files up to 4
                                      MB only)
                                    </span>
                                    <input
                                      type="file"
                                      className="hidden"
                                      accept=".png,.jpeg,.jpg"
                                      onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        field.onChange(file ?? null);
                                      }}
                                    />
                                  </label>
                                )}
                              </div>
                            ) : null}
                          </FormControl>
                          <FormMessage className=" mx-10 mt-5" />
                        </FormItem>
                      )}
                    />
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 items-center mb-18">
                <p className="text-black-100 text-[16px] text-center ">
                  You can also contact us via email on <br />
                  <a
                    href="mailto:contact@pitchperfect.com"
                    className="text-blue-200 underline"
                  >
                    contact@pitchperfect.com
                  </a>
                  {/* <span className="text-blue-200">contact@pitchperfect.com</span> */}
                </p>

                <Button
                  className=" rounded-4xl min-h-[56px] bg-blue-200  mx-10 max-sm:w-[240px] sm:w-[300px] cursor-pointer"
                  type="submit"
                  // onClick={() => router.push("/")}
                  disabled={form.formState.isSubmitting}
                  // disabled={!form.formState.isValid || form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-grey-100 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default page;
