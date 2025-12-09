"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { CircleMinus, CirclePlus } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "relative flex flex-1 items-center justify-between gap-4 py-4 text-left font-medium transition",
          // ✅ PARENT STATE SE CHILD ICON CONTROL
          "[&[data-state=open]_.icon-plus]:opacity-0",
          "[&[data-state=open]_.icon-minus]:opacity-100",
          className
        )}
        {...props}
      >
        {children}

        {/* ICON WRAPPER */}
        <span className="relative size-5 shrink-0">
          {/* PLUS (DEFAULT) */}
          <CirclePlus className="icon-plus absolute inset-0 opacity-100 transition-opacity duration-200" />

          {/* MINUS (ONLY WHEN OPEN) */}
          <CircleMinus className="icon-minus absolute inset-0 opacity-0 transition-opacity duration-200" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
