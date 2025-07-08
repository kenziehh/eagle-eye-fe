"use client"

import { useEffect, useState } from "react"
import { CheckCircle, KeyRound, DollarSign, Settings, ShieldCheck, HelpCircle } from "lucide-react"

const steps = [
  {
    title: "Choose a Plan",
    icon: <CheckCircle size={20} />,
    description: "Pick a pricing plan (Basic, Pro, or Enterprise)",
  },
  {
    title: "Access Your API Key",
    icon: <KeyRound size={20} />,
    description: "Get your unique API key and save it for integration",
  },
  {
    title: "Make a Payment",
    icon: <DollarSign size={20} />,
    description: "Complete your payment to activate the service",
  },
  {
    title: "Integrate the API",
    icon: <Settings size={20} />,
    description: "Follow the docs to integrate image, ID, or voice checks",
  },
  {
    title: "Monitor & Secure",
    icon: <ShieldCheck size={20} />,
    description: "Track usage and block threats in your dashboard",
  },
]

export default function HowItWorksTimeline() {
  return (
    <section className="relative py-20 px-6 bg-[#0C002C] text-white overflow-hidden">
      {/* Title */}
      <div className="flex items-center gap-2 mb-12">
        <div className="bg-purple-600 text-white rounded-full p-2">
          <HelpCircle size={20} />
        </div>
        <h2 className="text-3xl font-bold">How It Works?</h2>
      </div>

      {/* Timeline */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#200652] border border-purple-500/40 rounded-xl p-4 w-full md:w-[180px] text-center shadow-xl relative"
          >
            <div className="flex justify-center items-center mb-2 text-purple-400">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.description}</p>

            {/* Glowing Dot */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_12px_4px_rgba(168,85,247,0.6)]" />
          </div>
        ))}
      </div>

      {/* SVG Curved Path */}
      <svg className="absolute top-48 left-0 w-full h-40 z-0 pointer-events-none hidden md:block" viewBox="0 0 1000 200" fill="none">
        <path
          d="M0 100 C 200 0, 400 200, 600 100 C 800 0, 1000 200, 1200 100"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="gradient" x1="0" x2="1000" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
