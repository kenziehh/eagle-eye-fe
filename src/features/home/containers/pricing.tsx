"use client"
import React, { useEffect, useState } from 'react'
import PricingIcon from '@/assets/images/pricing-icon.png'
import Image from 'next/image'
import { Check, X, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createPayment, getCurrentTier } from '@/features/payment/services'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const pricingPlans = [
    {
        name: "Gratis",
        price: 0,
        description: "Cocok untuk testing dan pengguna awal.",
        features: [
            { name: "20 Verifikasi API / Bulan", included: true },
            { name: "Biaya kelebihan pemakaian: Upgrade ke Basic", included: true },
            { name: "Deteksi Wajah (Gambar)", included: true },
            { name: "Dashboard Lengkap", included: true },
            { name: "Keamanan Tambahan", included: false },
            { name: "Dukungan Prioritas", included: false },
        ],
    },
    {
        id: "basic",
        name: "Basic",
        price: "3.500.000",
        description: "Ideal untuk startup dengan kebutuhan sedang.",
        features: [
            { name: "2.500 Verifikasi API / Bulan", included: true },
            { name: "Biaya kelebihan: Rp 1.500 / verifikasi", included: true },
            { name: "Deteksi Wajah (Gambar & Video)", included: true },
            { name: "Dashboard Lengkap", included: true },
            { name: "IP Banning Manual", included: true },
            { name: "Dukungan Prioritas via Email", included: true },
        ],
    },
    {
        id: "premium",
        name: "Premium",
        price: "15.000.000",
        description: "Solusi lengkap untuk fintech skala besar.",
        features: [
            { name: "15.000 Verifikasi API / Bulan", included: true },
            { name: "Biaya kelebihan: Rp 1.200 / verifikasi", included: true },
            { name: "Deteksi Wajah (Gambar & Video)", included: true },
            { name: "Deteksi Suara (Voiceprint)", included: true },
            { name: "Dashboard Analitik & Kustom", included: true },
            { name: "IP Banning Otomatis", included: true },
            { name: "Penyimpanan Data di Blockchain", included: true },
            { name: "Manajer Akun Khusus & Dukungan 24/7", included: true },
        ],
    },
];


export default function Pricing() {
    const { data: session } = useSession()
    const router = useRouter();
    const [tier, setTier] = useState<"free" | "basic" | "premium">("free");
    const handleCheckout = async (tierId: string) => {
        try {
            if (!session?.user) {
                router.push('/auth/login');
            } else {
                const response = await createPayment(tierId);
                if (response && response.payments && response.payments.snap_url) {
                    window.location.href = response.payments.snap_url;
                } else {
                    toast.error("Payment initiation failed. Please try again.");
                }
            }

        } catch (err) {
            console.error("Payment failed:", err);
            alert("Failed to initiate payment. Please try again.");
        }
    };

    useEffect(() => {
        const fetchCurrentTier = async () => {
            const response = await getCurrentTier();
            return response.customers.tier;
        }
        if (session?.user) {
            fetchCurrentTier().then((tier) => {
                setTier(tier);
            });
        }
    }, [session]);

    return (
        <section id='pricing' className='bg-[#3A3368] min-h-screen py-10 md:py-20 flex flex-col gap-8'>
            <div className='flex items-center justify-center flex-col gap-6'>
                <Image alt='' src={PricingIcon} />
                <h1 className='text-xl md:text-6xl'>PRICING</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 container">
                {pricingPlans.map((plan, index) => (
                    <Card key={plan.name} className="bg-[#322B5E] hover:bg-[#8C24FB]/40 border-0 backdrop-blur-sm">
                        <CardHeader className="text-center pb-8">
                            <CardTitle className="text-2xl font-semibold text-white mb-4">{plan.name}</CardTitle>
                            <CardDescription className="text-purple-200 text-sm leading-relaxed px-2">
                                {plan.description}
                            </CardDescription>
                            <div className="mt-6">
                                <span className="text-4xl font-bold text-white">Rp. {plan.price}</span>
                                <span className="text-purple-200 ml-2">/ month</span>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            {plan.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-3">
                                    {feature.included ? (
                                        <div className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    ) : (
                                        <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                            <X className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                    <span className="text-purple-100 text-sm">{feature.name}</span>
                                </div>
                            ))}

                            <div className="pt-6">
                                <Button
                                    disabled={!plan.id || (plan.id === "basic" && tier !== "free") || (plan.id === "premium" && tier === "premium")}
                                    className="w-full bg-[#7322F8]/20 hover:bg-[#7322F8] text-white font-medium py-3 rounded-full border border-purple-500"
                                    size="lg"
                                    onClick={() => handleCheckout(plan.id ?? "")}

                                >
                                    Get Started
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </section>
    )
}
