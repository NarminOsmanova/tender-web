"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/shared/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useSimaQr } from '@/lib/hooks/useSimaService'

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
  const router = useRouter()
  const locale = useLocale()
  const { loading, error, qrCode, getQrCode } = useSimaQr()

  // Sima üçün nümunə data (bunları real dəyərlərlə əvəz et)
  const simaRequestData = {
   
    redirectUrl: `https://tender-web-eta.vercel.app/${locale}/tender`,
  }

  // Səhifə açılan kimi QR kodu al
  useEffect(() => {
    getQrCode(simaRequestData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex flex-col items-center pt-16 px-4">
      {/* Logo */}
      <div className="mb-12">
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
        {qrCode ? (
          <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center mb-8">
            <Image
              src={qrCode.startsWith('data:image') ? qrCode : `/api/qr-proxy?url=${encodeURIComponent(qrCode)}`}
              alt="QR Code"
              width={256}
              height={256}
              className="border border-gray-300"
            />
            <CountdownTimer initialMinutes={4} />
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center mb-8">
            <Image
              src="/QRCode.png"
              alt="QR Code"
              width={256}
              height={256}
              className="border border-gray-300 opacity-30"
            />
          </div>
        )}

        {/* Error */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Login Button artıq yoxdur */}
      </div>
    </div>
  )
} 