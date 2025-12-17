import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";

import { toast } from "sonner";
const customBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraOptions: any
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
    prepareHeaders: async (headers) => {
      return headers;
    },
  });

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await baseQuery(args, api, extraOptions);
    if (result.error) {
      const skipToast = (
        args as FetchArgs & { meta?: { skipErrorToast?: boolean } }
      )?.meta?.skipErrorToast;

      const errorData = result.error.data;
      const errorMessage = errorData?.message
        ? errorData?.message
        : result?.error?.status === "FETCH_ERROR"
          ? "Internet Issues Detected"
          : result.error.status
            ? result.error.toString()
            : "An error occurred";
      // const errorMessage =
      //   errorData?.message ||
      //   result.error.status.toString() ||
      //   "An error occurred";
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !skipToast &&
        toast.error(`Error: ${errorMessage}`, {
          style: { background: "#fff", color: "red" },
          duration: 5000,
          closeButton: true,
          position: "top-right",
          cancel: true,
        });
    }

    const isMutationRequest =
      (args as FetchArgs).method && (args as FetchArgs).method !== "GET";
    const skipToast = (
      args as FetchArgs & { meta?: { skipErrorToast?: boolean } }
    )?.meta?.skipErrorToast;
    if (isMutationRequest && result.data.success && !skipToast) {
      const successMessage = result.data?.message;
      toast.success(successMessage, {
        style: { background: "#2da9df", color: "#fff" },
        duration: 5000,
        closeButton: true,
        position: "top-right",
        cancel: true,
      });
    }

    return result;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return {
      error: {
        status: "Internet issue or something broke up",
        error: errorMessage,
      },
    };
  }
};


interface ContactUsRequest {
  message: string;
  reason: string;
  file?: File;
}

export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: "api",
  tagTypes: ["Courses, Messages", "User"],
  // tagTypes: ["Courses", "Users", "UserCourseProgress"],
  endpoints: (build) => ({
    contactUs: build.mutation<
      { success: boolean; message: string },
      ContactUsRequest
    >({
      query: ({ message, reason, file }) => {
        const formData = new FormData();
        formData.append("message", message);
        formData.append("reason", reason);
        if (file) {
          formData.append("file", file);
        }

        return {
          url: "/contact-us",
          method: "POST",
          body: formData,
          credentials: "include" as const,
        };
      },
    }),
  }),
});

export const {

  useContactUsMutation
} = api;
