"use client";

import { Button } from "@/shared/components/ui/button";
import { Menu, ChevronDown, ShoppingBag, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useFont } from "@/context/FontContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("AZ");
  const { font: currentFont, setFont: handleFontChange } = useFont();

  const languages = ["AZ", "EN", "RU"];
  const fonts = [ "Barlow", "Poppins", "Montserrat", "SFPro"];

  const router = useRouter();
  const pathname = usePathname();

  const isOnTenderPage = pathname.startsWith('/tender');

  const userName = "Narmin Osmanova";


  return (
    <header className="z-20 w-full py-6 bg-white border-b border-zinc-200 sticky top-0">
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-zinc-900">
            Tender
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md_lg:flex items-center space-x-8">
          <Link href="/#about" className="text-zinc-700 hover:text-zinc-900">
            Haqqımızda
          </Link>
          <Link href="/#contact" className="text-zinc-700 hover:text-zinc-900">
            Bizimlə əlaqə
          </Link>
          <Link href="/#faq" className="text-zinc-700 hover:text-zinc-900">
            Tez-tez verilən suallar
          </Link>
          <Link href="/#testimonials" className="text-zinc-700 hover:text-zinc-900">
            Müştəri rəyləri
          </Link>
          <Link href="/news" className="text-zinc-700 hover:text-zinc-900">
            Xəbərlər
          </Link>
        </nav>

        {/* Font Selection Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-none shadow-none focus:outline-none focus:ring-0 w-32 flex items-center gap-1">
              {currentFont}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {fonts.map((font) => (
              <DropdownMenuItem
                key={font}
                onClick={() => handleFontChange(font)}
              >
                {font}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* CTA / User Info Buttons */}
        <div className="hidden md_lg:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-none shadow-none focus:outline-none focus:ring-0 w-16 flex items-center gap-1">
                {currentLanguage}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setCurrentLanguage(lang)}
                >
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {isOnTenderPage ? (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={()=>{router.push("/cart")}}>
                <ShoppingBag className="h-5 w-5 text-zinc-700" />
                <span className="sr-only">Cart</span>
              </Button>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-zinc-700" />
                <span className="text-zinc-700">{userName}</span>
              </div>
            </div>
          ) : (
            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white" onClick={() => router.push("/login")}>
              Daxil ol
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md_lg:hidden p-2 rounded-md text-zinc-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md_lg:hidden h-screen p-4 pt-2 bg-white border-t border-zinc-100">
          <nav className="flex flex-col space-y-4">
            <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="text-zinc-700 hover:text-zinc-900 py-2">
              Haqqımızda
            </Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-zinc-700 hover:text-zinc-900 py-2">
              Bizimlə əlaqə
            </Link>
            <Link href="/#faq" onClick={() => setIsMenuOpen(false)} className="text-zinc-700 hover:text-zinc-900 py-2">
              Tez-tez verilən suallar
            </Link>
            <Link href="/#testimonials" onClick={() => setIsMenuOpen(false)} className="text-zinc-700 hover:text-zinc-900 py-2">
              Müştəri rəyləri
            </Link>
            <Link href="/news" onClick={() => setIsMenuOpen(false)} className="text-zinc-700 hover:text-zinc-900">
              Xəbərlər
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-center border-[4px] border-zinc-300 outline-none flex items-center gap-1">
                    {currentLanguage}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-full">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => setCurrentLanguage(lang)}
                    >
                      {lang}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {isOnTenderPage ? (
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-zinc-700" />
                    <span className="text-zinc-700">{userName}</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ShoppingBag className="h-5 w-5 text-zinc-700" />
                    <span className="sr-only">Cart</span>
                  </Button>
                </div>
              ) : (
                <Button className="w-full justify-center bg-zinc-900 hover:bg-zinc-800 text-white" onClick={() => router.push("/login")}>
                  Daxil ol
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
