"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"
import Question from "@/assets/images/question-rounded.png"
import FAQMascot from "@/assets/images/faq-mascot.png"

const faqItems = [
    {
        question: "Bagaimana cara mengintegrasikan API ke dalam aplikasi saya?",
        answer:
            "Ikuti dokumentasi lengkap kami di menu Docs. Terdapat panduan lengkap mulai dari otentikasi, endpoint, hingga contoh implementasi untuk deteksi wajah, ID, dan suara.",
    },
    {
        question: "Bisakah saya mencoba layanan ini sebelum membeli?",
        answer:
            "Ya, kami menawarkan uji coba gratis untuk layanan kami. Anda dapat mendaftar dan mulai menggunakannya segera.",
    },
    {
        question: "Berapa lama proses integrasi API-nya?",
        answer:
            "Proses integrasi API bervariasi tergantung pada kompleksitas aplikasi Anda, tetapi umumnya dapat diselesaikan dalam beberapa jam hingga beberapa hari dengan mengikuti dokumentasi kami.",
    },
    {
        question: "Bisakah saya mengganti paket langganan setelah mendaftar?",
        answer:
            "Tentu saja! Anda dapat meningkatkan atau menurunkan paket langganan Anda kapan saja melalui dashboard akun Anda.",
    },
]

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <section id="faq" className="container py-20">
            {/* HEADER GRADIENT */}
            <div className="flex flex-row gap-5 bg-[#482484] border border-[#A626FF] px-5 py-3 rounded-[50px] w-full mb-10 ">
                <Image src={Question} alt="FAQ Icon" width={40} height={40} />
                <span className="font-bold text-lg md:text-2xl text-white">
                    FREQUENTLY ASKED QUESTIONS
                </span>
            </div>

            {/* FAQ ITEM LIST */}
            <div className="relative space-y-4 bg-[rgba(50,43,94,1)] rounded-3xl">
                <div className="px-5 py-6 bg-gradient-to-b from-[#A626FF] via-[#8C24FB] to-[#7322F8] rounded-t-3xl flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-[rgba(85,72,179,1)]" />
                    <div className="w-6 h-6 rounded-full bg-[rgba(85,72,179,1)]" />
                    <Image
                        src={FAQMascot}
                        alt="FAQ Mascot"
                        className="absolute right-20 -top-40" />
                </div>
                <div className="px-4 py-6 space-y-8">{faqItems.map((item, index) => {
                    const isOpen = openIndex === index
                    return (
                        <div
                            key={index}
                            className={`rounded-xl border border-[#7322F8] px-5 py-4 transition-colors duration-300 ${isOpen
                                ? "bg-gradient-to-b from-[#A626FF] via-[#8C24FB] to-[#7322F8]"
                                : "bg-[rgba(58,51,104,1)]"
                                }`}
                        >
                            <button
                                className="flex items-center justify-between w-full text-left text-white"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)] text-sm font-bold">
                                        {index + 1}
                                    </div>
                                    <span className="text-2xl font-semibold">{item.question}</span>
                                </div>
                                {isOpen ? (
                                    <Minus className="w-6 h-6 text-white" />
                                ) : (
                                    <Plus className="w-6 h-6 text-white" />
                                )}
                            </button>
                            {isOpen && (
                                <div className="mt-3 text-white text-xl">{item.answer}</div>
                            )}
                        </div>
                    )
                })}</div>

            </div>
        </section>
    )
}
