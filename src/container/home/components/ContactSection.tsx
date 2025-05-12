"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { EnvelopeClosedIcon, HomeIcon } from "@radix-ui/react-icons";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { createContact, ContactFormData } from "@/services/contact";
import { toast, Toaster } from "sonner";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useTranslations } from "next-intl";
const formSchema = z.object({
  companyName: z.string().min(1, {
    message: "Şirkət adı daxil etmək məcburidir",
  }),
  email: z.string().email({
    message: "Düzgün email ünvanı daxil edin",
  }),
  phoneNumber: z.string().refine((val) => isValidPhoneNumber(val || "", "AZ"), {
    message: "Etibarlı Azərbaycan telefon nömrəsi daxil edin",
  }),
  subject: z.string().min(1, {
    message: "Mövzu daxil etmək məcburidir",
  }),
  message: z.string().min(1, {
    message: "Mesaj daxil etmək məcburidir",
  }),
});

export default function ContactSection() {
  const t = useTranslations("contact");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createContact,
    onSuccess: (response) => {
      toast.success(response.message || "Mesajınız uğurla göndərildi!");
      form.reset();
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
      console.error("Contact form error:", error);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }
  const { setValue, watch } = form;

  return (
    <section
      className="py-10 md:py-20 bg-white w-full scroll-mt-24 md:scroll-mt-20"
      id="contact"
    >
      <Toaster position="top-right" richColors />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto justify-between">
          {/* Sol tərəf - Əlaqə məlumatları */}
          <div className="bg-gradient-to-r from-[#EAFFFC] to-white rounded-2xl p-8">
            {/* <span className="inline-block text-teal-600 mb-4">Bizimlə əlaqə</span> */}
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-8">
              {t("title")}
            </h2>

            <div className="space-y-6">
              {/* Phone Link */}
              <Link
                href="tel:+994002222222" // tel: prefix for calls
                className="flex items-center gap-3 group"
              >
                <PhoneIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
                <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
                  +994 00 222 22 22
                </span>
              </Link>

              {/* Email Link */}
              <Link
                href="mailto:info.tender.az" // mailto: prefix for emails
                className="flex items-center gap-3 group"
              >
                <EnvelopeClosedIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
                <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
                  info.tender.az
                </span>
              </Link>

              {/* Address Link */}
              <a
                // Google Maps link (URL encode the address)
                href="https://www.google.com/maps/search/?api=1&query=B%C9%99%C5%9Fir+B%C3%BCnyadov+k%C3%BC%C3%A7.+134"
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="flex items-center gap-3 group"
              >
                <HomeIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
                <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
                  Bəşir Bünyadov küç. 134
                </span>
              </a>
            </div>
          </div>

          {/* Sağ tərəf - Form */}
          <div className="max-w-[504px] w-full">
            <h5 className="text-xl py-3">{t("apply")}</h5>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <label
                    htmlFor="companyName"
                    className="text-zinc-900 text-sm"
                  >
                    {t("company")}
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Input
                  id="companyName"
                  placeholder={t("typecompany")}
                  {...form.register("companyName")}
                />
                {form.formState.errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <label htmlFor="email" className="text-zinc-900 text-sm">
                    {t("email")}
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("typeemail")}
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <label htmlFor="phone" className="text-zinc-900 text-sm">
                    {t("phone")}
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <div className="relative">
                  <PhoneInput
                    country="AZ"
                    international
                    withCountryCallingCode
                    value={watch("phoneNumber")}
                    onChange={(value) => setValue("phoneNumber", value ?? "")}
                    className="border px-3 py-2 rounded w-full"
                    placeholder="994 55 111 11 11"
                  />
                </div>
                {form.formState.errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <label htmlFor="subject" className="text-zinc-900 text-sm">
                    {t("subject")}
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Input
                  id="subject"
                  placeholder={t("typesubject")}
                  {...form.register("subject")}
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <label htmlFor="message" className="text-zinc-900 text-sm">
                    {t("message")}
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Textarea
                  id="message"
                  placeholder={t("typemessage")}
                  className="min-h-[120px]"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-zinc-800 rounded-xl h-14"
                disabled={isPending}
              >
                {isPending ? t("sending") : t("send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
