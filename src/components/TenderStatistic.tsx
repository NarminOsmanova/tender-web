"use client"

import React from 'react'
import { FileText, MessageSquare, ClipboardList } from 'lucide-react'

const statsData = [
  {
    icon: FileText,
    value: "3 000",
    label: "Bağlanmış müqavilələrin sayı",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-600",
    iconBgColor: "bg-white",
    iconColor: "text-teal-600",
  },
  {
    icon: MessageSquare,
    value: "4 200",
    label: "Təklif və sorğuların sayı",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-200",
    textColor: "text-lime-600",
    iconBgColor: "bg-white",
    iconColor: "text-lime-600",
  },
  {
    icon: ClipboardList,
    value: "1 250",
    label: "Aktiv tenderlərin sayı",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    textColor: "text-pink-600",
    iconBgColor: "bg-white",
    iconColor: "text-pink-600",
  },
]

export function TenderStatistic() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${stat.borderColor} ${stat.bgColor} flex flex-col justify-between h-full`}
            >
              <div className="flex justify-start mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.iconBgColor}`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
              <div className="text-left">
                <p
                  className={`text-4xl font-semibold mb-2 ${stat.textColor}`}
                >
                  {stat.value}
                </p>
                <p className="text-zinc-600 text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 