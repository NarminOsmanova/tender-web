"use client";

import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion";

const faqData = [
  {
    question: "What is a tender, and how does the tender process work?",
    answer: "A tender is a formal invitation issued by an organization or government entity requesting bids or proposals from suppliers, contractors, or service providers to carry out a specific job, project, or supply goods/services. The process is typically competitive, ensuring transparency, fairness, and the best value for money."
  },
  {
    question: "What documents are required to submit a tender?",
    answer: "Required documents typically include company registration, tax certificates, financial statements, technical proposals, and other specific documentation as requested in the tender notice."
  },
  {
    question: "What documents are required to submit a tender?",
    answer: "Required documents typically include company registration, tax certificates, financial statements, technical proposals, and other specific documentation as requested in the tender notice."
  },
  {
    question: "What documents are required to submit a tender?",
    answer: "Required documents typically include company registration, tax certificates, financial statements, technical proposals, and other specific documentation as requested in the tender notice."
  },
  {
    question: "What documents are required to submit a tender?",
    answer: "Required documents typically include company registration, tax certificates, financial statements, technical proposals, and other specific documentation as requested in the tender notice."
  }
];

export default function FAQ() {
  return (
    <section className="py-10 md:py-20 bg-white max-w-[880px] w-full mx-auto">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full">
          <div className="text-center mb-10">
            <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Tez-tez verilən suallar
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
              Sualınız var? Bütün cavablar bizdə!
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
