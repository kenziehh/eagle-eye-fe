"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import HeroRight1 from "@/assets/images/hero-right1.png"
import HeroRight2 from "@/assets/images/hero-right2.png"
import HeroUSBRight from "@/assets/images/hero-usb-right.png"
import HeroUSBLeft from "@/assets/images/hero-usb-left.png"
import HeroLeft1 from "@/assets/images/hero-left1.png"
import HeroLeft2 from "@/assets/images/hero-left2.png"
import MascotHero from "@/assets/images/hero-mascot.png"
import MaskHero from "@/assets/images/mask-hero.png"
import Connect1 from "@/assets/images/connect1.png"

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import TypeWriter from '@/components/shared/type-writer'
export default function Hero() {

    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 1500);

        return () => clearInterval(interval);
    }, []);
    return (
        <section id='hero' className='py-10 md:py-24 relative'>
            <Image alt='' src={HeroRight2} className='absolute right-0' />
            <Image alt='' src={HeroRight1} className='absolute right-0' />
            <div className='flex justify-center items-center flex-col gap-4 md:gap-10'>
                <div className='text-center flex flex-col gap-6'>
                    <div className='flex flex-col lg:flex-row gap-5 items-center self-center'>
                        <h1 className='text-2xl md:text-5xl '>Welcome to..</h1>
                        <div className="bg-gradient-to-b from-[#A626FF]/30 via-[#8C24FB]/30 to-[#7322F8]/30 text-white rounded-lg py-4 px-10">
                            <TypeWriter fullText="Eagle Eye" />
                        </div>
                    </div>
                    <p className='text-h3 md:text-h1 max-w-[1100px] text-white/70'>An AI-powered API to detect deepfakes in real time and log every incident securely on the blockchain, ensuring tamper-proof protection for your digital ecosystem.</p>
                </div>
                <Button className="bg-gradient-to-r from-[#A626FF] via-[#8C24FB] to-[#7322F8] transition duration-300 flex items-center gap-2">
                    Get Started
                    <div className="flex flex-col items-center">
                        {step === 1 && (
                            <ChevronDown
                                className="w-5 h-5 font-bold md:w-7 md:h-7 animate-fade-in"
                                style={{ animationDelay: "0.1s" }}
                            />
                        )}
                        {step === 2 && (
                            <>
                                <ChevronDown
                                    className="w-5 h-5 font-bold md:w-7 md:h-7"
                                />
                                <ChevronDown
                                    className="w-5 h-5 font-bold md:w-7 md:h-7 -mt-2.5 animate-fade-in"
                                    style={{ animationDelay: "0.2s" }}
                                />
                            </>
                        )}
                    </div>
                </Button>

            </div>
            <div className='flex justify-center items-center py-18 relative'>
                <Image src={MascotHero} alt='' className='z-0' />
                <Image src={MaskHero} alt='' className='absolute -top-20 -z-10 object-cover' />
                <Image src={HeroUSBLeft} alt='' className='absolute left-0 z-10' />
                <Image src={HeroUSBRight} alt='' className='absolute right-0 z-10' />

            </div>
            <div className='relative left-0 -top-32'>
                <Image src={HeroLeft2} alt='' className='absolute -z-10 left-0' />
                <Image src={HeroLeft1} alt='' className='absolute -z-10 left-20 -top-4' />
            </div>
            <Image src={Connect1} alt='' className='absolute -z-10 -bottom-10 right-[25%]' />


        </section>
    )
}
