import Navbar from '@/components/shared/navbar'
import Pricing from '@/features/home/containers/pricing'
import React from 'react'
import { Footer } from 'react-day-picker'

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <Pricing />
            <Footer />
        </>
    )
}
