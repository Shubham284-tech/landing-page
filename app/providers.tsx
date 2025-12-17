"use client";

import StoreProvider from "@/state/storeProvider";
import React from "react";
import { Toaster } from "sonner";
// import StoreProvider from "@/state/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Toaster />
      {children}
    </StoreProvider>
  );
};

export default Providers;
