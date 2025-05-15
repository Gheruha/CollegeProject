"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { normative_acts } from "./db/normative-acts";
export default function Page() {
  return (
    <div className="w-full lg:h-screen lg:p-0 pt-20 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-4 space-y-6 flex flex-col">
        <h1 className="text-2xl font-bold text-left">Acte normative</h1>
        <Accordion type="single" collapsible className="space-y-2">
          {normative_acts.map((v) => (
            <AccordionItem key={v.id} value={v.id}>
              <AccordionTrigger>{v.title}</AccordionTrigger>
              <AccordionContent>
                <a href={v.link}>{v.link}</a>
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* adaugă câte iteme vrei */}
        </Accordion>
      </div>
    </div>
  );
}
