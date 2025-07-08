import React from 'react'
import PricingIcon from '@/assets/images/pricing-icon.png'
import Image from 'next/image'
import { Check, X, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
    {
        name: "Basic",
        price: 49,
        description: "Ideal for startups or MVPs looking to verify 100-500 users/month.",
        features: [
            { name: "Up to 1,000 API calls/month", included: true },
            { name: "Image & ID verification", included: true },
            { name: "Access to dashboard", included: true },
            { name: "Voice verification", included: false },
            { name: "Blockchain logging", included: false },
        ],
    },
    {
        name: "Pro",
        price: 99,
        description: "Best for growing platforms handling 2,000-10,000 verifications/month.",
        features: [
            { name: "10,000 API calls/month", included: true },
            { name: "Image, ID & voice verification", included: true },
            { name: "Real-time fraud alerts", included: true },
            { name: "Custom endpoint access", included: false },
            { name: "Limited blockchain logging", included: false },
        ],
    },
    {
        name: "Enterprise",
        price: 249,
        description: "For large-scale fintechs or government verification systems.",
        features: [
            { name: "Unlimited API usage", included: true },
            { name: "Full verification (image, voice, vid..)", included: true },
            { name: "Custom endpoint access", included: true },
            { name: "Advanced analytics & IP blocking", included: true },
            { name: "Dedicated account manager", included: true },
        ],
    },
]

export default function Pricing() {
    return (
        <section className='bg-[#3A3368] min-h-screen py-10 md:py-20 flex flex-col gap-8'>
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
                                <span className="text-4xl font-bold text-white">${plan.price}</span>
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
                                    className="w-full bg-[#7322F8]/20 hover:bg-[#7322F8] text-white font-medium py-3 rounded-full border border-purple-500"
                                    size="lg"
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
