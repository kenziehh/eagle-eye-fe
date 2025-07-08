import React from 'react'
import FooterLogo from "@/assets/images/logo-footer.png"
import WALogo from "@/assets/images/logo-wa.png"

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='bg-gradient-to-b from-[#A626FF] via-[#8C24FB] to-[#7322F8] py-16 '>
            <section className='container oy-16 flex flex-col md:flex-row justify-between gap-6'>
                <div className='flex flex-col gap-3'>
                    <Image src={FooterLogo} alt='EagleEye Logo' />
                    <p className='max-w-[440px]'>Trusted API solution for deepfake detection and identity verification, powered by AI & Blockchain.
                        <br />Securing fintech, education, and digital platforms with real-time protection and tamper-proof verification.</p>
                </div>
                <div className='flex flex-col gap-4 items-start'>
                    <h2>INFORMATION</h2>
                    <Link href={"/"} className='block text-sm md:text-base'>About Us</Link>
                    <Link href={"/"} className='block text-sm md:text-base'>How It Works</Link>
                    <Link href={"/"} className='block text-sm md:text-base'>Pricing</Link>
                    <Link href={"/"} className='block text-sm md:text-base'>Try Demo</Link>
                </div>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='flex gap-2 items-center'>
                        <Image src={WALogo} alt='WhatsApp Logo' className='w-6 h-6 inline-block' />
                        <span>General Support</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={WALogo} alt='WhatsApp Logo' className='w-6 h-6 inline-block' />
                        <span>Technical Support</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={WALogo} alt='WhatsApp Logo' className='w-6 h-6 inline-block' />
                        <span>Integration Help</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={WALogo} alt='WhatsApp Logo' className='w-6 h-6 inline-block' />
                        <span>Report Abusd</span>
                    </div>
                </div>
            </section>
            <div className='container flex gap-6 items-center flex-col'>
                <hr className='h-0.5 w-full bg-white mt-10' />
                <span className='font-bold text-center'>Copyright © 2025 | BCC Karsa</span>
            </div>
        </footer>
    )
}
