import React from 'react'
import Hand from '@/assets/images/aboutus-hand.png'
import Ellipse from '@/assets/images/about-us-ellipse.png'
import AI from '@/assets/images/about-us-ai.png'
import Question from '@/assets/images/question.png'
import Check from '@/assets/images/check.png'
import Mask from '@/assets/images/about-us-mask.png'
import USB from '@/assets/images/aboutus-usb.png'
import Connect2 from '@/assets/images/connect2.png'

import Image from 'next/image'

export default function AboutUs() {
    return (
        <section id='about' className='relative py-10 md:py-24 mt-28'>
            <div className='container flex flex-col xl:flex-row justify-between gap-10 items-center'>
                <div className="relative max-w-[300px] d:max-w-[440px] border border-[#7322F8] rounded-xl bg-gradient-to-b from-[#A626FF] via-[#8C24FB] to-[#7322F8] shadow-lg py-9 pl-9 pr-12 ">
                    <div className='absolute z-10 left-8 -top-44'>
                        <Image src={Hand} alt='' className='z-10' />
                        <Image src={Ellipse} alt='' className='absolute -top-32 left-20 -z-20' />
                        <Image src={AI} alt='' className='absolute -top-20 left-34 -z-10' />
                    </div>
                    <Image src={Question} alt='' className='hidden sm:block absolute -right-14 -top-16 z-10' />
                    <Image src={Question} alt='' className='hidden sm:block absolute -right-20 top-12 z-10' />

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl md:text-2xl font-semibold'>What's EagleEye?</h2>
                        <p className='text-h5 md:text-h3'> EagleEye is a secure API service that helps platforms detect deepfakes and store verified evidence on the blockchain. With fast integration and tamper-proof logging, it empowers developers to protect digital content and ensure authenticity.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-7 relative'>
                    <Image src={Mask} alt='' className=' absolute -top-10 -z-10' />
                    <h2 className='text-primary text-base md:text-2xl'>Why Choose EagleEye?</h2>
                    <p className='max-w-[640px] text-[20px] md:text-[30px] font-bold '>Detect deepfakes instantly with secure blockchain logging for trusted and compliant platforms.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
                        {[
                            "Real Time Detection",
                            "Blockchain Logging",
                            "Scalable for Enterprise",
                            "Easy Integration",
                        ].map((text, idx) => (
                            <div
                                key={idx}
                                className="flex gap-2 items-center rounded-xl bg-gradient-to-b from-[#A626FF] via-[#8C24FB] to-[#7322F8] shadow-lg px-5 py-3 transform transition-transform duration-300 hover:scale-130"
                            >
                                <Image src={Check} alt="" />
                                <span className="text-h3">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className='py-32 container'>
                <Image src={Connect2} alt='' className='absolute -z-10 right-[30%] bottom-0' />
                <Image src={USB} alt='' className='absolute -z-10 left-[15%] bottom-0' />
            </div>

        </section>
    )
}

