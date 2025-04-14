"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/shared/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Timer component
const CountdownTimer = ({ initialMinutes = 5 }: { initialMinutes?: number }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)

  useEffect(() => {
    if (timeLeft <= 0) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="text-center text-blue-600 mt-4">
      Bitmə vaxtı: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  )
}

export function Login() {
  const router=useRouter()
  return (
    <div className="min-h-screen bg-[#F7F8FC] flex flex-col items-center pt-16 px-4">
      {/* Logo */}
      <div className="mb-12">
        {/* Replace with your actual logo component or image */}
        <span className="text-3xl font-bold">digital<span className="text-blue-600">•</span>login</span>
      </div>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {/* Back Button */}
        <Button variant="outline" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Geri
        </Button>

        {/* Title */}
        <h1 className="text-xl font-semibold text-zinc-900 mb-6">
          SİMA Rəqəmsal İmza ilə giriş
        </h1>

        {/* QR Code Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center mb-8">
          {/* <QRCodePlaceholder /> */}
          <Image 
            src="/QRCode.png" 
            alt="QR Code" 
            width={256} // w-64 is 256px
            height={256} // h-64 is 256px
            className="border border-gray-300" // Keep border for visual structure
          />
          <CountdownTimer initialMinutes={4} />
        </div>

        {/* Login Button */}
        <Button className="w-full bg-zinc-900 hover:bg-zinc-800" onClick={() => router.push("/tender")}>
          Daxil ol
        </Button>
      </div>
    </div>
  )
} 