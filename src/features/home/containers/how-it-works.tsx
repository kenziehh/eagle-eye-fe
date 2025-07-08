import React from 'react'
import Path from "@/assets/images/how-it-works-path.png"
import PathWithStep from "@/assets/images/path.png"
import Check from "@/assets/images/check-hiw.png"
import Payment from "@/assets/images/payment-hiw.png"
import Key from "@/assets/images/key-hiw.png"
import Monitor from "@/assets/images/monitor-hiw.png"
import Integrate from "@/assets/images/integrate-hiw.png"
import Question from "@/assets/images/question-rounded.png"
import Image from 'next/image'


export default function HowItWorks() {
    return (
        <>
            <section className='py-10 md:py-20'>

            </section>
            <section className='lg:hidden'>
                <Image src={PathWithStep} alt='' className='w-full h-auto' />
            </section>
            <section className='container relative hidden lg:block'>
                <div className='absolute z-10 left-[6%] -top-14'>
                    <div className="flex gap-3 items-center py-3 px-5 rounded-[40px] bg-gradient-to-r from-[#A626FF] via-[#8C24FB] to-[#7322F8] w-fit">
                        <Image src={Check} alt='' />
                        <span className='font-bold text-lg md:text-xl'>Choose a Plan</span>
                    </div>
                    <p className='text-center text-sm md:text-base'>Pick a pricing plan<br />
                        (Basic, Pro, or Enterprise)
                    </p>
                </div>
                <div className='absolute -bottom-28 left-[28%] z-10'>
                    <div className="flex gap-3 items-center py-3 px-5 rounded-[40px] bg-gradient-to-r from-[#A626FF] via-[#8C24FB] to-[#7322F8] w-fit">
                        <Image src={Payment} alt='' />
                        <span className='font-bold text-lg md:text-xl'>Make a Payment</span>
                    </div>
                    <p className='text-center text-sm md:text-base'>Complete your payment <br />to activate the service.
                    </p>
                </div>
                <div className='absolute -top-20 left-[40%] z-10'>
                    <div className="flex gap-3 items-center py-3 px-5 rounded-[40px] bg-gradient-to-r from-[#A626FF] via-[#8C24FB] to-[#7322F8] w-fit">
                        <Image src={Key} alt='' />
                        <span className='font-bold text-lg md:text-xl'>Access Your API Key</span>
                    </div>
                    <p className='text-center text-sm md:text-base'>Get your unique API key and <br/>save it for integration
                    </p>
                </div>
                <div className='absolute -bottom-12 right-[20%] z-10'>
                    <div className="flex gap-3 items-center py-3 px-5 rounded-[40px] bg-gradient-to-r from-[#A626FF] via-[#8C24FB] to-[#7322F8] w-fit">
                        <Image src={Integrate} alt='' />
                        <span className='font-bold text-lg md:text-xl'>Integrate the API</span>
                    </div>
                    <p className='text-center text-sm md:text-base'>Pick a pricing plan<br />
                       Follow the docs to integrate <br/> image, ID, or voice checks
                    </p>
                </div>
                <div className='absolute -top-30 right-0  z-10'>
                    <div className="flex gap-3 items-center py-3 px-5 rounded-[40px] bg-gradient-to-r from-[#A626FF] via-[#8C24FB] to-[#7322F8] w-fit">
                        <Image src={Monitor} alt='' />
                        <span className='font-bold text-lg md:text-xl'>Monitor & Secure</span>
                    </div>
                    <p className='text-center text-sm md:text-base'>Track usage and block <br/> threats in your dashboard
                    </p>
                </div>

                <Image src={Path} alt='' className='' />

            </section>
            <section className='py-10 md:py-20'>

            </section>
        </>

    )
}
