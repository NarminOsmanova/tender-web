"use client";

import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion";
import { useFaqs } from "@/lib/hooks/useFaqs";
import { useLocale, useTranslations } from "next-intl";

export default function FAQ() {
  const { data: faqs, isLoading, error } = useFaqs();
  const locale = useLocale();
  const t = useTranslations("faq");
  if (isLoading) {
    return (
      <section className="py-10 md:py-20 bg-white max-w-[880px] w-full mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 md:py-20 bg-white max-w-[880px] w-full mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">Error loading FAQs</div>
        </div>
      </section>
    );
  }

  const currentLanguage = locale.toUpperCase();

  const currentLanguageFaqs = faqs?.flatMap(faq =>
    faq.faqSetDtos.filter(set => set.language === currentLanguage)
  ) || [];

  return (
    <section className="py-10 md:py-20 bg-white max-w-[880px] w-full mx-auto scroll-mt-24 md:scroll-mt-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full">
          <div className="text-center mb-10">
            <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-2xl font-medium mb-4">
              {t("title")}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
              {t("subtitle")}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {currentLanguageFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b-2">
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
