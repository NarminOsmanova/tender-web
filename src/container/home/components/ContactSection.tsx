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

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Şirkət adı minimum 2 simvol olmalıdır",
  }),
  email: z.string().email({
    message: "Düzgün email ünvanı daxil edin",
  }),
  phone: z.string().regex(/^\+994\([0-9]{2}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/, {
    message: "Telefon nömrəsi düzgün formatda deyil: +994(00) 000 00 00",
  }),
  subject: z.string().min(5, {
    message: "Mövzu minimum 5 simvol olmalıdır",
  }),
  message: z.string().min(10, {
    message: "Mesaj minimum 10 simvol olmalıdır",
  }),
});

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Burada form məlumatlarını göndərmək üçün API çağırışı edə bilərsiniz
  }

  return (
    <section className="py-10 md:py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto justify-between">
          {/* Sol tərəf - Əlaqə məlumatları */}
          <div className="bg-gradient-to-r from-[#EAFFFC] to-white rounded-2xl p-8">
            <span className="inline-block text-teal-600 mb-4">Bizimlə əlaqə</span>
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-8">
              Əlaqə məlumatları
            </h2>
            
            <div className="space-y-6">
              {/* Phone Link */}
              <Link
                href="tel:+994002222222" // tel: prefix for calls
                className="flex items-center gap-3 group"
              >
                <PhoneIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
                <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">+994 00 222 22 22</span>
              </Link>
              
              {/* Email Link */}
              <Link
                href="mailto:info.tender.az" // mailto: prefix for emails
                className="flex items-center gap-3 group"
              >
                <EnvelopeClosedIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
                <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">info.tender.az</span>
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
                <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">Bəşir Bünyadov küç. 134</span>
              </a>
            </div>

            <div className="flex gap-4 mt-12">
              <Link href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Sağ tərəf - Form */}
          <div className="max-w-[504px] w-full">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <label htmlFor="companyName" className="text-zinc-900 text-sm">
                    Company name
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Input
                  id="companyName"
                  placeholder="Type your company name"
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
                    E-mail address
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Type your e-mail address"
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
                    Phone number
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Input
                  id="phone"
                  placeholder="+994(00) 000 00 00"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <label htmlFor="subject" className="text-zinc-900 text-sm">
                    Subject
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Input
                  id="subject"
                  placeholder="Type your subject here"
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
                    Message
                  </label>
                  <span className="text-teal-600">*</span>
                </div>
                <Textarea
                  id="message"
                  placeholder="Type your message here"
                  className="min-h-[120px]"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 rounded-xl h-14">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 